import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AddRoom from "./AddRoom";
import AddHotel from "./AddHotel";
import AdminHeader from "./AdminHeader";
import { FaHotel, FaDoorOpen, FaCalendarCheck, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [showAddRoom, setShowAddRoom] = useState(false);
  const [showAddHotel, setShowAddHotel] = useState(false);

  useEffect(() => {
    fetchBookings();
    fetchRooms();
    fetchHotels();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
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
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
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

  const fetchHotels = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (response.ok) {
        console.log(response);
        const data = await response.json();
        setHotels(data);
      } else {
        throw new Error("Failed to fetch hotels");
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      toast.error("Failed to fetch hotels");
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/bookings/${bookingId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
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

  const handleAddRoom = async () => {
    await fetchRooms();
    setShowAddRoom(false);
  };

  const handleAddHotel = async () => {
    await fetchHotels();
    setShowAddHotel(false);
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-gray-700 rounded-lg p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-200">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const SummaryCard = ({ title, count, icon, onClick }) => (
    <div className="bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{count}</p>
      
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        View Details
      </button>
     
    </div>
  );

  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
          <div className="flex items-center">
            <button
              onClick={() => setShowAddHotel(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 transition duration-300 flex items-center"
            >
              <FaPlus className="mr-2" /> Add Hotel
            </button>
            <button
              onClick={() => setShowAddRoom(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center"
            >
              <FaPlus className="mr-2" /> Add Room
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Link to="/admin/bookings" >
          <SummaryCard
            title="Total Bookings"
            count={bookings.length}
            icon={<FaCalendarCheck className="text-blue-400" />}
            onClick={() => {}}
          />
          </Link>

          <Link to="/admin/rooms" >
          <SummaryCard
            title="Total Rooms"
            count={rooms.length}
            icon={<FaDoorOpen className="text-green-400" />}
            onClick={() => {
              /* Navigate to rooms page */
            }}
          />
          </Link>

          <Link to="/admin/hotels" >
          <SummaryCard
            title="Total Hotels"
            count={hotels.length}
            icon={<FaHotel className="text-yellow-400" />}
            onClick={() => {
              /* Navigate to hotels page */
            }}
          />
          </Link>
        </div>

        <Modal
          isOpen={showAddRoom}
          onClose={() => setShowAddRoom(false)}
          title="Add New Room"
        >
          <AddRoom onAddRoom={handleAddRoom} onClose={() => setShowAddRoom(false)} />
        </Modal>

        <Modal
          isOpen={showAddHotel}
          onClose={() => setShowAddHotel(false)}
          title="Add New Hotel"
        >
          <AddHotel onAddHotel={handleAddHotel} />
        </Modal>
      </div>
    </div>
  );
}

export default AdminDashboard;