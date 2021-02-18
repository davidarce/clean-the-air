import config from ".";

const apiBasePath: string = config.apiBasePath;

const endpoints = {
  getCountries: `${apiBasePath}countries`,
  getParameters: `${apiBasePath}parameters?sort=asc&order_by=id`,
  getCitiesByCountry: `${apiBasePath}cities?limit=1000&sort=asc&order_by=city&country=:country`,
  getLocationsByCity: `${apiBasePath}locations?sort=desc&city=:city`,
  getMeasurements: `${apiBasePath}measurements?country=:country&city=:city&location=:location&parameter=:parameter&date_from=:from&sort=asc`
};

export default endpoints;
