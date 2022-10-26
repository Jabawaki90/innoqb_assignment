import React, { useState } from 'react'

import "./App.css";
import Header from "./components/navigation_bar/header";
import Temp from "./components/items/temp";

import CartContext from './context'

const App = () => {
    const totalItem = 0;
    const [totalCart, setTotalCart] = useState(totalItem)
    const addCartHandler = ()=>{
      setTotalCart(totalCart +1)
      return console.log(totalCart)
    }
  return (
    <div className="main-container">
      <CartContext.Provider value={{addCartHandler, totalCart}}>

      <Header />
      <div className="headline">
        <h1>Flash Deals</h1>
      </div>
      <Temp />
      </CartContext.Provider>
    </div>
  );
};

export default App;
