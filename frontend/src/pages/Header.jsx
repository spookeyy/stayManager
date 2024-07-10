import React from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleNav, isNavOpen, setIsNavOpen }) {
  return (
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
                  className="block lg:inline-block px-3 py-2 text-gray-800"
                  onClick={() => setIsNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/hotels"
                  className="block lg:inline-block px-3 py-2 text-gray-800"
                  onClick={() => setIsNavOpen(false)}
                >
                  Hotels
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/room-list"
                  className="block lg:inline-block px-3 py-2 text-gray-800"
                  onClick={() => setIsNavOpen(false)}
                >
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="block lg:inline-block px-3 py-2 text-gray-800"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="block lg:inline-block px-3 py-2 text-gray-800"
                  onClick={() => setIsNavOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
