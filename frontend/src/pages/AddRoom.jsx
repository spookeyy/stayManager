import React, { useState } from "react";
import { toast } from "react-toastify";
import { server_url } from "../../config";

const AddRoom = ({ onClose }) => {
  const [formData, setFormData] = useState({
    room_number: "",
    capacity: "",
    price: "",
    description: "",
    hotel_id: "",
    status: "available",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${server_url}/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Room added successfully");
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to add room");
      }
    } catch (error) {
      console.error("Error adding room:", error);
      toast.error("Failed to add room");
    }
  };

  const renderInputField = (field) => (
    <div className="mb-4" key={field}>
      <label
        htmlFor={field}
        className="block text-white text-sm font-bold mb-2"
      >
        {field
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </label>
      <input
        type={
          field === "price" || field === "capacity"
            ? "number"
            : "text"
        }
        id={field}
        name={field}
        value={formData[field]}
        onChange={handleInputChange}
        required={field !== "image"}
        className="form-input mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
        placeholder={`Enter ${field
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}`}
      />
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">
        Add New Room
      </h2>
      <form onSubmit={handleAddRoom} className="grid grid-cols-2 gap-4">
        <div>{renderInputField("room_number")}</div>
        <div>{renderInputField("capacity")}</div>
        <div>{renderInputField("price")}</div>
        <div>{renderInputField("description")}</div>
        <div>{renderInputField("hotel_id")}</div>
        <div>{renderInputField("image")}</div>
        <div className="col-span-2">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
            className="form-select mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
          >
            <option value="available">Available</option>
            <option value="unavailable">Booked</option>
          </select>
        </div>
        <div className="col-span-2 flex items-center justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Room
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
