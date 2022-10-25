import React from "react";
import { useState, useEffect } from "react";
import "./pagination_items.css";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

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
    <div className="main_container">
      <button>
        <ArrowCircleLeftOutlinedIcon />
      </button>
      <div className="card_container">
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
            <div>
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
            </div>
          );
        })}
      </div>
      <button>
        <ArrowCircleRightOutlinedIcon />
      </button>
    </div>
  );
};

export default Pagination_items;
