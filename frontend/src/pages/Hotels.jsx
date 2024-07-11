import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      setHotels(data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching hotels");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div>{error}, login</div>
  }

  return (
    <div>
      <Header />

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-8">Hotels</h1>

          {/* Hotel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="rounded overflow-hidden shadow-lg bg-white"
              >
                {/* Image */}
                <img
                  className="w-full h-64 object-cover"
                  src={
                    hotel.image ||
                    "https://via.placeholder.com/400x250?text=Hotel+Image"
                  }
                  alt={hotel.name}
                />

                {/* Card Content */}
                <div className="px-6 py-4">
                  {/* Title */}
                  <div className="font-bold text-xl mb-2">{hotel.name}</div>

                  {/* Description */}
                  <p className="text-gray-700 text-base">{hotel.description}</p>

                  {/* Button */}
                  <Link
                    to={`/hotel/${hotel.id}/rooms`}
                    className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                  >
                    View Rooms
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
