import React, {useState} from "react";
import TableButtons from "./TableButtons";
import TableHeader from "./TableHeader";
import FlightsTable from "./FlightsTable";
// import Departures from "./Departures";
// import Arrivals from "./Arrivals";

const Flights = () => {
  const [isDepartures, setIsDepartures] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDepartures(!isDepartures);
  };

  return (
    <div className="flights">
      <TableButtons isDepartures={isDepartures} handleDepartures={handleClick} />
      <div className="flights__content">
        <TableHeader />
        <div className="flights__table">
          <FlightsTable isDepartures={isDepartures} />
        </div>
      </div>
    </div>
  );
};

export default Flights;
