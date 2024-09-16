"use client";

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { testimonials } from "./data/index";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    className="bg-gray-800 p-4 md:p-6 rounded-2xl xs:w-[280px] w-full mx-2"
    style={{ maxWidth: '400px' }}
  >
    <p className="text-white font-black text-[24px] md:text-[36px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[12px] md:text-[16px]">{testimonial}</p>

      <div className="mt-4 md:mt-6 flex justify-between items-center gap-2">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[12px] md:text-[14px]">
            <span className="text-blue-400">@</span> {name}
          </p>
          <p className="mt-1 text-gray-400 text-[10px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          width={32}
          height={32}
          className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
        },
      },
    ],
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "white",
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></div>
    ),
  };

  return (
    <div className="bg-black p-5 relative">
      <div className="rounded-2xl p-6 md:p-10 min-h-[180px] md:min-h-[240px]">
        <motion.div className="min-h-[100px]">
          <p className="text-gray-400">What others say</p>
          <h2 className="text-white text-lg md:text-3xl font-bold">Testimonials.</h2>
        </motion.div>
      </div>
      <div className="relative -mt-16 md:-mt-20 pb-14 px-2 md:px-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={index} index={index} {...testimonial} />
          ))}
        </Slider>
        <style jsx>{`
          .slick-prev, .slick-next {
            z-index: 1; /* Ensure buttons are above carousel items */
            background-color: rgba(0, 0, 0, 0.5); /* Optional background color for visibility */
            border-radius: 50%; /* Round buttons */
            width: 30px; /* Button width */
            height: 30px; /* Button height */
          }

          .slick-prev {
            left: -70px; /* Adjust positioning */
          }

          .slick-next {
            right: -40px; /* Adjust positioning */
          }
        `}</style>
      </div>
    </div>
  );
};

export default Feedbacks;
