"use client";

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated data with images
const data1 = [
  { id: 1, name: 'Chilli Chatkara', title: 'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 2, name: 'Mcdonalds', title: 'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 3, name: 'Star Bucks', title: 'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 4, name: 'KFC', title: 'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 5, name: 'Prestige', title: 'Retail', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 6, name: 'Figaro Italian Pizza', title: 'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 7, name: 'Captain Sam', title: 'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
  { id: 8, name: 'New York Pizzeria', title: 'Food Beverage', image: 'https://tse1.mm.bing.net/th?id=OIP.M7OldxPjZcyuzXOYUkQ6mQHaHP&pid=Api&P=0&h=180' },
];

// Custom Arrow Component
const CustomArrow = ({ className, onClick, direction }) => (
  <div
    className={`${className} absolute top-1/2 ${direction === 'left' ? 'left-0' : 'right-0'} text-white p-1 cursor-pointer bg-black rounded-full`}
    onClick={onClick}
    style={{
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '20px', // Reduced height
      width: '20px',  // Reduced width
      transform: direction === 'left' ? 'translateX(-50%)' : 'translateX(50%)',
    }}
  >
    {direction === 'left' ? <FaArrowLeft size={16} color="white" /> : <FaArrowRight size={16} color="white" />}
  </div>
);

// Product Card Component
const ProductCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <CustomArrow className="slick-next" direction="right" />,
    prevArrow: <CustomArrow className="slick-prev" direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="mt-10 rounded-[20px] mx-4 sm:mx-8 md:mx-16 lg:mx-24 p-5 mb-10">
      <div className="rounded-2xl p-6 md:p-10 min-h-[180px] md:min-h-[240px]">
        <p className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Top Categories</p>
      </div>
      <div className="relative -mt-16 md:-mt-20 pb-14 px-2 md:px-10">
        <Slider {...settings}>
          {data1.map((item) => (
            <div key={item.id} className="p-2">
              <div className="bg-white rounded-lg border border-gray-300 shadow-md flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out" style={{ height: '350px', width: '100%', maxWidth: '320px', borderWidth: '1px' }}>
                <div className="w-full h-3/5 rounded-t-lg overflow-hidden bg-gray-200 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                    style={{ margin: '10px', padding: '5px', borderRadius: '10px' }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-black">{item.name}</h3>
                  <p className="text-sm text-gray-700">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCard;
