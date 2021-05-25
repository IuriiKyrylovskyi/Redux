import React, { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

const TableButtons = () => {
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };


  return (
    <div className="flights__header">
      <button
        className="btn"
        onClick={handleClick}
        disabled={active}
        //
      >
        <FaPlaneDeparture /> Departures
      </button>
      <button
        className='btn'
        onClick={handleClick}
        disabled={!active}
        //
      >
        <FaPlaneArrival /> Arrivals
      </button>
    </div>
  );
};

export default TableButtons;
