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

def generate_image_url(image_type):
    # Use more relevant image URLs for hotels and rooms
    hotel_images = [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791"
    ]
    
    room_images = [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        "https://images.unsplash.com/photo-1631049552240-59c37f38802b"
    ]
    
    if image_type == 'hotel':
        return random.choice(hotel_images)
    else:  # room
        return random.choice(room_images)

def seed_data():
    with app.app_context():
        db.drop_all()
        db.create_all()

        # Seeding users
        password = bcrypt.generate_password_hash('admin').decode('utf-8')
        admin = User(username='admin', email='admin@gmail.com', password=password, phone_number=generate_phone_number(), profile_photo='admin.png', is_admin=True)
        db.session.add(admin)
        db.session.commit()

        users = []
        for _ in range(50):
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
                description=fake.paragraph(),
                image=generate_image_url('hotel'),
                room_count=0  # This will be updated later
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
                image=generate_image_url('room'),
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
                status=random.choice(['pending', 'confirmed', 'cancelled']),
                created_at=fake.date_time_between(start_date='-60d', end_date='now')
            )

            db.session.add(booking)
        db.session.commit()

        print("Seeded bookings successfully")

        # Seed reviews
        for _ in range(100):
            user = random.choice(users)
            rating = random.randint(1, 5)
            review = Review(
                user_id=user.id,
                rating=rating,
                comment=fake.paragraph(),
                created_at=fake.date_time_between(start_date='-60d', end_date='now')
            )

            db.session.add(review)
        db.session.commit()
            
        print("Seeded reviews successfully")

        print('Data seeded successfully!')

# Seed data if there are no users
def should_seed():
    with app.app_context(): 
        return User.query.count() == 0 

if __name__ == '__main__':
    try:
        if should_seed():
            seed_data()
        else:
            print("Database already contains data. Skipping seed.")
    except Exception as e:
        print(f"An error occurred while seeding data: {str(e)}")