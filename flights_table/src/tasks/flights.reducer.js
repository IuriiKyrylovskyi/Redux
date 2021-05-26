import { FLIGHTS, SEARCH } from "./flights.actions.js";

const initState = {
  flights: [], // fetchedFlights,
  flight: "",
};

const flightsReducer = (state = initState, action) => {
  switch (action.type) {
    case FLIGHTS: {
      return {
        ...state,
        flights: action.payload,
      };
    }
     case SEARCH: {
      return {
        ...state,
        flight: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default flightsReducer;
