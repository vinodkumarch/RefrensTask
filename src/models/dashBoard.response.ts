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
  location: UserInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface UserInfo {
  name: string;
  url: string;
}
