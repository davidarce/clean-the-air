import { Router } from 'express';
import appRoute from './app.route';
import healthcheckRoute from './healthcheck.route';

const routes = Router();

routes.use('/health', healthcheckRoute);
routes.use('/', appRoute);

export default routes;
