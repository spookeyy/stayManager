import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const AdminHeader = ({toggleNav, isNavOpen, setIsNavOpen }) => {
  const { currentUser, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    window.location.reload(); // Reload the page after logout
  };

  return (
    <header>
      <div>
        {/* Navbar */}
        <nav className="mx-auto px-4 py-2 max-w-7xl bg-blue-500 shadow-lg mt-4">
          <div className="flex justify-between items-center">
            {/* Navbar brand */}
            <Link to="/" className="text-xl font-bold text-gray-800">
              HETELOGIX
            </Link>

            {/* Navbar toggler for small screens */}
            <button
              className="block lg:hidden focus:outline-none"
              onClick={toggleNav}
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Navbar links */}
            <div
              className={`${
                isNavOpen ? "block" : "hidden"
              } lg:flex lg:flex-grow items-center justify-end`}
              id="navbarSupportedContent"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="block lg:inline-block px-3 py-2 text-gray-800 focus:outline-none"
                    onClick={() => setIsNavOpen(false)}
                  >
                    UserDashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin"
                    className="block lg:inline-block px-3 py-2 text-gray-800 focus:outline-none"
                    onClick={() => setIsNavOpen(false)}
                  >
                    AdminDashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/hotels"
                    className="block lg:inline-block px-3 py-2 text-gray-800 focus:outline-none"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Hotels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/rooms"
                    className="block lg:inline-block px-3 py-2 text-gray-800 focus:outline-none"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Rooms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/bookings"
                    className="block lg:inline-block px-3 py-2 text-gray-800 focus:outline-none"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Bookings
                  </Link>
                </li>
                {currentUser && ( // Render Profile link only if user is logged in
                  <li className="nav-item">
                    <Link
                      to="/admin/profile"
                      className="block lg:inline-block px-3 py-2 text-gray-800 focus:outline-none"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  {currentUser ? (
                    <button
                      className="block lg:inline-block px-3 py-2 text-white focus:outline-none"
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block lg:inline-block px-3 py-2 text-gray-800 focus:outline-none"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;