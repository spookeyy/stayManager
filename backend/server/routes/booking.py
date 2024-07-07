from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.booking import Booking
from models.room import Room
from datetime import datetime
from app import db

bp = Blueprint('booking', __name__) #, url_prefix='/booking')

# create booking for a room
@bp.route('/bookings', methods=['POST'])
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
@bp.route('/bookings/<int:id>', methods=['GET'])
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
@bp.route('/bookings/<int:id>', methods=['PUT'])
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
@bp.route('/bookings/<int:id>', methods=['DELETE'])
@jwt_required()
def cancel_booking(id):
    booking = Booking.query.get_or_404(id)
    room = Room.query.get_or_404(booking.room_id)
    room.status = 'available'
    db.session.delete(booking)
    db.session.commit()
    return jsonify({'message': 'Booking canceled successfully'}), 200