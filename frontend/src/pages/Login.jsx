import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const handleLogin = () => {
    // Perform login actionsdd
    setIsLoggedIn(true);
  };
            
  return (
  <div>
    <Header />
    <div className="container mx-auto mt-10">
      <h1>Login</h1>
      <form className="px-4 py-3">
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
          <input type="password" className="form-control w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <div className="mb-3">
          <input type="checkbox" className="form-check-input rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" id="dropdownCheck" />
          <label className="form-check-label" htmlFor="dropdownCheck"> Remember me </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign in</button>
      </form>
      <div className="border-t border-gray-200"></div>
      <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New around here? Sign up</Link>
      <Link to="/reset-password" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Forgot password?</Link>
    </div>
    </div>
  );
}

export default Login;
