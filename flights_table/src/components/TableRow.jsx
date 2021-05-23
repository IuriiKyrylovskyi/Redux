import React from "react";

const TableRow = ({ terminal, time, destination, icon, airline, flight }) => {
  return (
    <li className="flights__table-row ceil">
      <div className="ceil__terminal">{terminal}</div>
      <div className="ceil__time">`Landed or Departed ${time}`</div>
      <div className="ceil__destination">{destination}</div>
      <div className="ceil__airline">
        {icon}
        {airline}
      </div>
      <div className="ceil__flight">{flight}</div>
    </li>
  );
};

export default TableRow;
