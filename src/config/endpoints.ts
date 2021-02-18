import config from ".";

const apiBasePath: string = config.apiBasePath;
const endpoints = {
  getParameters: `${apiBasePath}parameters`,
  getCountries: `${apiBasePath}countries`,
  getCitiesByCountry: `${apiBasePath}countries/:country/cities`,
  getLocationsByCity: `${apiBasePath}cities/:city/locations`,
  getMeasurements: `${apiBasePath}measurements/:dateFrom?country=:country&city=:city&location=:location&parameter=:parameter`
};

export default endpoints;
