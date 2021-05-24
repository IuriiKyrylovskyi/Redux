import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  const [inputText, setInpitText] = useState("");

  const handleChange = (e) => {
    setInpitText(e.target.value);
  };

  return (
    <div className="search">
      <form
        className="search__form"
        // onSubmit={ }
        //
      >
        <CgSearch />
        <input
          type="text"
          className="search__input"
          placeholder="flight #"
          onChange={handleChange}
          value={inputText}
          //
        />
        <button className="search__button">Search</button>
      </form>
    </div>
  );
};

export default Search;
