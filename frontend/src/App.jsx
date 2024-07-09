import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Reviews_Form from './pages/Reviews_Form';
import RoomList from './pages/RoomList';
import RoomDetail from './pages/RoomDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ResetPasswordForm from './pages/ResetPasswordForm'; // Import ResetPasswordForm component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/room-list" element={<RoomList />} />
        <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} /> {/* Route to ResetPasswordForm */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/form" element={<Reviews_Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
