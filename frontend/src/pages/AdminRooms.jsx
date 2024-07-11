import React, { useEffect, useState } from 'react'
import AdminHeader from "./AdminHeader";
import { toast } from "react-toastify";

export default function AdminRooms({onAddRoom}) {

    const [rooms, setRooms] = useState([]);

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

  return (
    <div>
      <AdminHeader />
      <div className="bg-gray-700 rounded-lg shadow-md p-6 mt-8 mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Rooms</h3>
        <ul className="space-y-4">
          {rooms.map((room) => (
            <li key={room.id} className="border-b border-gray-600 py-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-200">
                    Room {room.room_number}
                  </p>
                  <p className="text-sm text-gray-400">{room.description}</p>
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
                    Ksh. {room.price}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
