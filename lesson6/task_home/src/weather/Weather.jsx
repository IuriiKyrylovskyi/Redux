import React from "react";
import { connect } from "react-redux";
import * as weatherActions from "./weather.actions";

const Weather = ({ cities, getWeatherData }) => {
  console.log("cities", cities);
  if (cities.length === 0) {
    getWeatherData(cities);
  }

  return (
    cities.length > 0 && (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {cities.map((city) => {
            return (
              <li key={city.id} className="city">
                <span className="city__name">{city.name}</span>
                <span className="city__temperature">{city.temperature} F</span>
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
};

const mapState = (state) => {
  return {
    cities: state.weatherData,
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
