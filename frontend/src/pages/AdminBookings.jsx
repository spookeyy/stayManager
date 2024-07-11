import React from 'react'

export default function AdminBookings({ bookings, onCancelBooking }) {
  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-6 mt-8 mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-gray-200">Bookings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-gray-600 rounded-lg p-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-lg font-semibold text-gray-200 mb-2">
                Room: {booking.room_id}
              </p>
              <p className="text-sm text-gray-400">
                Check-in: {booking.check_in}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                Check-out: {booking.check_out}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2">
              <span
                className={`text-sm font-semibold uppercase px-3 py-1 rounded-full mb-2 sm:mb-0 ${
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
                className="inline-block px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
