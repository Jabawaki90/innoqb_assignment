import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./form.css";

const Form = (props) => {
  return (
    <form className="search_bar" action="submit">
      <input
        className="search_input"
        type="text"
        placeholder="Search the store"
        name="search"
      />
      <button>
        <SearchIcon className="search_icon" />
      </button>
    </form>
  );
};

export default Form;
