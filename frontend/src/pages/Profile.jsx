import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';
import Header from './Header';
import UpdateProfileForm from './UpdateProfileForm';  

function Profile() {
  const { currentUser } = useContext(UserContext); 
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  const openUpdateForm = () => {
    setIsUpdateFormOpen(true);
  };

  const closeUpdateForm = () => {
    setIsUpdateFormOpen(false);
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header /> {/* Include the Header component for navigation */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <div className="text-gray-900">{currentUser.username}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <div className="text-gray-900">{currentUser.email}</div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
            <div className="text-gray-900">{currentUser.phone_number}</div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={openUpdateForm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Profile
            </button>
          </div>
        </div>
        {isUpdateFormOpen && <UpdateProfileForm onClose={closeUpdateForm} />}
      </div>
    </div>
  );
}

export default Profile;
