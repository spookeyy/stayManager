# SQLAlchemy operations

# Flask
import random
import datetime
from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity, get_jwt
from datetime import timedelta
from flask_cors import CORS
from flask_bcrypt import Bcrypt
# from flask_mail import Mail # Flask-Mail for sending emails
bcrypt = Bcrypt()




app  = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///hotel.db" # postgres
CORS(app)
app.config["SECRET_KEY"] = "jdhfvksdjkgh"+ str(random.randint(1, 1000000))
app.config["JWT_SECRET_KEY"] = "evrfsejhfgvret"+ str(random.randint(1, 1000000))
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=1)
jwt = JWTManager(app)

from models import db, User, Booking, Room, Review
migrate = Migrate(app, db)
db.init_app(app)

from datetime import datetime

# Types of Authentication
# 1. Basic Authentication - Cookies
# 2. JWT Authentication - Tokens - sjgdsrkghugfraekjhsdfgvbsduhkfgeyhlskbvgsjhdfbgvsdjklhlkfvbsdkjfbvsdkjh
        

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token":access_token})

    else:
        return jsonify({"error": "Wrong credentials"}), 401
    
# Fetch Current user
@app.route("/current_user", methods=["GET"])
@jwt_required()
def current_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    user_data = {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "phone_number": user.phone_number,
        "is_admin": user.is_admin,
    }
    return jsonify(user_data), 200

# Logout
BLACKLIST = set()
@jwt.token_in_blocklist_loader
def check_if_token_in_blocklist(jwt_header, decrypted_token):
    return decrypted_token['jti'] in BLACKLIST

@app.route("/logout", methods=["DELETE"])
@jwt_required()
def logout():
    jti = get_jwt()["jti"]
    BLACKLIST.add(jti)
    return jsonify({"success":"Successfully logged out"}), 200



# User registration
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()

    email = request.json.get("email", None)
    email_exists = User.query.filter_by(email=email).first()
    if email_exists:
        return jsonify({"error": "Email already exists"}), 400
        
    
    new_user = User(
        name= request.json.get("name", None), 
        email= request.json.get("email", None),
        password= bcrypt.generate_password_hash( request.json.get("password", None) ).decode('utf-8') ,

        phone_number=data.get('phone_number'),
        is_admin=data.get('is_admin', False),
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"success": "User created successfully"}), 201

# Fetching users requires an user who is an admin
@app.route('/users', methods=['GET'])
@jwt_required()
def get_users():
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)
    
    if current_user.is_admin:
        users = User.query.all()
        user_list = [{
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "phone_number": user.phone_number,
            "is_admin": user.is_admin,
        } for user in users]
        return jsonify(user_list), 200
    else:
        return jsonify({"error": "You are not authorized to view this page"}), 401


@app.route('/users/<int:id>', methods=['GET'])
@jwt_required()
def get_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"message": "User not found"}), 404
    return jsonify({
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "phone_number": user.phone_number,
        "is_admin": user.is_admin,
    }), 200



