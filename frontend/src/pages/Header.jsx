import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

function Header({ toggleNav, isNavOpen, setIsNavOpen }) {
  const { currentUser, logout } = useContext(UserContext);

  const handleLogout = () => {
    toast.success('Logged out successfully!');
    logout();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="mx-auto px-4 py-2 max-w-7xl bg-blue-500 shadow-lg mt-4">
        <div className="flex justify-between items-center">
          {/* Navbar brand */}
          <Link to="/" className="text-xl font-bold text-white">
            HETELOGIX
          </Link>

          {/* Navbar toggler for      small screens */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleNav}
          >
            <svg
              className="h-6 w-6 text-white"
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
              isNavOpen ? 'block' : 'hidden'
            } lg:flex lg:flex-grow items-center justify-end`}
            id="navbarSupportedContent"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="block lg:inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => setIsNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/hotels"
                  className="block lg:inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => setIsNavOpen(false)}
                >
                  Hotels
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/room-list"
                  className="block lg:inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => setIsNavOpen(false)}
                >
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="block lg:inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
              {currentUser && (
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="block lg:inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Profile
                  </Link>
                </li>
              )}
              <li className="nav-item">
                {currentUser ? (
                  <button
                    className="block lg:inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="block lg:inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
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
  );
}

export default Header;
