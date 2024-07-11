import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AddRoom from './AddRoom';
import AddHotel from './AddHotel';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchRooms();
    fetchHotels();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/bookings', {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
      });
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        throw new Error('Failed to fetch bookings');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error('Failed to fetch bookings');
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await fetch('http://localhost:5000/rooms', {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
      });
      if (response.ok) {
        const data = await response.json();
        setRooms(data);
      } else {
        throw new Error('Failed to fetch rooms');
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      toast.error('Failed to fetch rooms');
    }
  };

  const fetchHotels = async () => {
    try {
      const response = await fetch('http://localhost:5000/hotels', {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
      });
      if (response.ok) {
        const data = await response.json();
        setHotels(data);
      } else {
        throw new Error('Failed to fetch hotels');
      }
    } catch (error) {
      console.error('Error fetching hotels:', error);
      toast.error('Failed to fetch hotels');
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/bookings/${bookingId}`,
        {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
        }
      );
      if (response.ok) {
        toast.success('Booking cancelled successfully');
        fetchBookings();
        fetchRooms();
      } else {
        throw new Error('Failed to cancel booking');
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      toast.error('Failed to cancel booking');
    }
  };

  const handleAddRoom = async () => {
    await fetchRooms(); // Refresh rooms after adding a new room
  };

  const handleAddHotel = async () => {
    await fetchHotels(); // Refresh hotels after adding a new hotel
  };

  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">
              Bookings
            </h3>
            <ul className="space-y-4">
              {bookings.map((booking) => (
                <li
                  key={booking.id}
                  className="flex items-center justify-between border-b border-gray-600 py-2"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-200">
                      Room: {booking.room_id}
                    </p>
                    <p className="text-sm text-gray-400">
                      Check-in: {booking.check_in}
                    </p>
                    <p className="text-sm text-gray-400">
                      Check-out: {booking.check_out}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`text-sm font-semibold uppercase px-3 py-1 rounded-full ${
                        booking.status === "confirmed"
                          ? "bg-green-500 text-white"
                          : booking.status === "pending"
                          ? "bg-yellow-500 text-gray-800"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {booking.status}
                    </span>
                    <button
                      onClick={() => handleCancelBooking(booking.id)}
                      className="ml-2 inline-block px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Rooms</h3>
            <ul className="space-y-4">
              {rooms.map((room) => (
                <li key={room.id} className="border-b border-gray-600 py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold text-gray-200">
                        Room {room.room_number}
                      </p>
                      <p className="text-sm text-gray-400">
                        {room.description}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-semibold ${
                          room.status === "available"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {room.status}
                      </span>
                      <p className="text-lg font-semibold text-green-600">
                        ${room.price}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-700 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-200">Hotels</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <li
                key={hotel.id}
                className="bg-gray-600 rounded-lg shadow-md p-4"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-200">
                    {hotel.name}
                  </p>
                  <p className="text-sm text-gray-400">{hotel.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <AddRoom onAddRoom={handleAddRoom} />
          </div>
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <AddHotel onAddHotel={handleAddHotel} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

