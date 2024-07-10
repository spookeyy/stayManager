import React from 'react';
import { Link } from 'react-router-dom';

const reviewsData = [
  { id: 1, name: 'Client A', rating: 4, review: 'Great service and comfortable stay.', imageUrl: 'url_to_image_a' },
  { id: 2, name: 'Client B', rating: 5, review: 'Amazing experience, highly recommended!', imageUrl: 'url_to_image_b' },
  { id: 3, name: 'Client C', rating: 3, review: 'Decent place, but could improve amenities.', imageUrl: 'url_to_image_c' },
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Client Reviews</h1>

        {/* Grid Container for Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Client Image and Name */}
              <div className="px-6 py-4 bg-gray-200 flex items-center">
                <img src={review.imageUrl} alt={review.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="flex items-center mt-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <svg key={index} className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10 14.2l-5.76 3.39a.75.75 0 01-1.16-.65v-7.28L.57 7.12a.75.75 0 01.43-1.28L8.8 5.2l3.66-6.58a.75.75 0 011.34 0l3.66 6.58 7.8.72a.75.75 0 01.43 1.28l-4.52 4.64v7.28a.75.75 0 01-1.16.65L10 14.2z"
                        />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">{review.rating}</span>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="px-6 py-4">
                <p className="text-gray-700">{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button to Add Review */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/reviews/form"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Add Your Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
