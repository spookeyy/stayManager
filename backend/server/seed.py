from flask import app
from app import db, create_app
from models.user import User
from models.booking import Booking
from models.room import Room
from models.review import Review
from datetime import datetime
import random

def seed_data():
    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()

        # seeding users
        admin = User(username='admin', email='admin@gmail.com', phone_number='0734567890', is_admin=True)
        admin.set_password('admin')
        db.session.add(admin)

        users = []
        for i in range(10):
            user = User(username=f'user{i}', email=f'user{i}@gmail.com', phone_number=f'073456789{i}')
            user.set_password(f'password{i}')
            users.append(user)
            db.session.add(user)
            

        # Create rooms
        descriptions = ['Single', 'Double', 'Suite', 'Family Room', 'Penthouse']
        rooms = []
        for i in range(20):
            room = Room(
                room_number=f'{i+1:03d}',
                description=random.choice(descriptions),
                price=random.randint(50, 300),
                capacity=random.randint(1, 4),
                status=random.choice(['available', 'unavailable'])
            )
            rooms.append(room)
            db.session.add(room)


        # Create bookings
        
        for i in range(30):
            user = random.choice(users)
            room = random.choice(rooms)
            check_in = datetime.now() + datetime.timedelta(days=random.randint(1, 30))
            check_out = check_in + datetime.timedelta(days=random.randint(1, 7))

            booking = Booking(
                user_id=user.id,
                room_id=room.id,
                check_in=check_in,
                check_out=check_out,
                total_price=room.price * (check_out - check_in).days,
                status=random.choice(['pending', 'confirmed', 'cancelled'])
            )
            

        # seed reviews
        for i in range(100):
            user = random.choice(users)
            room = random.choice(rooms)
            # rating = random.randint(1, 5)
            ## comment = f'Comment {i+1}'
            review = Review(
                user_id=user.id,
                room_id=room.id,
                rating=random.randint(1, 5),
                comment=f'This is a sample review for room {room.room_number}, with rating {rating} and comment "{comment}"',
                created_at=datetime.now() - datetime.timedelta(days=random.randint(1, 60))
            )

            db.session.add(review)
            

        db.session.commit()

        print('Data seeded successfully!')
    
    # prevent accidental running in production:
    if app.config['ENV'] == 'production':
        raise Exception("Cannot run in production!")


if __name__ == '__main__':
    seed_data()
 