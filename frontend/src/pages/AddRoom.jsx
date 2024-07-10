import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddRoom = ({ onAddRoom }) => {
  const [formData, setFormData] = useState({
    room_number: '',
    description: '',
    price: '',
    status: 'Available',
  });

  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    try {
      const roomData = {
        ...formData,
        image_url: imageUrl // Include image_url in the POST body
      };

      const response = await fetch('http://localhost:5000/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(roomData),
      });

      if (response.ok) {
        onAddRoom(); // Callback to refresh rooms in AdminDashboard
        setFormData({
          room_number: '',
          description: '',
          price: '',
          status: 'Available',
        });
        setImageUrl(''); // Clear imageUrl state
        toast.success('Room added successfully');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error('Error adding room:', error);
      toast.error('Failed to add room');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form onSubmit={handleAddRoom} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="room_number" className="block text-gray-700 text-sm font-bold mb-2">
            Room Number
          </label>
          <input
            type="text"
            id="room_number"
            name="room_number"
            value={formData.room_number}
            onChange={handleInputChange}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Room Number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Room Description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Price"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
            className="form-select mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="image_url" className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={imageUrl}
            onChange={handleImageChange}
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Image URL"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
