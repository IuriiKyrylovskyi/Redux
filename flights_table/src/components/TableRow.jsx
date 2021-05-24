import React from "react";

const TableRow = ({ ID, index, term, timeDepShedule, timeDepFact, status, codeShareData }) => {
  const airline = "WizzAir"; //codeShareData.airline.en.name;
  const icon = "https://api.iev.aero/media/airline/files/5b556bea9e8d9364778468.png"; //codeShareData.airline.en.logoSmallName;
  const flight = "W3325"; // codeShareData.codeShare;

  return (
    <li className="flights__table-row row">
      <div className="row__terminal">
        <span>{term}</span>
      </div>
      <div className="row__timeShed">{`${new Date(timeDepShedule).getHours()} : ${new Date(timeDepShedule).getMinutes()}`}</div>
      <div className="row__destination">{"destination"}</div>
      <div className="row__timeAct">{`Landed or Departed ${new Date(timeDepFact).getHours()} : ${new Date(timeDepFact).getMinutes()}`} </div>
      <div className="row__airline">
        <img src={icon} alt={airline} />
        {airline}
      </div>
      <div className="row__flight">{flight}</div>
    </li>
  );
};

export default TableRow;
