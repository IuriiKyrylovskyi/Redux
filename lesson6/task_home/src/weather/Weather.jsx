import React from "react";
import { connect } from "react-redux";
// import { getWeatherData } from "./weather.actions";

const Weather = ({ cities }) => {
  // const [cities, setCities] = useState([]);

  // useEffect(() => {
  //   setCities(getWeatherData(citiesData));
  // }, []);
  
  if (cities.length === 0) {
    return null;
  }
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

const mapState = (state) => {
  return {
    citiesData: state.citiesData,
  };
};
export default connect(mapState)(Weather);
