import React, { useContext } from "react";

import "./header.css";
import Form from "./form";
import Features from './features';

import CartContext from '../../context'


const Header = () => {

  const {totalCart} = useContext(CartContext)

  return (
    <div className="navbar_container">
      <img className="logo" src="/innoqb_img.jpg" alt="Logo" />
      <div className="icon-main-container">

      <div className="icons_container">
      <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div className="icons_container">
      <ion-icon name="search-outline"></ion-icon>
      </div>
      </div>

      <div className="icon-main-container">

      <div className="icons_container">
      <ion-icon name="person-circle-outline"></ion-icon>
      </div>
      <div className="icons_container">{totalCart > 0 && 
          <div className="number_container">
            <p className="number">{totalCart}</p>
          </div>
          }
      <ion-icon name="bag-outline"></ion-icon>
      </div>
          </div>

      <Form />
      <Features/>
    </div>
  );
};

export default Header;
