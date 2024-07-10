import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import Footer from './Footer';
import Header from './Header';

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
      {/* Header */}
      <Header
        toggleNav={toggleNav}
        isNavOpen={isNavOpen}
      />
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