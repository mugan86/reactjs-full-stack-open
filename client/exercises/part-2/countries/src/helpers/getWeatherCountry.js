import axios from "axios";
import { API_ENDPOINTS, API_URL_WEATHER } from "../constants/api";
export const getWeatherCountry = async (location) => {
  const API_REQUEST = `${API_URL_WEATHER}${API_ENDPOINTS.CURRENT}.json?key=${process.env.REACT_APP_OWM_API_KEY}&q=${location[0]},${location[1]}&aqi=no`;
  return axios.get(API_REQUEST).then((response) => response.data);
};
