import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Card.module.css";

const Card = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      name: "Education",
      image: `/img/Education (1).png`,
    },
    {
      id: 2,
      name: "Food $ Beverage",
      image: `/img/Food & Beverage (1).png`,
    },
    {
      id: 3,
      name: "HealthCare",
      image: `/img/Healthcare (1) (1).png`,
    },
    {
      id: 4,
      name: "Open to any",
      image: `/img/Open to any (1).png`,
    },
    {
      id: 5,
      name: "Service and retail",
      image: `/img/Service and retail (2).png`,
    },
    {
      id: 5,
      name: "Tour & Leisure",
      image: `/img/Tour & Leisure.png`,
    },
  ];

  return (
    <section className={styles.cards}>
      <h1>Top Categories</h1>
      <div className={styles["carousel-container1"]}>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className={styles["carousel-item"]}>
              <div className={styles["carousel-image"]}>
                <img className={styles["main-img"]} src={item.image} alt={item.name} />
              </div>
              <div className={styles["carousel-name"]}>
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#134c57", borderRadius: "50%" }}
      onClick={onClick}
    >
      <span style={{ color: "white" }}>›</span>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#134c57", borderRadius: "50%" }}
      onClick={onClick}
    >
      <span style={{ color: "white" }}>‹</span>
    </div>
  );
};

export default Card;
