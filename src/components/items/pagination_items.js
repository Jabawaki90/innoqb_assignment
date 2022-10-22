import React from "react";
import { useState, useEffect } from "react";
import "./pagination_items.css";

import Card from "../UIElement/card";
import Item from "./item";
import axios from "axios";

const DUMMY_LIST_API = "https://dummyjson.com/products";

const Pagination_items = (props) => {
  const [item_list, setItemList] = useState([]);

  const fetchAPI = async () => {
    const response = await fetch(DUMMY_LIST_API);
    const data = await response.json();
    setItemList(data.products);
    console.log(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="pagination-container">
      <div className="wrapper">
        {item_list.map((item) => {
          const {
            id,
            images,
            rating,
            brand,
            category,
            description,
            discountPercentage,
            price,
            stock,
            thumbnail,
            title,
          } = item;
          return (
            <Item
              key={id}
              id={id}
              images={images}
              rating={rating}
              brand={brand}
              category={category}
              description={description}
              discounted={discountPercentage}
              price={price}
              stock={stock}
              thumbnail={thumbnail}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pagination_items;
