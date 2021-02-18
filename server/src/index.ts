import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import {
  fourOFourMiddleware,
  errorHandlerMiddleware,
} from './core/middlewares';
import * as morgan from 'morgan';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import routes from './routes';
import config from './config';
import entities from './entity';

//Connects to the Database -> then starts the express
createConnection({
  ...config.typeOrmConfig,
  entities,
})
  .then(async () => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(
      morgan(':method :url :status :res[content-length] - :response-time ms', {
        skip: function (req, res) {
          return req.originalUrl.startsWith('/api/health');
        },
      })
    );

    //Set all routes from routes folder
    app.use('/api/', routes);
    app.use('/api/', fourOFourMiddleware());

    app.use(errorHandlerMiddleware());
   
    app.use(express.static(path.join(__dirname, '../dist')));

    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });

    const PORT = process.env.PORT || 8081;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
