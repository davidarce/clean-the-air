import Coordinate from "./coordinate.model";

interface Source {
  id: number;
  url: string;
  name: string;
}

export default interface Location {
    id: number;
    city: string;
    name: string;
    entity: string;
    country: string;
    sources: Source[];
    coordinates: Coordinate;
  }
  