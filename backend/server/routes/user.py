from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from server.models.user import User
from server.app import db

bp = Blueprint('user', __name__)

@bp.route('/users/<int:id>', methods=['GET'])
@jwt_required()
def get_user(id):
    current_user_id = get_jwt_identity()
    if current_user_id != id:
        return jsonify({"message": "Unauthorized"}), 403

    user = User.query.get_or_404(id)
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'phone_number': user.phone_number,
        'profile_photo': user.profile_photo
    }), 200

@bp.route('/users/<int:id>', methods=['PUT'])
@jwt_required()
def update_user(id):
    current_user_id = get_jwt_identity()
    if current_user_id != id:
        return jsonify({"message": "Unauthorized"}), 403

    user = User.query.get_or_404(id)
    data = request.json

    if 'username' in data:
        if User.query.filter(User.username == data['username'], User.id != id).first():
            return jsonify({"message": "Username already taken"}), 400
        user.username = data['username']

    if 'email' in data:
        if User.query.filter(User.email == data['email'], User.id != id).first():
            return jsonify({"message": "Email already in use"}), 400
        user.email = data['email']

    if 'phone_number' in data:
        if User.query.filter(User.phone_number == data['phone_number'], User.id != id).first():
            return jsonify({"message": "Phone number already in use"}), 400
        user.phone_number = data['phone_number']

    if 'profile_photo' in data:
        user.profile_photo = data['profile_photo']

    db.session.commit()
    return jsonify({"message": "User updated successfully"}), 200

@bp.route('/users/<int:id>/change-password', methods=['PUT'])
@jwt_required()
def change_password(id):
    current_user_id = get_jwt_identity()
    if current_user_id != id:
        return jsonify({"message": "Unauthorized"}), 403

    user = User.query.get_or_404(id)
    data = request.json

    if not user.check_password(data['current_password']):
        return jsonify({"message": "Current password is incorrect"}), 400

    user.set_password(data['new_password'])
    db.session.commit()
    return jsonify({"message": "Password changed successfully"}), 200

@bp.route('/users/<int:id>/bookings', methods=['GET'])
@jwt_required()
def get_user_bookings(id):
    current_user_id = get_jwt_identity()
    if current_user_id != id:
        return jsonify({"message": "Unauthorized"}), 403

    user = User.query.get_or_404(id)
    bookings = user.bookings.all()
    return jsonify([{
        'id': booking.id,
        'room_id': booking.room_id,
        'check_in': booking.check_in.strftime('%Y-%m-%d'),
        'check_out': booking.check_out.strftime('%Y-%m-%d'),
        'total_price': booking.total_price,
        'status': booking.status
    } for booking in bookings]), 200

@bp.route('/users/<int:id>/reviews', methods=['GET'])
@jwt_required()
def get_user_reviews(id):
    current_user_id = get_jwt_identity()
    if current_user_id != id:
        return jsonify({"message": "Unauthorized"}), 403

    user = User.query.get_or_404(id)
    reviews = user.reviews.all()
    return jsonify([{
        'id': review.id,
        'room_id': review.room_id,
        'rating': review.rating,
        'comment': review.comment,
        'created_at': review.created_at.strftime('%Y-%m-%d %H:%M:%S')
    } for review in reviews]), 200