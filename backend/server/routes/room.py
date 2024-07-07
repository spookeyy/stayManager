from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.room import Room
from app import db

bp = Blueprint('room', __name__) #, url_prefix='/room')

# create room
@bp.route('/rooms', methods=['POST'])
@jwt_required()
def create_room():
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
@bp.route('/rooms', methods=['GET'])
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


@bp.route('/rooms/<int:id>', methods=['GET'])
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


@bp.route('/rooms/<int:id>', methods=['PUT'])
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
@bp.route('/rooms/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_room(id):
    room = Room.query.get_or_404(id)
    db.session.delete(room)
    db.session.commit()
    return jsonify({'message': 'Room deleted successfully'}), 200
