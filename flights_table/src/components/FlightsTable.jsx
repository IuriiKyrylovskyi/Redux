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
        const {
          ID,
          term,
          timeDepShedule,
          timeDepFact,
          status, // status: "DP",
          destination: handlerID[name], //"handlerID.name": "MASTERAVIA",
          icon: "airline.en.logoSmallName",
          airline: "airline.en.name",
          flight: "codeShareData.codeShare",
          //
        } = flightObj;

        console.log(destination);
        return (
          <div key={ID} className="">hi</div>
          // <TableRow
          //   key={ID}
          //   term={term}
          //   timeDepShedule={timeDepShedule}
          //   timeDepFact={timeDepFact}
          //   status={status}
          //   destination={destination}
          //   icon={icon}
          //   airline={airline}
          //   flight={flight}
          //   //
          // />
        );
      })}
    </ul>
  );
};

export default FlightsTable;
