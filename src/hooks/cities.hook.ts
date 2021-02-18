import { useQuery } from "react-query";
import City from "../models/city.model";
import axios from "axios";
import endpoints from "../config/endpoints";
import uriParser from "../utils/uri-parser.util";

export const useCities = (country: string | null) => {
  return useQuery<City[], any>(
    ["cities", country],
    () =>
      axios
        .get(uriParser(endpoints.getCitiesByCountry, { country }))
        .then((res) => res.data),
    {
      enabled: !!country,
    }
  );
};
