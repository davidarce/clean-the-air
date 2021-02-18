import React, { FunctionComponent, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import { useCountries } from "../../hooks/countries.hook";
import { useCities } from "../../hooks/cities.hook";
import { useLocations } from "../../hooks/locations.hook";
import { useParameters } from "../../hooks/parameters.hook";
import { PrimaryButton } from "../../components/commons/button";
import { useMeasurements } from "../../hooks/measurements.hook";
import { SeriesChart } from "../../components/chart";
import { formatDate } from "../../utils/date.util";

interface FormData {
  country: string | null;
  city: string | null;
  location: string | null;
  parameter: string | null;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  header: {
    backgroundColor: blueGrey[500],
    color: "white",
  },
  content: {
    display: "flex",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    width: "100%",
    padding: "10px 5px 10px 5px",
  },
}));

const getInitstate = () => {
  return {
    country: "",
    city: "",
    location: "",
    parameter: "",
  };
};

const Measurements: FunctionComponent = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState<FormData>(getInitstate());
  const { data: countries = [] } = useCountries();
  const { data: cities = [] } = useCities(formData.country);
  const { data: locations = [] } = useLocations(formData.city);
  const { data: parameters = [] } = useParameters();
  const { error, status, data: measurements = [], refetch } = useMeasurements({
    ...formData,
  });

  const handleChange = (name: string) => ({
    target: { value },
  }: React.ChangeEvent<{ value: unknown }>) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box pt={2}>
      <Card className={classes.root}>
        <CardHeader
          titleTypographyProps={{ variant: "h6" }}
          title="Filters"
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="country-select-label">
              Country
            </InputLabel>
            <Select
              labelId="country-select-label"
              id="select-outlined"
              displayEmpty
              value={formData.country}
              onChange={handleChange("country")}
            >
              <MenuItem value="" disabled>
                Select a country
              </MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="city-select-label">
              City
            </InputLabel>
            <Select
              labelId="city-select-label"
              id="select-outlined"
              displayEmpty
              value={formData.city}
              onChange={handleChange("city")}
            >
              <MenuItem value="" disabled>
                Select a city
              </MenuItem>
              {cities.map(({ city }) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="location-select-label">
              Location
            </InputLabel>
            <Select
              labelId="location-select-label"
              id="select-outlined"
              displayEmpty
              value={formData.location}
              onChange={handleChange("location")}
            >
              <MenuItem value="" disabled>
                Select a location
              </MenuItem>
              {locations.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="parameter-select-label">
              Parameter
            </InputLabel>
            <Select
              labelId="parameter-select-label"
              id="select-outlined"
              displayEmpty
              value={formData.parameter}
              onChange={handleChange("parameter")}
            >
              <MenuItem value="" disabled>
                Select a parameter
              </MenuItem>
              {parameters.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
        <CardActions className={classes.actions}>
          <PrimaryButton size="medium" onClick={() => refetch()}>
            Search
          </PrimaryButton>
        </CardActions>
      </Card>
      <Box pt={2}>
        <SeriesChart
          data={measurements}
          status={status}
          onError={error}
          title={`${formData.city}, ${formData.country} - ${formData.location} - ${formatDate(new Date())}`}
        />
      </Box>
    </Box>
  );
};

export default Measurements;
