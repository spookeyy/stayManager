from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models.user import User
from app import db

bp = Blueprint('auth', __name__) #, url_prefix='/auth')

@bp.route('/register', methods=['POST'])
def register():
    data = request.json

    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'User already exists'}), 400  # bad request

    user = User(
        username=data['username'],
        email=data['email']
        # phone_number=data['phone_number']
    )

    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201  # created


# Login route
@bp.route('/login', methods=['POST'])
def login():

    data = request.json
    user = User.query.filter_by(email=data['email']).first()

    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200

    return jsonify({'message': 'Invalid email or password'}), 401


# logout route
@bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    # blacklist the token
    BLACKLIST = set()
    jti = get_jwt_identity()
    BLACKLIST.add(jti)
    return jsonify({'message': 'Logout successful'}), 200
