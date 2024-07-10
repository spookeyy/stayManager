import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      password,
      phone,
      profilePhoto,
    });
    // Implement form submission logic here (e.g., send data to backend)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={fullName}
              onChange={handleFullNameChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="block text-base font-medium text-gray-700 mr-2">
              Phone Number
            </label>
            <div className="flex">
              <select
                className="block appearance-none w-1/3 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                onChange={handlePhoneChange}
                required
              >
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (India)</option>
                <option value="+254">+254 (Kenya)</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="flex-1 px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="profilePhoto" className="block text-base font-medium text-gray-700">
              Profile Photo
            </label>
            <input
              type="file"
              id="profilePhoto"
              onChange={handlePhotoChange}
              accept="image/*"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-base text-gray-900">
              I agree to the <Link to="/terms" className="text-blue-500">Terms</Link> and <Link to="/privacy" className="text-blue-500">Privacy Policy</Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-base text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>
        <div className="mt-6 border-t border-gray-200"></div>
        <div className="mt-6">
          <p className="text-base text-center text-gray-700">Already have an account? <Link to="/login" className="text-blue-500">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;


