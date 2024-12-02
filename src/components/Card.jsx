import React from 'react';
import tasbeeh from '../assets/Tasbeeh.jpg';
import PrayerCap from '../assets/Prayer Cap.jpg';
import Perfume from '../assets/Perfume.jpg';

function Card() {
  const products = [
    {
      id: 1,
      image: tasbeeh,
      caption: "Tasbeeh",
      price: "Rs :200.00",
    },
    {
      id: 2,
      image: PrayerCap,
      caption: "Prayer Cap",
      price: "Rs :250.00",
    },
    {
      id: 3,
      image: Perfume,
      caption: "Perfume",
      price: "Rs :300.00",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-50">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-lg p-4 max-w-sm transform transition-transform duration-300 hover:scale-105
            hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <img
              src={product.image}
              alt={product.caption}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-bold">{product.caption}</h2>
              <p className="text-gray-700 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
