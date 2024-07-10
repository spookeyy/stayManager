import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import Footer from './Footer';

function Home({ setIsLoggedIn }) {
  const companyInfo = {
    companyName: 'Your Company Name',
    address: 'New York, NY 10012, US',
    email: 'info@example.com',
    phone: '+01 234 567 88',
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="mx-auto px-4 py-2 max-w-7xl bg-white shadow-lg mt-4">
        <div className="flex justify-between items-center">
          {/* Navbar brand */}
          <Link to="/" className="text-xl font-bold text-gray-800">
            HETELOGIX
          </Link>

          {/* Search form */}
          <form className="ml-4 flex items-center">
            <input
              className="form-input px-4 py-2 focus:outline-none focus:shadow-outline"
              type="search"
              placeholder="Search"
            />
            <button
              className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Navbar toggler */}
          <button className="block lg:hidden focus:outline-none">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Navbar links */}
          <div className="hidden lg:flex flex-grow items-center justify-end" id="navbarSupportedContent">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/" className="px-3 py-2 text-gray-800">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hotels" className="px-3 py-2 text-gray-800">
                  Hotels
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/room-list" className="px-3 py-2 text-gray-800">
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="px-3 py-2 text-gray-800">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="px-3 py-2 text-gray-800">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
          eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
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

        {/* Footer */}
        <Footer companyInfo={companyInfo} />
      </div>
    </div>
  );
}

export default Home;
