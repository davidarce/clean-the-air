import { getEnvironment } from "../utils/environment.util";
import development from "./env/development";
import production from "./env/production";

interface IConfig {
  [key: string]: any;
}

const configuration: IConfig = {
  development,
  production,
};

export default configuration[getEnvironment()];
