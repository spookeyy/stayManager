from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_migrate import Migrate
# from flask_bcrypt import Bcrypt # Flask-Bcrypt for password hashing
# from flask_mail import Mail # Flask-Mail for sending emails


app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
cors = CORS(app)


# bcrypt = Bcrypt(app)
# mail = Mail(app)

from routes import auth, user, room, booking, review


app.register_blueprint(auth.bp) 
app.register_blueprint(user.bp)
app.register_blueprint(room.bp)
app.register_blueprint(booking.bp)
app.register_blueprint(review.bp)

if __name__ == '__main__':
    app.run(debug=True)