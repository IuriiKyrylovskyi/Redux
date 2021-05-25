import { FLIGHTS, ARRIVALS, DEPARTURES, SEARCH } from "./flights.actions.js";
import fetchedFlights from "./";

const initState = {
  flights: [],// fetchedFlights,
  flight: "",
};

const fligtsReducer = (state = initState, action) => {
  switch (applicationCache.type) {
    case FLIGHTS: {
      return {
        ...state,
        flights: action.payload.arrivals,
      };
    }
    case ARRIVALS: {
      return {
        ...state,
        flights: action.payload.arrivals,
      };
    }
    case DEPARTURES: {
      return {
        ...state,
        flights: action.type.departures,
      };
    }
    case SEARCH: {
      return {
        flights: action.payload.searchedFlight,
        flight: action.payload.flight,
      };
    }
    default: {
      return state;
    }
  }
};

export default fligtsReducer;
