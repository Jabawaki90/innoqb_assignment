import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./form.css";

const Form = () => {
  return (
    <div className="container">
      <form className="search-bar" action="submit">
        <input type="text" placeholder="Search the store" name="search" />
        <button>
          <SearchIcon className="search_icon" />
        </button>
      </form>
    </div>
  );
};

export default Form;
