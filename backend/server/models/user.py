from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.column(db.Integer, primary_key=True)
    username = db.column(db.String(80), unique=True, nullable=False)
    email = db.column(db.string(120), unique=True, nullable=False)
    password = db.column(db.String(120), nullable=False)
    phone_number = db.column(db.String(120), unique=True, nullable=False)
    profile_photo = db.column(db.String(120), nullable=True)
    is_admin = db.column(db.Boolean, nullable=False, default=False)

    bookings = db.relationship('Booking', backref='user', lazy='dynamic')
    reviews = db.relationship('Review', backref='user', lazy='dynamic')

    def __repr__(self):
        return '<User %r>' % self.username

    # password
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)