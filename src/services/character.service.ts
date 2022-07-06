import {Character} from '../models/character';
import {
  CharacterResponse,
  EpisodeResponse,
  LocationResponse,
} from '../models/character.response';
import {endPoints} from '../utils/endpointd';

import {fetchData} from './serviceConfig';

export const getCharactersFromApi = async (): Promise<Character[]> => {
  const fetchCharacters: CharacterResponse = await fetchData(
    endPoints.CHARACTERS,
  );
  const fetchLocation: LocationResponse[] = await fetchData(
    endPoints.LOCATION,
  ).then(locations => {
    return locations.results;
  });
  const fetchEpisode: EpisodeResponse[] = await fetchData(
    endPoints.EPISODE,
  ).then(episodes => {
    return episodes.results;
  });

  const userData = fetchCharacters.results.map((character, index) => ({
    ...character,
    ...{
      location: {...fetchLocation[index]},
    },
    ...{
      episode: {
        ...fetchEpisode[index],
      },
    },
  }));

  const transformedResponse: Character[] = userData.map(serverModel => {
    return {
      gender: serverModel.gender,
      image: serverModel.image,
      name: serverModel.name,
      species: serverModel.species,
      status: serverModel.status,
      originName: serverModel.origin.name,
      location: {
        name: serverModel.location.name,
        type: serverModel.location.type,
        dimension: serverModel.location.dimension,
        residents: serverModel.location.residents.length,
      },
      episode: {
        name: serverModel.episode.name,
        date: serverModel.episode.air_date,
        episode_number: serverModel.episode.episode,
        characters: serverModel.episode.characters.length,
      },
    };
  });
  return transformedResponse;
};