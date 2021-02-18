import { NextFunction, Request, Response } from "express";
import { OpenaqService, openaqService } from "../services/openaq";

class AppController {
  constructor(private readonly service: OpenaqService) {}
  async getCountries(request: Request, response: Response, next: NextFunction) {
    try {
      const countries = await this.service.getCountries();
      response.send(countries);
    } catch (error) {
      next(error);
    }
  }

  async getParameters(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const parameters = await this.service.getParameters();
      response.send(parameters);
    } catch (error) {
      next(error);
    }
  }

  async getCitiesByCountry(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const country: string = request.params.country;
      const cities = await this.service.getCitiesByCountry(country);
      response.send(cities);
    } catch (error) {
      next(error);
    }
  }

  async getLocationsByCity(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const city: string = request.params.city;
      const locations = await this.service.getLocationsByCity(city);
      response.send(locations);
    } catch (error) {
      next(error);
    }
  }

  async getMeasurements(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const dateFrom: string = request.params.dateFrom;
      const country = request.query.country as string;
      const city = request.query.city as string;
      const location = request.query.location as string;
      const parameter = request.query.parameter as string;

      const measurements = await this.service.getMeasurements(
        country,
        city,
        location,
        parameter,
        dateFrom
      );
      response.send(measurements);
    } catch (error) {
      next(error);
    }
  }
}

export default new AppController(openaqService);
