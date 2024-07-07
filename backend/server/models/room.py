from ..app import db

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_number = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(80), nullable=False, default=False)
    # image = db.Column(db.String(120), nullable=True)
    
    # relationships
    bookings = db.relationship('Booking', backref='room', lazy='dynamic')
    reviews = db.relationship('Review', backref='room', lazy='dynamic')

    def __repr__(self):
        return '<Room %r>' % self.room_number