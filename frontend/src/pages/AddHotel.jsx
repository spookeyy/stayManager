import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { server_url } from "../../config";

const AddHotel = ({ onAddHotel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    room_counts: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddHotel = async (e) => {
    e.preventDefault();
    try {
      const hotelData = {
        ...formData,
      };

      const response = await fetch(`${server_url}/hotels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(hotelData),
      });

      if (response.ok) {
        onAddHotel(); // Callback to refresh hotels in AdminDashboard
        setFormData({
          name: '',
          description: '',
          room_counts: '',
        });
        toast.success('Hotel added successfully');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error('Error adding hotel:', error);
      toast.error('Failed to add hotel');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form
        onSubmit={handleAddHotel}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Hotel Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Enter Hotel Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500  text-black" 
            placeholder="Enter Hotel Description"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="room_counts"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Room Counts
          </label>
          <input
            type="text"
            id="room_counts"
            name="room_counts"
            value={formData.room_counts}
            onChange={handleInputChange}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Enter Room Counts"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Hotel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHotel;
