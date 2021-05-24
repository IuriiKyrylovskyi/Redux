import React from "react";
import TableRow from "./TableRow";

import { apiInfo } from "../api_info";

const FlightsTable = () => {
  const flightsList = apiInfo.departure; //.concat(apiInfo.arrival);
  // const departuresList = apiInfo.departure;
  // const departuresList = apiInfo.departure;

  return (
    <ul className="flights__departures">
      {flightsList.map((flightObj) => {
        // const destination = ["handlerID.name"];
        // const icon = airline.en.logoSmallName;
        // const airline = "airline.en.name";
        // const flight = "codeShareData.codeShare";

        const {
          ID,
          term,
          timeDepShedule,
          timeDepFact,
          status, 
          airline, 
          codeShareData,
        } = flightObj;

        return (
          <TableRow
            key={ID}
            term={term}
            timeDepShedule={timeDepShedule}
            timeDepFact={timeDepFact}
            status={status}
            // destination={destination}
            // icon={icon}
            airline={airline}
            // flight={flight}
            codeShareData={codeShareData}
            //
          />
        );
      })}
    </ul>
  );
};

export default FlightsTable;
