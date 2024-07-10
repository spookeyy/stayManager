import React from 'react';

export default function Reviews_Form() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Add Your Review</h1>

        <form className="max-w-md mx-auto space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 mb-1 font-medium">Your Name:</label>
            <input
              id="name"
              type="text"
              className="form-input px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-gray-600 mb-1 font-medium">Rating:</label>
            <select
              id="rating"
              className="form-select px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="review" className="text-gray-600 mb-1 font-medium">Review:</label>
            <textarea
              id="review"
              className="form-textarea px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Write your review here"
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
  );
}
