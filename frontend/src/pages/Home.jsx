import React, { useState, useEffect } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerStyle, setHeaderStyle] = useState({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "background-color 0.3s, height 0.3s",
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) { // Example threshold for shrinking the header
      setHeaderStyle({
        ...headerStyle,
        height: "60px", // Adjusted height on scroll
        backgroundColor: "#fff", // Adjusted background color
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Example box shadow
      });
    } else {
      setHeaderStyle({
        ...headerStyle,
        height: "100px", // Original height
        backgroundColor: "transparent", // Original background color
        boxShadow: "none", // No box shadow
      });
    }
  }, [scrollPosition]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const images = [
    {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beautiful Room",
    },
    {
      url: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Cozy Atmosphere",
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Relaxing View",
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header */}
      <div style={headerStyle}>
        <Header toggleNav={toggleNav} isNavOpen={isNavOpen} />
      </div>
      {/* Main content */}
      <div className="container mx-auto px-4 py-8" style={{ paddingTop: "100px" }}>
        {/* Image Slider */}
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={3000}>
          {images.map((image, index) => (
            <div key={index}>
              <div
                className="relative"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "calc(100vh - 150px)", // Adjusted height
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{image.title}</h2>
                    <p className="text-lg">Additional description if needed</p>
                  </div>
                </div>
              </div>
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
