import React from "react";

const TableRow = ({ ID, term, timeDepShedule, timeDepFact, status, destination, icon, airline, flight }) => {
  return (
    <li className="flights__table-row ceil">
      <div className="ceil__terminal">{term}</div>
      <div className="ceil__timeShed">{timeDepShedule}</div>
      <div className="ceil__destination">{destination}</div>
      <div className="ceil__timeAct">`Landed or Departed ${timeDepFact}`</div>
      <div className="ceil__airline">
        {icon}
        {airline}
      </div>
      <div className="ceil__flight">{flight}</div>
    </li>
  );
};

export default TableRow;
