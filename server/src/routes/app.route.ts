import { Router, Request, Response, NextFunction } from "express";
import AppController from "../controllers/app.controller";

const appRouter = Router();
appRouter.get(
  "/parameters",
  (request: Request, response: Response, next: NextFunction) =>
    AppController.getParameters(request, response, next)
);

appRouter.get(
  "/countries",
  (request: Request, response: Response, next: NextFunction) =>
    AppController.getCountries(request, response, next)
);

appRouter.get(
  "/countries/:country/cities",
  (request: Request, response: Response, next: NextFunction) =>
    AppController.getCitiesByCountry(request, response, next)
);

appRouter.get(
  "/cities/:city/locations",
  (request: Request, response: Response, next: NextFunction) =>
    AppController.getLocationsByCity(request, response, next)
);

appRouter.get(
  "/measurements/:dateFrom",
  (request: Request, response: Response, next: NextFunction) =>
    AppController.getMeasurements(request, response, next)
);

export default appRouter;
