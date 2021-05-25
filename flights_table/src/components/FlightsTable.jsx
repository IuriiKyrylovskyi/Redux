import React, { useEffect } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";
import * as flightsAction from "../tasks/flights.actions";

import { apiInfo } from "../api_info";

const FlightsTable = ({ getFlightsList }) => {
  useEffect(() => {
    getFlightsList();
  }, [getFlightsList]);
  const flightsList = apiInfo.departure; //.concat(apiInfo.arrival);
  // const departuresList = apiInfo.departure;
  // const departuresList = apiInfo.departure;

  return (
    <ul className="flights__list">
      {flightsList.map((flightObj, index) => {
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
          //
        } = flightObj;

        return (
          <TableRow
            key={ID}
            index={index}
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

const mapState = (state) => {
  return {
    flights: state.flightsList.flights,
    searh: state.flightsList.flight,
  };
};

const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
  getArrivalsList: flightsAction.getArrivalsList,
  getDeparturesList: flightsAction.getDeparturesList,
  getSearchedFlight: flightsAction.getSearchedFlight,
};

export default connect(mapState, mapDispatch)(FlightsTable);
