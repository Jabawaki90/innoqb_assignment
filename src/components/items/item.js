import React from "react";
import "./item.css";
import { Rating } from "@mui/material";

const Item = ({ ...props }) => {
  const discountedPrice = (
    props.price -
    (props.discounted / 100) * props.price
  ).toFixed(2);

  return (
    <div className="card-container">
      <div className="card-element-container">
        <div className="img-container">
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
          {props.discounted ? (
            <p>{`$${props.price} From $${discountedPrice}`}</p>
          ) : (
            <p>props.price</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
