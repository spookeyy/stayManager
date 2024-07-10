import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <sidebar>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/guests">Guests</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </sidebar>
  );
};

export default Sidebar;