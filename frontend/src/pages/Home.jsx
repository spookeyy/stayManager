import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Header from "./Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS

function Home() {
  const companyInfo = {
    companyName: "The Fours Hotel",
    address: "Nairobi, Nrb 44773, Kenya",
    email: "thefourshotel@gmail.com",
    phone: "+254704372525",
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const images = [
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503220377168-7d323e8a7c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531746240-cfa0a739f750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div>
      {/* Header */}
      <Header toggleNav={toggleNav} isNavOpen={isNavOpen} />
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Image Slider */}
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Carousel>

        {/* Reviews */}
        <Reviews />
      </div>

      {/* Footer */}
      <Footer companyInfo={companyInfo} />
    </div>
  );
}

export default Home;
