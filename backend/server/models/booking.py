from app import db
from datetime import datetime

class Booking(db.Model):
    id = db.column(db.Integer, primary_key=True)
    user_id = db.column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    room_id = db.column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    check_in = db.column(db.DateTime, nullable=False)
    check_out = db.column(db.DateTime, nullable=False)
    total_price = db.column(db.Float, nullable=False)
    status = db.column(db.String(80), nullable=False, default='pending')
    created_at = db.column(db.DateTime, default=datetime.now)

    def __repr__(self):
        return '<Booking %r>' % self.id