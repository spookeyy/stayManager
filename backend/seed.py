from models import Hotel, db, User, Booking, Room, Review
from app import app, bcrypt
import random
from datetime import datetime, timedelta
from faker import Faker

print("Start seeding ....")

fake = Faker()

def generate_phone_number():
    country_code = '+254'
    mobile_network_code = random.randint(70, 79)
    subscriber_number = ''.join(str(random.randint(0, 9)) for _ in range(7))
    return f'{country_code}{mobile_network_code}{subscriber_number}'

def seed_data():
    with app.app_context():
        db.drop_all()
        db.create_all()

        # seeding users
        password = bcrypt.generate_password_hash('admin').decode('utf-8')
        admin = User(username='admin', email='admin@gmail.com', password=password, phone_number=generate_phone_number(), profile_photo='admin.png', is_admin=True)
        db.session.add(admin)
        db.session.commit()

        users = []
        for _ in range(10):
            password = bcrypt.generate_password_hash(fake.password()).decode('utf-8')
            user = User(
                username=fake.user_name(),
                email=fake.email(),
                password=password,
                phone_number=generate_phone_number(),
                is_admin=False
            )
            users.append(user)
            db.session.add(user)
        db.session.commit()
        print("Seeded users successfully")

        # Create hotels
        hotels = []
        for _ in range(10):
            hotel = Hotel(
                name=fake.company(),
                description=fake.paragraph()
            )
            hotels.append(hotel)
            db.session.add(hotel)
        db.session.commit()
        print("Seeded hotels successfully")
        
        # Create rooms and associate with hotels
        room_types = ['Single', 'Double', 'Suite', 'Family Room', 'Penthouse']
        rooms = []
        for i in range(30):
            hotel = random.choice(hotels)
            room = Room(
                room_number=f'{i+1:03d}',
                description=random.choice(room_types),
                price=random.randint(50, 300),
                capacity=random.randint(1, 4),
                status=random.choice(['available', 'unavailable']),
                image=fake.image_url(),
                hotel_id=hotel.id
            )
            rooms.append(room)
            db.session.add(room)
        db.session.commit()
            
        print("Seeded rooms and associated with hotels successfully")

        # Update room_count for each hotel
        for hotel in hotels:
            hotel.room_count = Room.query.filter_by(hotel_id=hotel.id).count()
        db.session.commit()
        print("Updated hotel room counts successfully")

        # Create bookings
        for _ in range(30):
            user = random.choice(users)
            room = random.choice(rooms)
            check_in = fake.date_between(start_date='today', end_date='+30d')
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
        for _ in range(100):
            user = random.choice(users)
            room = random.choice(rooms)
            rating = random.randint(1, 5)
            review = Review(
                user_id=user.id,
                room_id=room.id,
                rating=rating,
                comment=fake.paragraph(),
                created_at=fake.date_time_between(start_date='-60d', end_date='now')
            )

            db.session.add(review)
        db.session.commit()
            
        print("Seeded reviews successfully")

        print('Data seeded successfully!')

if __name__ == '__main__':
    seed_data()