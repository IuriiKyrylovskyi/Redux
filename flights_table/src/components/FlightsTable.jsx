import React, { useEffect } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";
import * as flightsAction from "../tasks/flights.actions";

import { apiInfo } from "../api_info";

const FlightsTable = ({ flights, getFlightsList }) => {
  useEffect(() => {
    getFlightsList();
  }, [getFlightsList]);

  let fl = [];
  if (flights.length !== 0) {
    console.log(flights.flights.body);
    const allFlights = flights.flights.body;
    console.log(allFlights.arrival);
    console.log(allFlights.arrival[0].ID);
    return (fl = [...allFlights.arrival])//, ...allFlights.departure]);
  }
  console.log(fl);
  const flightsList = fl; //apiInfo.departure; //.concat(apiInfo.arrival);
  // const departuresList = apiInfo.departure;

  return (
    <ul className="flights__list">
      {
        // flights.length !== 0 &&
        flightsList.map((flightObj, index) => {
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
    flights: state.flightsList.flights, //.flights.body,
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
