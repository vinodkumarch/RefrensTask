import {Character} from '../models/character';

export type CharactersContextState = {
  characters: Character;
  setCharacters: (name: Character) => void;
};
