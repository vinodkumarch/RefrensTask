import React, {createContext, useState} from 'react';
import {DashBoard} from '../models/dashBoard';
import {CharactersContextState} from './types';

const contextDefaultValues: CharactersContextState = {
  characters: {
    gender: '',
    image: '',
    name: '',
    originName: '',
    species: '',
    status: '',
    location: {
      name: '',
      type: '',
      dimension: '',
      residents: 0,
    },
    episode: {
      name: '',
      date: '',
      episode_number: '',
      characters: 0,
    },
  },
  setCharacters: () => {},
};

type Props = {
  children: React.ReactNode;
};

export const CharactersContext =
  createContext<CharactersContextState>(contextDefaultValues);

const CharactersProvider = ({children}: Props) => {
  const [characters, setcharacters] = useState<DashBoard>(
    contextDefaultValues.characters,
  );

  const setCharacters = (character: DashBoard) => setcharacters({...character});

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
      }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
