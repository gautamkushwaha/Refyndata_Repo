// FlippingCard.js
import React from 'react';

const FlippingCard = ({ image, title, description, topic }) => {
  return (
    <div className="relative w-64 h-40 mx-4 my-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 transform rotate-y-180 opacity-0 group-hover:opacity-100"
           style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-2">
          <p className="text-xs">{topic}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-white rounded-lg flex flex-col justify-end p-4 transition-transform duration-300 transform rotate-y-0 group-hover:rotate-y-180">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md">Read More</button>
      </div>
    </div>
  );
};

export default FlippingCard;
