from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.review import Review
from app import db

bp = Blueprint('booking', __name__) #, url_prefix='/booking')


@bp.route('/reviews', methods=['POST'])
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


@bp.route('/reviews', methods=['GET'])
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