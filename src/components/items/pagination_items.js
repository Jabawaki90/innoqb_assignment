import React from "react";
import { useState, useEffect } from "react";
import "./pagination_items.css";

import Card from "../UIElement/card";
import Item from "./item";
import axios from "axios";

const DUMMY_LIST_API = "https://dummyjson.com/products";

const Pagination_items = () => {
  const [item_list, setItemList] = useState([]);
  const fetchAPI = async () => {
    const response = await fetch(DUMMY_LIST_API);
    const data = await response.json();
    console.log(data);
    setItemList(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {item_list.products.map((item) => {
        const { title } = item;
        return <h1>{title}</h1>;
      })}
    </div>
  );
};

export default Pagination_items;
