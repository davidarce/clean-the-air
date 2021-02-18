import { useQuery } from "react-query";
import Country from "../models/country.model";
import axios from "axios";
import endpoints from "../config/endpoints";

export const useCountries = () => {
  return useQuery<Country[], any>("countries", () =>
    axios.get(endpoints.getCountries).then((res) => res.data)
  );
};
