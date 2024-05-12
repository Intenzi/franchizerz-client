

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomCard.css';

const CustomCard = ( {title, heading,data} ) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  

  return (
    <section className='custom-cards'>
      <h1>{heading} </h1>
      <div className="custom-card-carousel-container">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="custom-card-carousel-item">
              <div className="custom-card">
                <img className="custom-card-img-top" src={item.image} alt={item.name} />
                <div className="custom-card-card-body">
                  <h5 className="custom-card-card-title">{item.name}</h5>
                  <p className="custom-card-text">{item.title}</p>
                 
                  <a href="#" className="btn btn-primary">Explore</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>


 
  );
};

export default CustomCard;
