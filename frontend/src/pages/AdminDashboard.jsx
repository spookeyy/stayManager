import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchRooms();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/bookings", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:5000/rooms", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.ok) {
        const data = await response.json();
        setRooms(data);
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/bookings/${bookingId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.ok) {
        fetchBookings();
        fetchRooms();
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Bookings</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            Room: {booking.room_id}, Check-in: {booking.check_in}, Check-out:{" "}
            {booking.check_out}, Status: {booking.status}
            <button onClick={() => handleCancelBooking(booking.id)}>
              Cancel
            </button>
          </li>
        ))}
      </ul>
      <h3>Rooms</h3>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.room_number} - {room.description} - ${room.price} -{" "}
            {room.available ? "Available" : "Booked"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
