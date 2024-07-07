import os
import jwt
from datetime import datetime, timedelta
from flask_mail import Message
from flask import current_app
from app import mail
from werkzeug.utils import secure_filename
from models import Booking, Room

def send_email(to, subject, template):
    msg = Message(
        subject,
        recipients=[to],
        html=template,
        sender=current_app.config['MAIL_DEFAULT_SENDER']
    )
    mail.send(msg)

def generate_confirmation_token(user_id):
    """Generate a confirmation token for email verification"""
    payload = {
        'user_id': user_id,
        'exp': datetime.now() + timedelta(days=1)  # Token expires in 1 day
    }
    token = jwt.encode(payload, current_app.config['SECRET_KEY'], algorithm='HS256')
    return token

def confirm_token(token):
    """Verify the confirmation token"""
    try:
        payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload['user_id']
    except jwt.ExpiredSignatureError:
        return None  # Token has expired
    except jwt.InvalidTokenError:
        return None  # Invalid token

def allowed_file(filename):
    """Check if the file extension is allowed"""
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def save_image(file):
    """Save an uploaded image and return the filename"""
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        return filename
    return None

def calculate_total_price(room_price, check_in, check_out):
    """Calculate the total price for a booking"""
    duration = (check_out - check_in).days
    return room_price * duration

def format_date(date):
    """Format a date object to string"""
    return date.strftime('%Y-%m-%d')

def parse_date(date_string):
    """Parse a date string to date object"""
    return datetime.strptime(date_string, '%Y-%m-%d').date()

def is_room_available(room, check_in, check_out):
    """Check if a room is available for the given date range"""
    overlapping_bookings = room.bookings.filter(
        (Booking.check_in < check_out) & (Booking.check_out > check_in)
    ).count()
    return overlapping_bookings == 0

def generate_room_number():
    """Generate a unique room number"""
    # This is a simple implementation. You might want to make it more sophisticated
    # based on your specific requirements.
    last_room = Room.query.order_by(Room.room_number.desc()).first()
    if last_room:
        return f"{int(last_room.room_number) + 1:03d}"
    return "001"

def calculate_average_rating(reviews):
    """Calculate the average rating from a list of reviews"""
    if not reviews:
        return 0
    total_rating = sum(review.rating for review in reviews)
    return total_rating / len(reviews)