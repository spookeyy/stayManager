import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function RoomDetail() {
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const { id } = useParams(); // Get the room id from the URL

  useEffect(() => {
    fetchRoomDetail();
  }, [id]);

  const fetchRoomDetail = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/rooms/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch room details");
      }

      const data = await response.json();
      setRoom(data);
    } catch (err) {
      setError(
        err.message ||
          "An error occurred while fetching room details. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookRoom = () => {
    setBookingModalOpen(true);
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-8">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="text-center mt-8">
        <p>No room data available.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-12 ml-14 mr-14">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Room Detail - Room {room.room_number}
          </h1>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Room Image */}
              <div className="md:w-1/2">
                <img
                  src={room.image}
                  alt={`Room ${room.room_number}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right side - Room Details */}
              <div className="md:w-1/2 p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">
                      Room Number
                    </h2>
                    <p className="text-gray-600">{room.room_number}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">
                      Description
                    </h2>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">
                      Price
                    </h2>
                    <p className="text-gray-600">Ksh. {room.price} per night</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">
                      Capacity
                    </h2>
                    <p className="text-gray-600">{room.capacity} guests</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">
                      Status
                    </h2>
                    <p className={`text-lg font-bold ${room.status === "available" ? "text-green-600" : "text-red-600"}`}>
                      {room.status}
                    </p>
                  </div>
                </div>

                {/* Availability and Booking */}
                <div className="mt-6">
                  {room.status === "available" && (
                    <button
                      onClick={handleBookRoom}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Book Room
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {isBookingModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">
                Confirm Booking
              </h3>
              <p className="text-gray-800 mb-6 text-center">
                Are you sure you want to book Room {room.room_number}?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Booking confirmed!")} // Placeholder for booking confirmation logic
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default RoomDetail;
