import string
from flask import app
from server.app import db, app
from server.models.user import User
from server.models.booking import Booking
from server.models.room import Room
from server.models.review import Review
from datetime import datetime, timedelta
import random

def generate_phone_number():
  country_code = '+254'

  # Generate random digits for the remaining phone number parts
  mobile_network_code = random.randint(70, 79)
  subscriber_number = ''.join(str(random.randint(0, 9)) for _ in range(7))

  return f'{country_code}{mobile_network_code}{subscriber_number}'


def seed_data():
    # app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()

        # seeding users
        admin = User(username='admin', email='admin@gmail.com',password='admin', phone_number='0734567890', is_admin=True)
        admin.set_password('admin')
        db.session.add(admin)
        db.session.commit()

        used_phone_numbers = set()
        users = []
        for i in range(10):

            phone_number = generate_phone_number()
            while phone_number in used_phone_numbers:
                phone_number = generate_phone_number()
            used_phone_numbers.add(phone_number)

            print(f"Generated phone number for user {i}: {phone_number}")

            user = User(username=f'user{i}', email=f'user{i}@gmail.com', password=f'password{i}',  phone_number=phone_number, is_admin=False)
            user.set_password(f'password{i}')
            users.append(user)
            db.session.add(user)
            db.session.commit()
        print("Seeded users successfully")
        # print([user.id for user in users])
            

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
            db.session.commit()
            
        print("Seeded rooms successfully")
        # print(rooms)


        # Create bookings
        for i in range(30):
            user = random.choice(users)
            room = random.choice(rooms)
            check_in = datetime.now() + timedelta(days=random.randint(1, 30))
            check_out = check_in + timedelta(days=random.randint(1, 7))

            booking = Booking(
                user_id=user.id,
                room_id=room.id,
                check_in=check_in,
                check_out=check_out,
                total_price=room.price * (check_out - check_in).days,
                status=random.choice(['pending', 'confirmed', 'cancelled'])
            )

            db.session.add(booking)
            db.session.commit()

        print("Seeded bookings successfully")
            

        # seed reviews
        for i in range(100):
            user = random.choice(users)
            room = random.choice(rooms)
            rating = random.randint(1, 5)
            review = Review(
                user_id=user.id,
                room_id=room.id,
                rating=rating,
                comment=f'This is a sample review for room {room.room_number}, with rating {rating}',
                created_at=datetime.now() - timedelta(days=random.randint(1, 60))
            )

            db.session.add(review)
            db.session.commit()
            
        print("Seeded reviews successfully")

        print('Data seeded successfully!')

    
    # prevent accidental running in production:
    # if app.config['ENV'] == 'production':
    #     raise Exception("Cannot run in production!")


if __name__ == '__main__':
    seed_data()
 