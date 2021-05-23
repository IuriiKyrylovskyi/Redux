import React from "react";
import TableButtons from "./TableButtons";
import TableHeader from "./TableHeader";
import Departures from "./Departures";
import Arrivals from "./Arrivals";

const Flights = () => {
  return (
    <div className="flights">
      <TableButtons />
      <div className="flights__content">
        <div className="flights__table-header">
          <TableHeader />
        </div>
          <Departures />
          <Arrivals />
        </div>
      </div>
    </div>
  );
};

export default Flights;
