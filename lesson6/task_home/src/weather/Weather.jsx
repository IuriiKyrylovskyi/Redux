import React from "react";

const Weather = ({ cities }) => {
  return (
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
  );
};

export default Weather;
