import React from 'react';

function RoomDetail() {
  // Dummy room data for demonstration
  const roomDetails = [
    { title: 'Room Type', value: 'Standard Double' },
    { title: 'Price', value: '$100 per night' },
    { title: 'Capacity', value: '2 guests' },
    { title: 'Facilities', value: 'Free Wi-Fi, TV, Air Conditioning' },
    // Add more details as needed
  ];

  return (
    <div className="container mx-auto">
      <h1>Room Detail</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mapping over roomDetails array to create cards */}
        {roomDetails.map((detail, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">{detail.title}</h2>
            <p className="mt-2">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomDetail;
