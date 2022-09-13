import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const CarousalProvider = ({ children }) => {
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CarousalProvider;
