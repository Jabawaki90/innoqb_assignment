import React from "react";
import "./features.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Features = (props) => {
  return (
    <div className="features_main_container">
      <div className="features_single_container">
        {/* <FavoriteBorderIcon fontSize="large" style={{ color: "yellow" }} /> */}
        <div className="icon_container">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <h4>Whish List</h4>
      </div>
      <div className="features_single_container">
        {/* <PersonOutlineOutlinedIcon
          className="person"
          fontSize="large"
          style={{ color: "yellow" }}
        /> */}
        <div className="icon_container">
          <ion-icon name="person-outline"></ion-icon>
        </div>
        <h4>Sign In</h4>
      </div>
      <div className="features_single_container">
        {/* <ShoppingCartOutlinedIcon
          fontSize="large"
          style={{ color: "yellow" }}
        /> */}
        <div className="icon_container cart_number_sign">
          <div className="number_container">
            <p className="number">0</p>
          </div>
          <ion-icon name="cart-outline"></ion-icon>
        </div>
        <h4>Cart</h4>
      </div>
    </div>
  );
};

export default Features;
