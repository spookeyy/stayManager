import React, { useState } from 'react';

function UpdateProfileForm({ currentUser, onClose }) {
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: '',
    phone_number: currentUser.phone_number,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem('access_token');
      if (!authToken) {
        throw new Error('No access token found');
      }

      const response = await fetch(`http://localhost:5000/users/${currentUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.status} ${response.statusText}`);
      }

      onClose();
      alert('Profile updated successfully!');
      
      // Logout user by clearing local storage and redirecting to login page
      localStorage.removeItem('access_token');
      window.location.href = '/login'; // Redirect to your login page

    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="text-gray-900 border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-gray-900 border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="text-gray-900 border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="text-gray-900 border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
