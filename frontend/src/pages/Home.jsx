import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import Footer from './Footer';

function Home() {
  const companyInfo = {
    companyName: 'The Fours Hotel',
    address: 'Nairobi, Nrb 44773, Kenya',
    email: 'thefourshotel@gmail.com',
    phone: '+254704372525',
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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
            className={`${isNavOpen ? 'block' : 'hidden'} lg:flex lg:flex-grow items-center justify-end`}
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

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg text-gray-800">
          Nestled along the picturesque coastline, the Oceanview Resort offers a tranquil oasis for the discerning traveler. Boasting stunning ocean vistas from every room, this hotel provides the ultimate in beachfront luxury. Guests can indulge in gourmet dining, rejuvenate at the full-service spa, or simply unwind by the infinity pool as they soak up the serene ambiance. With impeccable service and thoughtful amenities, the Oceanview Resort promises an unforgettable escape.
        </p>

        {/* Example Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Example"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Reviews */}
        <Reviews />
      </div>

      {/* Footer */}
      <Footer companyInfo={companyInfo} />
    </div>
  );
}

export default Home;