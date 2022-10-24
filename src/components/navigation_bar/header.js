import React from "react";
import "./header.css";
import Form from "./form";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div className="navbar_container">
      <img className="logo" src="/innoqb_img.jpg" alt="Logo" />
      <Form />

      <div className="icon_main_container">
        <a className="icon_container" href="https://www.facebook.com">
          <FavoriteBorderIcon className="icon" />
          <h4>Wish Lists</h4>
        </a>
        <a className="icon_container" href="https://www.facebook.com">
          <PersonIcon className="icon" />
          <h4>Sign In</h4>
        </a>
        <a className="icon_container" href="https://www.facebook.com">
          <ShoppingCartIcon className="icon" />
          <h4>Cart</h4>
        </a>
      </div>
    </div>
  );
};

export default Header;
