import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import TableButtons from "./TableButtons";
import TableHeader from "./TableHeader";
import FlightsTable from "./FlightsTable";

const Flights = ({ search }) => {
  const [isDepartures, setIsDepartures] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDepartures(!isDepartures);
  };

  // const mainPath = "arrivals"// ? !isDepartures : "departures";
  const flightPath = `/?name=${search.text}`;

  // const path = mainPath ? !search : mainPath + flightPath;
  // console.log(search.text);
  // console.log(path);
  return (
    <div className="flights">
      {/* <Link to={path}> */}
      <TableButtons
        isDepartures={isDepartures}
        handleDepartures={handleClick}
        flightPath={flightPath}
        //
      />
      {/* </Link> */}

      <div className="flights__content">
        <TableHeader />
        <div className="flights__table">
          <FlightsTable isDepartures={isDepartures} />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    search: state.flightsList.flight,
  };
};

export default connect(mapState)(Flights);
