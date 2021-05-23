import React, { useState } from "react";

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
        <input
          type="text"
          className="search__input"
          placeholder="flight #"
          onChange={handleChange}
          value={inputText}
          //
        />
        <button className="search__button"></button>
      </form>
    </div>
  );
};

export default Search;
