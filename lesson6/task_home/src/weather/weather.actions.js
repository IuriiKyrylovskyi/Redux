import { getCityData } from "../gateway";

export const CITIES_DATA_RECIEVED = "WEATHER/CITIES_DATA_RECIEVED";
export const GET_WEATHER_DATA = "WEATHER/GET_WEATHER_DATA";

export const citiesDataRecieved = (citiesData) => {
  return {
    type: CITIES_DATA_RECIEVED,
    payload: {
      citiesData,
    },
  };
};

export const getWeatherData = (weatherData) => {
  return function (dispatch) {
    getCityData(weatherData).then((data) => dispatch(citiesDataRecieved(data)));
  };
};
