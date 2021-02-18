import { useQuery } from "react-query";
import Location from "../models/location.model";
import axios from "axios";
import endpoints from "../config/endpoints";
import uriParser from "../utils/uri-parser.util";

export const useLocations= (city: string | null) => {
  return useQuery<Location[], any>(
    ["locations", city],
    () =>
      axios
        .get(uriParser(endpoints.getLocationsByCity, { city }))
        .then((res) => res.data),
    {
      enabled: !!city,
    }
  );
};
