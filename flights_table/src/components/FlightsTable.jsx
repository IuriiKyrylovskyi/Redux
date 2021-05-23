import React from "react";
import TableRow from "./TableRow";

import { apiInfo } from "../api_info";

const FlightsTable = () => {
  const flightsList = apiInfo;
  // const departuresList = apiInfo.departure;
  // const departuresList = apiInfo.departure;

  return (
    <ul className="flights__departures">
      {flightsList.map((dep) => {
        return <TableRow key={dep.ID} {...dep} />;
      })}
    </ul>
  );
};

export default FlightsTable;
