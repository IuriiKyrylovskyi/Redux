import React from "react";

const TableRow = ({ ID, term, timeDepShedule, timeDepFact, status, codeShareData }) => {
  const airline = "BAW"; //codeShareData.airline.en.name;
  const icon = "https://api.iev.aero/media/airline/files/5b556bea9e8d9364778468.png"; //codeShareData.airline.en.logoSmallName;
  const flight = "WizzAir"; // codeShareData.codeShare;

  return (
    <li className="flights__table-row ceil">
      <div className="ceil__terminal">{term}</div>
      <div className="ceil__timeShed">{timeDepShedule}</div>
      <div className="ceil__destination">{"destination"}</div>
      <div className="ceil__timeAct">`Landed or Departed ${timeDepFact}`</div>
      <div className="ceil__airline">
        <img src={icon} alt={airline} />
        {airline}
      </div>
      <div className="ceil__flight">{flight}</div>
    </li>
  );
};

export default TableRow;
