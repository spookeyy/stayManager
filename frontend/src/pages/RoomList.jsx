import React from 'react';
import { Link } from 'react-router-dom';

function RoomList() {
  return (
    <div className="container mx-auto">
      <h1>Room List</h1>
      <div className="flex flex-wrap -mx-4">
        {/* Room 1 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img src="..." className="w-full" alt="Room 1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Room 1</div>
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-none">
              <li className="border-t border-gray-200 first:border-t-0 px-6 py-4">An item</li>
              <li className="border-t border-gray-200 px-6 py-4">A second item</li>
              <li className="border-t border-gray-200 px-6 py-4">A third item</li>
            </ul>
            <div className="px-6 py-4">
              <Link to="/room-detail" className="text-indigo-600 hover:text-indigo-800">Room details</Link>
            </div>
          </div>
        </div>

        {/* Room 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img src="..." className="w-full" alt="Room 2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Room 2</div>
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-none">
              <li className="border-t border-gray-200 first:border-t-0 px-6 py-4">An item</li>
              <li className="border-t border-gray-200 px-6 py-4">A second item</li>
              <li className="border-t border-gray-200 px-6 py-4">A third item</li>
            </ul>
            <div className="px-6 py-4">
              <Link to="/room-detail" className="text-indigo-600 hover:text-indigo-800">Room details</Link>
            </div>
          </div>
        </div>
        {/* Add more rooms as needed */}
      </div>
    </div>
  );
}

export default RoomList;
