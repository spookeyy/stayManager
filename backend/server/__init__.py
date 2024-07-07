from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()
jwt = JWTManager()

def create_app(config_name):
    app = Flask(__name__)
    
    # Load the appropriate configuration
    if config_name == 'production':
        app.config.from_object('config.ProductionConfig')
    elif config_name == 'development':
        app.config.from_object('config.DevelopmentConfig')
    elif config_name == 'testing':
        app.config.from_object('config.TestingConfig')
    
    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    CORS(app)
    
    # Import and register blueprints
    from .routes import auth_bp, user_bp, room_bp, booking_bp, review_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(user_bp, url_prefix='/api/users')
    app.register_blueprint(room_bp, url_prefix='/api/rooms')
    app.register_blueprint(booking_bp, url_prefix='/api/bookings')
    app.register_blueprint(review_bp, url_prefix='/api/reviews')
    
    return app