
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
db = SQLAlchemy()
from sqlalchemy.orm import validates

from datetime import datetime

# Models
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    phone_number = db.Column(db.String(120), unique=True, nullable=False)
    profile_photo = db.Column(db.String(120), nullable=True)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)

    bookings = db.relationship('Booking', backref='user', lazy='dynamic')
    reviews = db.relationship('Review', backref='user', lazy='dynamic')

class Room(db.Model):
    __tablename__ = 'events'
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

class Booking(db.Model):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    check_in = db.Column(db.DateTime, nullable=False)
    check_out = db.Column(db.DateTime, nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(80), nullable=False, default='pending')
    created_at = db.Column(db.DateTime, default=datetime.now)


class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)














# class Student(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     age = db.Column(db.Integer, nullable=True)
#     email= db.Column(db.String(50), nullable=False)

#     courses = db.relationship('Course', backref='student', lazy=True)
#     # serialize_rules = ('-courses.student',)
#     def to_dict(self):
#         return {
#         "id" : self.id,
#         "name" : self.name,
#         "age" : self.age,
#         "email" : self.email,
#         "courses" : [course.to_dict() for course in self.courses]
#         }
    
#     @validates('email')
#     def validate_email(self,key, email):
#         if "@" not in email:
#             raise ValueError("Invalid email")
#         return email
 


# class Course(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     code = db.Column(db.String(50), nullable=False)
#     description = db.Column(db.String(50), nullable=False)

#     student_id = db.Column(db.Integer, db.ForeignKey('student.id'), nullable=False)

#     def to_dict(self):

#         return {
#         "id" : self.id   ,
#         "name" : self.name,
#         "code" : self.code,
#         "description" : self.description,
#         "student_id" : self.student_id
        
#         }



# class Student(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     age = db.Column(db.Integer, nullable=True)
#     email= db.Column(db.String(50), nullable=False)

#     courses = db.relationship('Course', backref='student', lazy=True)
#     # serialize_rules = ('-courses.student',)
#     def to_dict(self):
#         return {
#         "id" : self.id,
#         "name" : self.name,
#         "age" : self.age,
#         "email" : self.email,
#         "courses" : [course.to_dict() for course in self.courses]
#         }
    
#     @validates('email')
#     def validate_email(self,key, email):
#         if "@" not in email:
#             raise ValueError("Invalid email")
#         return email
 


# class Course(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     code = db.Column(db.String(50), nullable=False)
#     description = db.Column(db.String(50), nullable=False)

#     student_id = db.Column(db.Integer, db.ForeignKey('student.id'), nullable=False)

#     def to_dict(self):

#         return {
#         "id" : self.id   ,
#         "name" : self.name,
#         "code" : self.code,
#         "description" : self.description,
#         "student_id" : self.student_id
        
#         }



