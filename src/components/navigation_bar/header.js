import React from "react";
import "./header.css";
import Form from "./form";
import Features from './features';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div className="navbar_container">
      <img className="logo" src="/innoqb_img.jpg" alt="Logo" />
      <Form />
      <Features/>
    </div>
  );
};

export default Header;
