import React from "react";
import TableButtons from "./TableButtons";
import TableHeader from "./TableHeader";
import FlightsTable from "./FlightsTable";
// import Departures from "./Departures";
// import Arrivals from "./Arrivals";

const Flights = () => {
  return (
    <div className="flights">
      <TableButtons />
      <div className="flights__content">
        <TableHeader />
        <div className="flights__table">
          <FlightsTable />
        </div>
      </div>
    </div>
  );
};

export default Flights;
