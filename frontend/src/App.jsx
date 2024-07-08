// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import RoomDetail from './pages/RoomDetail';
import RoomList from './pages/RoomList';
import './index.css'; // Ensure global styles are imported


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="/room-list" element={<RoomList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
