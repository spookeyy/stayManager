import React from 'react';

function Hotels() {
  return (
    <div>
      <h1>Hotels</h1>

      {/* Card Component */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* Image */}
        <img className="w-full" src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder image" />

        {/* Card Content */}
        <div className="px-6 py-4">
          {/* Title */}
          <div className="font-bold text-xl mb-2">Hotel Name</div>

          {/* Description */}
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
