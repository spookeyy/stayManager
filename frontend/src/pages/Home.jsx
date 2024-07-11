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
    backgroundColor: "transparent",
    height: "100px",
    boxShadow: "none",
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
    if (scrollPosition > 100) {
      setHeaderStyle({
        ...headerStyle,
        height: "60px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      });
    } else {
      setHeaderStyle({
        ...headerStyle,
        height: "100px",
        backgroundColor: "transparent",
        boxShadow: "none",
      });
    }
  }, [scrollPosition]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const images = [
    {
      url: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?q=80&w=1627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beautiful Room",
    },
    {
      url: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cozy Atmosphere",
    },
    {
      url: "https://images.unsplash.com/photo-1600435335786-d74d2bb6de37?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={2500}>
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
                    <p className="text-lg italic">Redefining Hospitality...</p>
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
