import {DashBoard} from '../models/dashBoard';

export type CharactersContextState = {
  characters: DashBoard;
  setCharacters: (name: DashBoard) => void;
};
