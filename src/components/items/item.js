import React, { useEffect, useState } from "react";
import "./item.css";
import { Rating } from "@mui/material";
import { grey, lightGreen, blueGrey, orange } from "@mui/material/colors";

const Item = ({ ...props }) => {
  const discountedPrice = (
    props.price -
    (props.discounted / 100) * props.price
  ).toFixed(2);

  return (
    <div className="card-container">
      <div className="card-element-container">
        <div className="img-container">
          <h4 className="discount_tag">{props.discounted} %</h4>
          <img
            className="image-style"
            src={props.thumbnail}
            alt={props.title}
          />
        </div>
        <div className="rating-container">
          <Rating
            name="rating"
            value={props.rating}
            readOnly
            precision={0.5}
            size="small"
          />
        </div>
        <p className="text-ref ">{`(Product ${props.id})`}</p>
        <p className="desc-ref">{props.description}</p>
        <div className="price-container ">
          <p className="price">${props.price}</p>
          <p className="from">From</p>
          <p className="discounted">{`$${discountedPrice}`}</p>
        </div>
        <div className="radio-container">
          <input id="radio-dark" type="radio" />
          <input className="radio-lightgreen" type="radio" />
          <input className="radio-grey" type="radio" />
          <input className="radio-orange" type="radio" />
        </div>
      </div>
    </div>
  );
};

export default Item;
