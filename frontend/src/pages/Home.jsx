import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import Footer from './Footer';
import Header from './Header';

function Home() {
  const companyInfo = {
    companyName: 'Your Company Name',
    address: 'New York, NY 10012, US',
    email: 'info@example.com',
    phone: '+01 234 567 88',
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus.
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
