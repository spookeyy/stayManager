import React, { useState } from 'react';

function RoomDetail() {
  // Dummy room data for demonstration
  const roomDetails = [
    { title: 'Room Type', value: 'Standard Double' },
    { title: 'Price', value: '$100 per night' },
    { title: 'Capacity', value: '2 guests' },
    { title: 'Facilities', value: 'Free Wi-Fi, TV, Air Conditioning' },
    // Add more details as needed
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
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Room Detail</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mapping over roomDetails array to create cards */}
        {roomDetails.map((detail, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">{detail.title}</h2>
            <p className="mt-2">{detail.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        {/* Show availability status */}
        <p className="text-lg mb-4">
          Availability: {isAvailable ? <span className="text-green-600">Available</span> : <span className="text-red-600">Fully Booked</span>}
        </p>
        <button
          onClick={handleBookRoom}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          disabled={!isAvailable} // Disable button if not available
        >
          Book Room
        </button>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Confirm Booking</h2>
            <p className="mb-4">
              Are you sure you want to book the {roomDetails[0].value} room for {roomDetails[1].value}?
            </p>
            {/* Add payment integration form here */}
            <div className="flex justify-end">
              <button
                onClick={() => setBookingModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => alert('Booking confirmed!')} // Placeholder for booking confirmation logic
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomDetail;
