import React from "react";

export default function AdminHotels({ hotels, onAddRoom, onAddHotel }) {
  return (
    <div className="mt-8 bg-gray-700 rounded-lg shadow-md p-6 mb-8 ">
      <h3 className="text-2xl font-semibold mb-4 text-gray-200">Hotels</h3>
      {hotels && hotels.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="bg-gray-600 rounded-lg shadow-md p-4">
              <div>
                <p className="text-lg font-semibold text-gray-200">
                  {hotel.name}
                </p>
                <p className="text-sm text-gray-400">{hotel.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No hotels available.</p>
      )}
    </div>
  );
}
