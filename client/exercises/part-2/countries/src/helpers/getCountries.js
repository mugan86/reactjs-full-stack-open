import axios from "axios";
import { API_URL_COUNTRIES } from "../constants/api";
export const getCountries = async () => {
  const API_REQUEST = `${API_URL_COUNTRIES}`;
  return axios.get(API_REQUEST).then((response) => response.data);
};
