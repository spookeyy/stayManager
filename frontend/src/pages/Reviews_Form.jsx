import React from 'react';

export default function Reviews_Form() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Your Review</h1>

      {/* Form Example (Replace with your actual form) */}
      <form className="space-y-4">
        <div className="flex items-center mb-2">
          <label className="text-gray-600">Your Name:</label>
          <input type="text" className="form-input ml-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-600">Rating:</label>
          <select className="form-select ml-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-600">Review:</label>
          <textarea className="form-textarea ml-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" rows="4"></textarea>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}
