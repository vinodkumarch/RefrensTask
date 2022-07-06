export interface CharacterResponse {
  info: CharacterInfo;
  results: CharacterProfile[];
}

export interface CharacterInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface CharacterProfile {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: LocationResponse;
  image: string;
  episode: EpisodeResponse;
  url: string;
  created: string;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface EpisodeResponse {
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export interface LocationResponse {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
