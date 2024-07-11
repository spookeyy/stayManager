import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { toast } from "react-toastify";

export default function AdminHotels() {

    const [hotels, setHotels] = useState([]);
    const [showAddHotel, setShowAddHotel] = useState(false);

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
        if (response.ok) {
          console.log(response);
          const data = await response.json();
          setHotels(data);
        } else {
          throw new Error("Failed to fetch hotels");
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
        toast.error("Failed to fetch hotels");
      }
    };

  return (
    <div>
      <AdminHeader />
    <div className="mt-8 bg-gray-700 rounded-lg shadow-md p-6 mb-8 ">
      <h3 className="text-2xl font-semibold mb-4 text-gray-200">Hotels</h3>
      {hotels && hotels.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="bg-gray-600 rounded-lg shadow-md p-4">
              <div>
                <p className="text-lg font-semibold text-gray-200">
                  {hotel.name}
                </p>
                <p className="text-sm text-gray-400">{hotel.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No hotels available.</p>
      )}
    </div>

    </div>
  );
}
