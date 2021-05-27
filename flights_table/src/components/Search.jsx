import React, { useState } from "react";
import { connect } from "react-redux";
import { CgSearch } from "react-icons/cg";
import * as flightsAction from "../tasks/flights.actions";

const Search = ({ search, getSearchedFlight }) => {
  // const [inputText, setInpitText] = useState(search);

  const [inputText, setInpitText] = useLocalStorage("search", search);

  const handleChange = (e) => {
    setInpitText(e.target.value.toUpperCase());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchedFlight(inputText);
  };

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={handleSearch}
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
        <button
          className="search__button"
          // onClick={handleSearch}
          //
        >
          Search
        </button>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    search: state.flightsList.flight,
  };
};

const mapDispatch = {
  getSearchedFlight: flightsAction.getSearchedFlight,
};

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default connect(mapState, mapDispatch)(Search);
