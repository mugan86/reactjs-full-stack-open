import axios from "axios";
import React, { useState, useEffect } from "react";
// https://www.weatherapi.com/my/
const Weather = ({ capital, location }) => {
  const [currentWeather, setCurrentWeather] = useState();
  const hooks = () => {
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_OWM_API_KEY}&q=${location[0]},${location[1]}&aqi=no`;
    axios.get(API_URL).then((response) => {
      const result = response.data;
      setCurrentWeather(result);
    });
  };
  useEffect(hooks, []);
  console.log(currentWeather);
  if (currentWeather) {
    return (
      <div>
        <h3>Weather in {capital}</h3>
        <p>Temperature: {currentWeather["current"].temp_c}</p>
        <img
          src={`https:${currentWeather["current"].condition.icon}`}
          alt={`Weather ${capital}`}
        />
        <p>
          Wind: {currentWeather["current"].wind_kph} km/h / Direction:{" "}
          {currentWeather["current"].wind_dir}
        </p>
      </div>
    );
  }
  return <div>Esperando datos...</div>;
};

export default Weather;
