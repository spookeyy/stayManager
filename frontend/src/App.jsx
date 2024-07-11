import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Reviews_Form from "./pages/Reviews_Form";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ResetPasswordForm from "./pages/ResetPasswordForm";
import Hotels from "./pages/Hotels";
import { UserProvider } from "./context/AuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./pages/PrivateRoute";
import HotelRooms from "./pages/HotelRooms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHotels from "./pages/AdminHotels";
import AdminBookings from "./pages/AdminBookings";
import AdminRooms from "./pages/AdminRooms";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ToastContainer /> {/* Render ToastContainer here */}
        <Routes>
          {/* PrivateRoute for authenticated users */}
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Route>

          {/* Route for login */}
          <Route
            path="/login"
            element={
              localStorage.getItem("access_token") ? <Home /> : <Login />
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/hotels" element={<AdminHotels />} />
          <Route path="/admin/rooms" element={<AdminRooms />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/profile" element={<AdminProfile />} />

          {/* Public routes */}
          <Route path="/room-list" element={<RoomList />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:hotelId/rooms" element={<HotelRooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/form" element={<Reviews_Form />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
