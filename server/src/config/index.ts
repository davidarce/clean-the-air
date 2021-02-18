import { getEnvironment } from '../utils/environment.util';
import development from './env/development';
import production from './env/production';

interface IConfig {
  typeOrmConfig: any;
  apiBasePath: string;
}

interface IEnvironment {
  [key: string]: IConfig;
}

const configuration: IEnvironment = {
  development,
  production,
};

export default configuration[getEnvironment()];
