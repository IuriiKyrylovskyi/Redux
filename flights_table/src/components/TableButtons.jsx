import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

const TableButtons = () => {
  return (
    <div className="flights__header">
      <button className="flights__header-departures-btn btn">
        <FaPlaneDeparture /> Departures
      </button>
      <button className="flights__header-arrivals-btn btn _active">
        <FaPlaneArrival /> Arrivals
      </button>
    </div>
  );
};

export default TableButtons;
