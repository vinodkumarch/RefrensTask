export interface DashBoardResponse {
  info: DashBoardInfo;
  results: UserProfile[];
}

export interface DashBoardInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface UserProfile {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: UserInfo;
  location: LocationResponse;
  image: string;
  episode: EpisodeResponse;
  url: string;
  created: string;
}

export interface UserInfo {
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
