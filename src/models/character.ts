export interface Character {
  gender: string;
  image: string;
  name: string;
  originName: string;
  species: string;
  status: string;
  location: Location;
  episode: Episode;
}

export interface Episode {
  name: string;
  date: string;
  episode_number: string;
  characters: number;
}

export interface Location {
  name: string;
  type: string;
  dimension: string;
  residents: number;
}
