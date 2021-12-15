import { useState, useEffect } from "react";
import { getWeatherCountry } from "../helpers/getWeatherCountry";

export const useFetchWeatherCountry = (location) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(
    () => {
      getWeatherCountry(location).then((result) =>
        setState({
          loading: false,
          data: result,
        })
      );
    },
    [location] /*Arreglo de dependencias*/
  );
  return state; // { data: [], loading: true}
};
