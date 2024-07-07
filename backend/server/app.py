from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_migrate import Migrate
from server.config import Config
# from flask_bcrypt import Bcrypt # Flask-Bcrypt for password hashing
# from flask_mail import Mail # Flask-Mail for sending emails
import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
cors = CORS(app)



# bcrypt = Bcrypt(app)
# mail = Mail(app)

from server.routes import auth, user, room, booking, review


app.register_blueprint(auth.bp) 
app.register_blueprint(user.bp)
app.register_blueprint(room.bp)
app.register_blueprint(booking.bp,name='booking_bp')
app.register_blueprint(review.bp)

if __name__ == '__main__':
    app.run(debug=True)