import {useContext} from 'react';
import {CharactersContext} from '../context';
import {CharacterDetails} from '../utils/constants';

export const useCharacterDetails = () => {
  const {characters} = useContext(CharactersContext);

  const dimensions = `${CharacterDetails.dimensions} - ${characters.location.dimension}`;
  const episodeDate = `${CharacterDetails.episodeDate} - ${characters.episode.date}`;
  const episodeName = `${CharacterDetails.episodeName} - ${characters.episode.name}`;
  const episodeNumber = `${CharacterDetails.episodeNumber} - ${characters.episode.episode_number}`;
  const gender = `${CharacterDetails.gender} - ${characters.gender}`;
  const locationName = `${CharacterDetails.locationName} - ${characters.location.name}`;
  const name = `${CharacterDetails.name} - ${characters.name}`;
  const numberOfCharacters = `${CharacterDetails.numberOfCharacters} - ${characters.episode.characters}`;
  const numberOfResidents = `${CharacterDetails.numberOfResidents} - ${characters.location.residents}`;
  const origin = `${CharacterDetails.origin} - ${characters.originName}`;
  const species = `${CharacterDetails.species} - ${characters.species}`;
  const status = `${CharacterDetails.status} - ${characters.status}`;

  return {
    dimensions,
    episodeDate,
    episodeName,
    episodeNumber,
    gender,
    locationName,
    name,
    numberOfCharacters,
    numberOfResidents,
    origin,
    species,
    status,
  };
};
