// pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure global styles are imported

function Home() {
  return (
    <div>
      <nav className="container mx-auto py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/room-list">Room List</Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto">
        <h1 className="font-bold text-red underline">
          Hello world! My name is peter
        </h1>
        {/* Add your home page content */}
      </div>
    </div>
  );
}

export default Home;
