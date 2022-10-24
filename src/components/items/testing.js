import React from "react";
import Item from "./item";

import Slider from "react-slick";

import "./testing.css";

const Testing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="testing_container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Testing;
