import React from 'react';
import { Link } from 'react-router-dom';

const reviewsData = [
  { id: 1, name: 'Client A', rating: 4, review: 'Great service and comfortable stay.', imageUrl: 'data:image/jpeg;base64,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' },
  { id: 2, name: 'Client B', rating: 5, review: 'Amazing experience, highly recommended!', imageUrl: 'https://th.bing.com/th?id=OIP.YWFSHmhVvwHHmColuR-sjAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
  { id: 3, name: 'Client C', rating: 3, review: 'Decent place, but could improve amenities.', imageUrl: 'https://th.bing.com/th?id=OIP.03lwd5tQlIrg4ANs16cGzgHaMU&w=193&h=322&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
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
