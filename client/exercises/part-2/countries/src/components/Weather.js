import React from "react";
import { useFetchWeatherCountry } from "../hooks/useFetchWeatherCountry";
// https://www.weatherapi.com/my/
const Weather = ({ capital, location }) => {
  const { data: weather, loading } = useFetchWeatherCountry(location);
  return loading ? (
    <div>Esperando datos...</div>
  ) : (
    <div>
      <h3>Weather in {capital}</h3>
      <p>Temperature: {weather["current"].temp_c}</p>
      <img
        src={`https:${weather["current"].condition.icon}`}
        alt={`Weather ${capital}`}
      />
      <p>
        Wind: {weather["current"].wind_kph} km/h / Direction:{" "}
        {weather["current"].wind_dir}
      </p>
    </div>
  );
};

export default Weather;
