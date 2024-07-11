import React from 'react'

export default function AdminRooms({onAddRoom, rooms}) {
  return (
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
  );
}
