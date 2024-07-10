import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Hotels({ hotels }) { // Accept hotels as props
  console.log(hotels);
  hotels = [
    {
      id: 1,
      name: 'Hotel 1',
      description: 'This is a description of Hotel 1.',
      image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Hotel 2',
      description: 'This is a description of Hotel 2.',
      image: 'https://images.unsplash.com/photo-1641820395583-c8e22c4ca9e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Hotel 3',
      description: 'This is a description of Hotel 3.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <div>
      <Header />
 

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-8">Hotels</h1>

          {/* Hotel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="rounded overflow-hidden shadow-lg bg-white"
              >
                {/* Image */}
                <img
                  className="w-full h-64 object-cover"
                  src={hotel.image}
                  alt={hotel.name}
                />

                {/* Card Content */}
                <div className="px-6 py-4">
                  {/* Title */}
                  <div className="font-bold text-xl mb-2">{hotel.name}</div>

                  {/* Description */}
                  <p className="text-gray-700 text-base">{hotel.description}</p>

                  {/* Button */}
                  <Link
                    to={`/hotel/${hotel.id}/rooms`}
                    className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                  >
                    View Rooms
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
