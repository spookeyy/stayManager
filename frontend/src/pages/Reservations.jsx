import React from 'react';

// Dummy data representing booked rooms
const reservationsData = [
  {
    id: 1,
    roomNumber: '101',
    checkInDate: '2024-07-10',
    checkOutDate: '2024-07-15',
    guests: 2,
    status: 'Confirmed'
  },
  {
    id: 2,
    roomNumber: '202',
    checkInDate: '2024-07-20',
    checkOutDate: '2024-07-25',
    guests: 3,
    status: 'Pending'
  }
];

const Reservations = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Your Reservations</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {reservationsData.map((reservation) => (
          <div key={reservation.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Room {reservation.roomNumber}</h2>
              <p><span className="font-bold">Check-in:</span> {reservation.checkInDate}</p>
              <p><span className="font-bold">Check-out:</span> {reservation.checkOutDate}</p>
              <p><span className="font-bold">Guests:</span> {reservation.guests}</p>
              <p><span className="font-bold">Status:</span> {reservation.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
