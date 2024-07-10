import React from 'react';
import { Link } from 'react-router-dom';

function Register({ setIsLoggedIn }) {
  const handleRegister = () => {
    // Perform registration actions
    setIsLoggedIn(true);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form>
          <div className="mb-4">
            <label htmlFor="exampleDropdownFormEmail1" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
            <input type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleDropdownFormPassword1" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="exampleDropdownFormPassword1" placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <input type="checkbox" id="dropdownCheck" className="mr-2 leading-tight" />
            <label htmlFor="dropdownCheck" className="text-sm text-gray-700">Remember me</label>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" onClick={handleRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
        </form>
        <div className="border-t mt-6 border-gray-200"></div>
        <div className="text-center mt-4">
          <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Already have an account? Log in</Link>
          <Link to="/reset-password" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Forgot Password? Reset here</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
