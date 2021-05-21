import { CITIES_DATA_RECIEVED } from "./weather.actions";

const initState = {
  weatherData: [],
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case CITIES_DATA_RECIEVED: {
      return {
        ...state,
        weatherData: state.weatherData.concat(action.payload.citiesData),
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;
