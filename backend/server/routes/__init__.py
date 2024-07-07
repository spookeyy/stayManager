from .auth import bp as auth_bp
from .user import bp as user_bp
from .room import bp as room_bp
from .booking import bp as booking_bp
from .review import bp as review_bp

bp = [auth_bp, user_bp, room_bp, booking_bp, review_bp]

# all the blueprints are imported here, so that they can be registered in the app