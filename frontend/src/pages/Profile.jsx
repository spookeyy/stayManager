import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext';
import Header from './Header';
import UpdateProfileForm from './UpdateProfileForm'; // Assuming you have an UpdateProfileForm component

function Profile() {
  const { currentUser } = useContext(UserContext); // Accessing currentUser from context
  let updateProfileWindow = null;

  const openUpdateForm = () => {
    const width = 600; // Width of the popup window
    const height = 500; // Height of the popup window
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const features = `width=${width},height=${height},left=${left},top=${top}`;

    updateProfileWindow = window.open('', 'Update Profile', features);
    updateProfileWindow.document.body.innerHTML = `
      <html>
        <head>
          <title>Update Profile</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .popup-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: #f0f0f0; border-bottom: 1px solid #ccc; }
            .popup-header h2 { margin: 0; font-size: 1.5rem; }
            .popup-close { cursor: pointer; }
            .container { padding: 2rem; }
          </style>
        </head>
        <body>
          <div class="popup-header">
            <h2>Update Profile</h2>
            <span class="popup-close" onclick="window.close()">Close &#10006;</span>
          </div>
          <div class="container">
            <div id="update-profile-form"></div>
          </div>
        </body>
      </html>
    `;

    // Render UpdateProfileForm component inside the popup window
    const updateProfileFormContainer = updateProfileWindow.document.getElementById('update-profile-form');
    updateProfileFormContainer.innerHTML = `
      <div>
        <style>
          .text-red-500 { color: #ff0000; }
        </style>
        <div id="update-profile-root"></div>
        <script>
          const currentUser = ${JSON.stringify(currentUser)};
          document.getElementById('update-profile-root').innerHTML = '${UpdateProfileForm.toString()}'.replace('({ onClose, currentUser })', `({ onClose: () => window.close(), currentUser })`);
        </script>
      </div>
    `;
  };

  if (!currentUser) {
    return <div>Loading...</div>; // Placeholder for loading state or redirect if not authenticated
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
      </div>
    </div>
  );
}

export default Profile;
