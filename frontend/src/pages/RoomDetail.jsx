import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function RoomDetail() {
  // Dummy room data for demonstration
  const roomDetails = [
    { title: 'Room Number', value: '101' },
    { title: 'Description', value: 'Standard Double' },
    { title: 'Price', value: 'Ksh. 100 per night' },
    { title: 'Capacity', value: '2 guests' },
    { title: 'Facilities', value: 'Free Wi-Fi, TV, Air Conditioning' },
    { title: 'status', value: 'Available' },
    {
      title: 'Image',
      value: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww',
    },
  ];

  // Dummy availability state (true for available, false for booked)
  const [isAvailable] = useState(true); // Change this state as per your logic

  // State to manage booking modal visibility
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);

  // Function to handle booking
  const handleBookRoom = () => {
    // Implement booking logic here, e.g., show booking modal
    setBookingModalOpen(true);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-8 text-center">
            Room Detail
          </h1>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Room Image */}
              <div className="md:w-1/2">
                <img
                  src={roomDetails[6].value}
                  alt="Room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right side - Room Details */}
              <div className="md:w-1/2 p-6">
                <div className="grid grid-cols-1 gap-4">
                  {roomDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                    >
                      <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        {detail.title}
                      </h2>
                      <p className="text-gray-600">{detail.value}</p>
                    </div>
                  ))}
                </div>

                {/* Availability and Booking */}
                <div className="mt-6">
                  <div className="text-lg font-semibold mb-4">
                    {roomDetails[5].title}
                    {isAvailable ? (
                      <span className="text-green-600 ml-2">
                        {roomDetails[5].value}
                      </span>
                    ) : (
                      <span className="text-red-600 ml-2">Fully Booked</span>
                    )}
                  </div>
                  {isAvailable && (
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
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Confirm Booking
              </h3>
              <p className="text-gray-800 mb-6 text-center">
                Are you sure you want to book the {roomDetails[0].value} room
                for {roomDetails[1].value}?
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
