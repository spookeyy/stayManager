import React from 'react';
import { Link } from 'react-router-dom';

const reviewsData = [
  { id: 1, name: 'Client A', rating: 4, review: 'Great service and comfortable stay.' },
  { id: 2, name: 'Client B', rating: 5, review: 'Amazing experience, highly recommended!' },
  { id: 3, name: 'Client C', rating: 3, review: 'Decent place, but could improve amenities.' },
];

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Client Reviews</h1>

      {/* Existing Reviews */}
      <div className="space-y-4">
        {reviewsData.map(review => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            {/* Review Header with Rating */}
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {/* Star Rating */}
                <div className="text-yellow-400">
                  {[...Array(review.rating)].map((_, index) => (
                    <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 14.2l-5.76 3.39a.75.75 0 01-1.16-.65v-7.28L.57 7.12a.75.75 0 01.43-1.28L8.8 5.2l3.66-6.58a.75.75 0 011.34 0l3.66 6.58 7.8.72a.75.75 0 01.43 1.28l-4.52 4.64v7.28a.75.75 0 01-1.16.65L10 14.2z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{review.rating}</span>
              </div>
              <span className="ml-auto text-gray-500">{review.name}</span>
            </div>

            {/* Review Content */}
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>

      {/* Button to Add Review */}
      <div className="mt-8">
        <Link to="/reviews/form" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Your Review
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
