import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AddRoom from "./AddRoom";

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
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
      });
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        throw new Error("Failed to fetch bookings");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to fetch bookings");
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:5000/rooms", {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
      });
      if (response.ok) {
        const data = await response.json();
        setRooms(data);
      } else {
        throw new Error("Failed to fetch rooms");
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
      toast.error("Failed to fetch rooms");
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/bookings/${bookingId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
        }
      );
      if (response.ok) {
        toast.success("Booking cancelled successfully");
        fetchBookings();
        fetchRooms();
      } else {
        throw new Error("Failed to cancel booking");
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast.error("Failed to cancel booking");
    }
  };

  const handleAddRoom = () => {
    fetchRooms(); // Refresh rooms after adding a new room
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h2>

      {/* Render AddRoom component */}
      <AddRoom onAddRoom={handleAddRoom} />

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Bookings</h3>
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <span className="font-medium">Room: {booking.room_id}</span>
                <span className="mx-2">|</span>
                <span>Check-in: {booking.check_in}</span>
                <span className="mx-2">|</span>
                <span>Check-out: {booking.check_out}</span>
                <span className="mx-2">|</span>
                <span
                  className={`font-semibold ${
                    booking.status === "Confirmed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  Status: {booking.status}
                </span>
              </div>
              <button
                onClick={() => handleCancelBooking(booking.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Rooms</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <li key={room.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="font-bold text-lg mb-2">
                Room {room.room_number}
              </div>
  
              <p className="text-gray-600 mb-2">{room.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-green-600">
                  ${room.price}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    room.status === "Available"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {room.status === "Available" ? "Available" : "Booked"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
