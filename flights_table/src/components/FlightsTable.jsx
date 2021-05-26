import React, { useEffect } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";
import * as flightsAction from "../tasks/flights.actions";

// import { apiInfo } from "../api_info";

const FlightsTable = ({ flights, getFlightsList }) => {
  useEffect(() => {
    getFlightsList();
  }, [getFlightsList]);

  let flightsList = [];
  if (flights.length !== 0) {
    console.log(flights.flights.body);
    const allFlights = flights.flights.body;
    flightsList = [...allFlights.departure];
    // flightsList = [...allFlights.arrival, ...allFlights.departure];
  }
  console.log(flightsList);

  return (
    <ul className="flights__list">
      {
        // flights.length !== 0 &&
        flightsList.map((flightObj, index) => {
          // const destination = ["handlerID.name"];
          // const icon = airline.en.logoSmallName;
          // const airline = "airline.en.name";
          // const flight = "codeShareData.codeShare";

          // console.log(flightObj.timeDepShedule);
          const {
            ID,
            term,
            status,
            timeDepShedule,
            timeDepFact,
            timeArrShedule,
            timeLandFact,
            airline,
            codeShareData,

            //
          } = flightObj;

          const timeShedule = status === "DP" ? timeDepShedule : timeArrShedule;
          const timeFact = status === "DP" ? timeDepFact : timeLandFact;
          const destination = flightObj["airportToID.city_en"];
          const flight = codeShareData[0].codeShare;
          const icon = codeShareData[0].airline.en.logoSmallName;
          const name = codeShareData[0].airline.en.name;
          // console.log(Object.values(codeShareData));
          // console.log(codeShareData[0].airline.en.logoSmallName);

          return (
            <TableRow
              key={ID}
              index={index}
              term={term}
              timeShedule={timeShedule}
              timeFact={timeFact}
              status={status}
              destination={destination}
              icon={icon}
              airline={airline}
              flight={flight}
              name={name}
              //
            />
          );
        })
      }
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