#Update Profile should be done the the loggedin user only
@app.route('/users', methods=['PUT'])
@jwt_required()
def update_profile():
    data = request.get_json()

    loggedin_user_id = get_jwt_identity()
    user = User.query.get(loggedin_user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404
    

    # email_exists = User.query.filter_by(email=data['email']).first()
    # if email_exists:
    #     return jsonify({"error": "Email already exists"}), 400

    user.name = data.get('name', user.name)
    user.email = user.email
    user.password = bcrypt.generate_password_hash( data['password'] ).decode('utf-8') 
    user.phone_number = data.get('phone_number', user.phone_number)
    user.is_admin = data.get('is_admin', user.is_admin)
    db.session.commit()
    return jsonify({"success": "User updated successfully"}), 200

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"message": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted successfully"}), 200



# CRUD for Rooms
@app.route('/rooms', methods=['POST'])
@jwt_required()
def create_room():
    # current_user_id = get_jwt_identity()

    # current_user = User.query.get(current_user_id)

    data = request.json
    new_room = Room(
        room_number=data['room_number'],
        description=data['description'], # room type
        price=data['price'],
        capacity=data['capacity']
    )
    db.session.add(new_room)
    db.session.commit()
    return jsonify({'message': 'Room created successfully'}), 201


# get all rooms
@app.route('/rooms', methods=['GET'])
@jwt_required()
def get_rooms():
    rooms = Room.query.all()
    return jsonify([{
        'id': room.id,
        'room_number': room.room_number,
        'description': room.description,
        'price': room.price,
        'capacity': room.capacity,
        'status': room.status
    } for room in rooms]), 200

@app.route('/rooms/<int:id>', methods=['GET'])
def get_room(id):
    room = Room.query.get_or_404(id) # 404 if not found
    return jsonify({
        'id': room.id,
        'room_number': room.room_number,
        'description': room.description,
        'price': room.price,
        'capacity': room.capacity,
        'status': room.status
    }), 200

@app.route('/rooms/<int:id>', methods=['PUT'])
@jwt_required()
def update_room(id):
    room = Room.query.get_or_404(id)
    data = request.json
    room.description = data.get('description', room.description)
    room.price = data.get('price', room.price)
    room.capacity = data.get('capacity', room.capacity)
    room.status = data.get('status', room.status)
    db.session.commit()
    return jsonify({'message': 'Room updated successfully'}), 200

# delete room by id
@app.route('/rooms/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_room(id):
    room = Room.query.get_or_404(id)
    db.session.delete(room)
    db.session.commit()
    return jsonify({'message': 'Room deleted successfully'}), 200


# Bookings
# create booking for a room
@app.route('/bookings', methods=['POST'])
@jwt_required()
def create_booking():
    user_id = get_jwt_identity()
    data = request.json
    room = Room.query.get_or_404(data['room_id'])

    if room.status != 'available':
        return jsonify({'message': 'Room is not available'}), 400
    
    check_in = datetime.strptime(data['check_in'], '%Y-%m-%d')
    check_out = datetime.strptime(data['check_out'], '%Y-%m-%d')

    if check_out <= check_in:
        return jsonify({'message': 'Check out date must be greater than check in date'}), 400

    total_price = room.price * (check_out - check_in).days
    new_booking = Booking(
        user_id=user_id,
        room_id=data['room_id'],
        check_in=check_in,
        check_out=check_out,
        total_price=total_price
    )
    room.status = 'unavailable'
    db.session.add(new_booking)
    db.session.commit()
    return jsonify({'message': 'Booking created successfully', 'booking_id': new_booking.id}), 201

# get booking for a room by id
@app.route('/bookings/<int:id>', methods=['GET'])
@jwt_required()
def get_booking(id):
    booking = Booking.query.get_or_404(id)
    return jsonify({
        'id': booking.id,
        'user_id': booking.user_id,
        'room_id': booking.room_id,
        'check_in': booking.check_in.strftime('%Y-%m-%d'),
        'check_out': booking.check_out.strftime('%Y-%m-%d'),
        'total_price': booking.total_price,
        'status': booking.status
    }), 200

# update
@app.route('/bookings/<int:id>', methods=['PUT'])
@jwt_required()
def update_booking(id):
    booking = Booking.query.get_or_404(id)
    data = request.json
    
    if 'check_in' in data:
        booking.check_in = datetime.strptime(data['check_in'], '%Y-%m-%d')
    if 'check_out' in data:
        booking.check_out = datetime.strptime(data['check_out'], '%Y-%m-%d')
    if 'status' in data:
        booking.status = data['status']

    db.session.commit()
    return jsonify({'message': 'Booking updated successfully'}), 200

# cancel booking
@app.route('/bookings/<int:id>', methods=['DELETE'])
@jwt_required()
def cancel_booking(id):
    booking = Booking.query.get_or_404(id)
    room = Room.query.get_or_404(booking.room_id)
    room.status = 'available'
    db.session.delete(booking)
    db.session.commit()
    return jsonify({'message': 'Booking canceled successfully'}), 200


# REVIEWS
@app.route('/reviews', methods=['POST'])
@jwt_required()
def create_review():
    user_id = get_jwt_identity()
    data = request.json
    new_review = Review(
        user_id=user_id,
        room_id=data['room_id'],
        comment=data.get['comment', "No comment"],
        rating=data['rating']
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'message': 'Review created successfully'}), 201


@app.route('/reviews', methods=['GET'])
def get_reviews(room_id):
    reviews = Review.query.filter_by(room_id=room_id).all()
    return jsonify([{
        'id': review.id,
        'user_id': review.user_id,
        'room_id': review.room_id,
        'comment': review.comment,
        'rating': review.rating,
        'created_at': review.created_at.strftime('%Y-%m-%d %H:%M:%S')
    } for review in reviews]), 200

if __name__ == "__main__":
    app.run(debug=True)