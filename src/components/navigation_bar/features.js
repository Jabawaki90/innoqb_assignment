import React, { useContext } from "react";
import "./features.css";
import CartContext from "../../context";

const Features = (props) => {
  const { totalCart } = useContext(CartContext);

  return (
    <div className="features_main_container">
      <div className="features_single_container wishlist">
        <div className="icon_container">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <h4>Whish List</h4>
      </div>
      <div className="features_single_container">
        <div className="icon_container">
          <ion-icon name="person-outline" icon></ion-icon>
        </div>
        <h4>Sign In</h4>
      </div>
      <div className="features_single_container">
        <div className="icon_container cart_number_sign">
          {totalCart > 0 && (
            <div className="number_container">
              <p className="number">{totalCart}</p>
            </div>
          )}
          <ion-icon name="cart-outline"></ion-icon>
        </div>
        <h4>Cart</h4>
      </div>
    </div>
  );
};

export default Features;
