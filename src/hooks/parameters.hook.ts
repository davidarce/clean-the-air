import { useQuery } from "react-query";
import Parameter from "../models/parameter.model";
import axios from "axios";
import endpoints from "../config/endpoints";

export const useParameters = () => {
  return useQuery<Parameter[], any>("parameters", () =>
    axios.get(endpoints.getParameters).then((res) => res.data)
  );
};
