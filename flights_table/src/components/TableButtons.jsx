import React, { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

const TableButtons = () => {
  const [active, setActive] = useState(true);
  const [activeDep, setActiveDep] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
    setActiveDep(!activeDep);
  };

  const btnClassName =  "btn"; //active ? "btn _active" :

  return (
    <div className="flights__header">
      <button
        className={btnClassName}
        onClick={handleClick}
        disabled={active}
        //
      >
        <FaPlaneDeparture /> Departures
      </button>
      <button
        className={btnClassName}
        onClick={handleClick}
        disabled={activeDep}
        //
      >
        <FaPlaneArrival /> Arrivals
      </button>
    </div>
  );
};

export default TableButtons;
