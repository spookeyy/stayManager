import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";

export default function Reviews_Form() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    try {
      const userId = localStorage.getItem("user_id");
      if (!userId) {
        console.error("User ID not found in localStorage");
        setUsername("Anonymous");
        return;
      }

      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      setUsername(userData.username);
    } catch (error) {
      console.error("Error fetching username:", error);
      setUsername("Anonymous");
    }
    if (!userId) {
      console.error("User ID not found in localStorage");
      toast.error(
        "You need to be logged in to submit a review. Please login or create an account."
      );
      navigate("/login");
      return;
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          username,
          rating: parseInt(rating),
          comment,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit review");
      }

      toast.success("Review submitted successfully!");
      navigate("/reviews");
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error(
        error.message || "Failed to submit review. Please try again later."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Add Your Review
          </h1>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 mb-1 font-medium">
                Your Name:
              </label>
              <input
                id="name"
                type="text"
                className="form-input px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={username}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="rating"
                className="text-gray-600 mb-1 font-medium"
              >
                Rating:
              </label>
              <select
                id="rating"
                className="form-select px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select a rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="comment"
                className="text-gray-600 mb-1 font-medium"
              >
                Comment:
              </label>
              <textarea
                id="comment"
                className="form-textarea px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Write your review here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
