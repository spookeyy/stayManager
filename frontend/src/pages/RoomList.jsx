import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:5000/rooms", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`, 
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch rooms");
      }

      const data = await response.json();
      setRooms(data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching rooms");
    }
  };

  if (error) {
    return (
      <>
        <Header />
        <div className="container mx-auto py-8">
          <p className="text-red-500 text-center">{error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
            Explore Our Rooms
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="max-w-xs rounded overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={room.image}
                  className="w-full h-48 object-cover rounded-t"
                  alt={room.room_number}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Room {room.room_number}
                  </div>
                  <p className="text-gray-700 text-base">{room.description}</p>
                  <p className="text-gray-600 mt-2">Price: ${room.price}</p>
                  <p className="text-gray-600">Capacity: {room.capacity}</p>
                  <p className="text-gray-600">Status: {room.status}</p>
                </div>
                <div className="px-6 py-4">
                  <Link
                    to={`/rooms/${room.id}`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    View Room Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomList;
