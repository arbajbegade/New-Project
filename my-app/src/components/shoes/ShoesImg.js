import React from 'react';
import img1 from '../assets/shoe1.jpg';
import img2 from '../assets/shoe2.jpg';
import './ShoeImg.css'; // You can define styles in ShoesImg.css

function ShoesImg() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="relative">
        <img src={img1} alt="" className="w-full transition-transform transform scale-100 hover:scale-110" />
        <button className="absolute bottom-0 left-0 text-white p-2 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 delay-100">
          View Products
        </button>
      </div>
      <div className="relative">
        <img src={img2} alt="" className="w-full transition-transform transform scale-100 hover:scale-110" />
        <button className="absolute bottom-0 left-0 text-white p-2 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 delay-100">
          View Products
        </button>
      </div>
    </div>
  );
}

export default ShoesImg;
