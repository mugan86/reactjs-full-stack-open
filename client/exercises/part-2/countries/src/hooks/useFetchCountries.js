import { useState, useEffect } from "react";
import { getCountries } from "../helpers/getCountries";

export const useFetchCountries = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(
    () => {
      getCountries().then((result) =>
        setState({
          loading: false,
          data: result,
        })
      );
    },
    [] /*Arreglo de dependencias*/
  );
  return state; // { data: [], loading: true}
};
