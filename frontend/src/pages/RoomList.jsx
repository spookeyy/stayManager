import React from 'react';
import { Link } from 'react-router-dom';

function RoomList() {
  // Dummy data for room cards
  const rooms = [
    {
      id: 1,
      title: 'Room 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://plus.unsplash.com/premium_photo-1679121559500-b03bf1343439?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
      detailsLink: '/room-detail'
    },
    {
      id: 2,
      title: 'Room 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
      detailsLink: '/room-detail'
    },
    {
      id: 3,
      title: 'Room 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHxlbnwwfHwwfHx8MA%3D%3D',
      detailsLink: '/room-detail'
    },
    {
      id: 4,
      title: 'Room 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
      detailsLink: '/room-detail'
    },
    {
      id: 5,
      title: 'Room 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
      detailsLink: '/room-detail'
    },
    {
      id: 6,
      title: 'Room 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
      detailsLink: '/room-detail'
    }
    // Add more rooms as needed
  ];

  return (
    <div className="bg-gray-100">
    <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '50vh' }}>
    </div>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Explore Our Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rooms.map(room => (
          <div key={room.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <img src={room.image} className="w-full h-48 object-cover rounded-t" alt={room.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{room.title}</div>
              <p className="text-gray-700 text-base">{room.description}</p>
            </div>
            <div className="px-6 py-4">
              <Link to={room.detailsLink} className="text-golden hover:text-orange-500 font-medium">
                View Room Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default RoomList;
