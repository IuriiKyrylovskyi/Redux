import { fetchFlightsList } from "../gateway";

export const FLIGHTS = "FLIGHTS/FLIGHTS";
// export const ARRIVALS = "FLIGHTS/ARRIVALS";
// export const DEPARTURES = "FLIGHTS/DEPARTURES";
export const SEARCH = "FLIGHTS/SEARCH";

export const flightsListRecieved = (flights) => {
  return {
    type: FLIGHTS,
    payload: {
      flights,
    },
  };
};

export const getSearchedFlight = (text) => {
  return {
    type: SEARCH,
    payload: {
      text,
    },
  };
};

export const getFlightsList = () => {
  return function (dispatch) {
    fetchFlightsList().then((flights) => {
      localStorage.setItem("flights", JSON.stringify({ flights }));
      dispatch(flightsListRecieved(flights));
    });
  };
};

export const storeSearchedFlight = (flight) => {
  return function (dispatch) {
    localStorage.setItem("flight", JSON.stringify(flight));
    dispatch(getSearchedFlight(flight));
  };
};

// export const getArrivalsList = (arrivals) => {
//   return function (dispatch) {
//     fetchFlightsList().then((flights) => dispatch(flightsListRecieved(flights)[arrivals]));
//   };
// };

// export const getDeparturesList = (departures) => {
//   return function (dispatch) {
//     fetchFlightsList().then((flights) => dispatch(flightsListRecieved(flights)[departures]));
//   };
// };
