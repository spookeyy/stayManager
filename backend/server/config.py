import os

SECRET_KEY = os.environ.get('SECRET_KEY') or 'my-secret-key-spookeyy'
SQLALCHEMY_DATABASE_URI = 'sqlite:///hotel.db'
SQLALCHEMY_TRACK_MODIFICATIONS = False
JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or 'my-jwt-secret-key-spookeyy'