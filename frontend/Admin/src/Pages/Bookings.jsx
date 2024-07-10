import React, { useState, useEffect } from 'react';
import { getBookings, addBooking, updateBooking, deleteBooking } from '../utils/api';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    guest: '',
    room: '',
    checkIn: '',
    checkOut: '',
    status: 'Pending',
  });

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getBookings();
      setBookings(data);
    };
    fetchBookings();
  }, []);

  const handleAddBooking = async () => {
    await addBooking(newBooking);
    setBookings([...bookings, newBooking]);
    setNewBooking({
      guest: '',
      room: '',
      checkIn: '',
      checkOut: '',
      status: 'Pending',
    });
  };

  const handleUpdateBooking = async (booking) => {
    await updateBooking(booking.id, booking);
    setBookings(bookings.map((b) => (b.id === booking.id ? booking : b)));
  };

  const handleDeleteBooking = async (id) => {
    await deleteBooking(id);
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <div className="content">
      <h1>Bookings</h1>
      <div className="booking-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h2>Guest: {booking.guest}</h2>
            <p>Room: {booking.room}</p>
            <p>Check-in: {booking.checkIn}</p>
            <p>Check-out: {booking.checkOut}</p>
            <p>Status: {booking.status}</p>
            <button onClick={() => handleUpdateBooking(booking)}>Update</button>
            <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-booking">
        <h2>Add New Booking</h2>
        <input
          type="text"
          placeholder="Guest Name"
          value={newBooking.guest}
          onChange={(e) => setNewBooking({ ...newBooking, guest: e.target.value })}
        />
        <input
          type="text"
          placeholder="Room Number"
          value={newBooking.room}
          onChange={(e) => setNewBooking({ ...newBooking, room: e.target.value })}
        />
        <input
          type="date"
          placeholder="Check-in Date"
          value={newBooking.checkIn}
          onChange={(e) => setNewBooking({ ...newBooking, checkIn: e.target.value })}
        />
        <input
          type="date"
          placeholder="Check-out Date"
          value={newBooking.checkOut}
          onChange={(e) => setNewBooking({ ...newBooking, checkOut: e.target.value })}
        />
        <button onClick={handleAddBooking}>Add Booking</button>
      </div>
    </div>
  );
};

export default Bookings;