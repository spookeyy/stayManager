import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={localStorage.getItem("access_token") ? <Home /> : <Login />}
          />
          <Route
            path="/profile"
            element={localStorage.getItem("access_token") ? <Profile /> : <Login />}
          />
          <Route path="/room-list" element={<RoomList />} />
          <Route path="/hotels" element={<Hotels />} />
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
