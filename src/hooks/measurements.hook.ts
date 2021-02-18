import { useQuery } from "react-query";
import Measurement from "../models/measurement.model";
import axios from "axios";
import endpoints from "../config/endpoints";
import uriParser from "../utils/uri-parser.util";
import { formatDate } from "../utils/date.util";

interface Filters {
  country: string | null;
  city: string | null;
  location: string | null;
  parameter: string | null;
}
export const useMeasurements = ({
  country,
  city,
  location,
  parameter,
}: Filters) => {
  return useQuery<Measurement[], any>(
    ["measurements", country, city, location, parameter],
    () =>
      axios
        .get(
          uriParser(endpoints.getMeasurements, {
            country,
            city,
            location,
            parameter,
            dateFrom: formatDate(new Date())
          })
        )
        .then((res) => res.data),
    {
      enabled: false,
    }
  );
};
