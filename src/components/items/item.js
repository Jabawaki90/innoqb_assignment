import React, { useEffect, useState, useContext } from "react";
import "./item.css";
import { Rating } from "@mui/material";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import CartContext from '../../context.js'

const Item = ({ ...props }) => {
  const {addCartHandler} = useContext(CartContext)
  const [imgHover, setImgHover] = useState('1st_image')
  
  const discountedPrice = (
    props.price -
    (props.discounted / 100) * props.price
  ).toFixed(2);

  // const addToCart_handler = (e)=>{
  //   e.preventDefault()
  //   console.log(data)
  // }

 
    
  return (
    <div className="card-container">
      <div className="card-element-container">
        <div className="img-container" >
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
          <CircleTwoToneIcon style={{ color: "#000" }} />
          <CircleTwoToneIcon style={{ color: "#43a047" }} />
          <CircleTwoToneIcon style={{ color: "#616161" }} />
          <CircleTwoToneIcon style={{ color: "#ffa726" }} />
        </div>
        <div className="button_container">
          <button
            className="add_to_cart_button"
            onClick={addCartHandler}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
