import configuration from "../../config";
import endpoints from "../../config/endpoints";
import axios, { AxiosInstance } from "axios";
import uriParser from "../../utils/uri-parser.util";

export class OpenaqService {
  constructor(private readonly connector: AxiosInstance) {}

  async getCountries() {
    const response = await this.connector.get(endpoints.getCountries);
    const {
      data: { results = [] },
    } = response;
    return results;
  }

  async getParameters() {
    const response = await this.connector.get(endpoints.getParameters);
    const {
      data: { results = [] },
    } = response;
    return results;
  }

  async getCitiesByCountry(country: string) {
    const url: string = uriParser(endpoints.getCitiesByCountry, { country });
    const response = await this.connector.get(url);
    const {
      data: { results = [] },
    } = response;
    return results;
  }

  async getLocationsByCity(city: string) {
    const url: string = uriParser(endpoints.getLocationsByCity, { city });
    const response = await this.connector.get(url);
    const {
      data: { results = [] },
    } = response;
    return results;
  }

  async getMeasurements(
    country: string,
    city: string,
    location: string,
    parameter: string,
    from: string
  ) {
    const url: string = uriParser(endpoints.getMeasurements, {
      country,
      city,
      location,
      parameter,
      from,
    });
    const response = await this.connector.get(encodeURI(url));
    const {
      data: { results = [] },
    } = response;
    return results;
  }
}

export const openaqService = new OpenaqService(
  axios.create({
    baseURL: configuration.apiBasePath,
    timeout: 5000,
  })
);
