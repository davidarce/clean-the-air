import Coordinate from "./coordinate.model";

interface DateMeasurement {
    utc: string;
    local: string;
}

export default interface Measurement {
    locationId: number;
    location: string;
    parameter: string;
    value: number;
    date: DateMeasurement;
    unit: string;
    coordinates: Coordinate;
    country: string;
    city: string;
    entity: string;
  }
  