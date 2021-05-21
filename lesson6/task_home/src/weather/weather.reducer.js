import { CITIES_DATA_RECIEVED } from "./weather.actions";

const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case CITIES_DATA_RECIEVED: {
      return {
        ...state,
        citiesData: action.payload.citiesData,
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;
