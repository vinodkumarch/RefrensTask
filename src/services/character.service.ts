import {Character} from '../models/character';
import {
  CharacterResponse,
  EpisodeResponse,
  LocationResponse,
} from '../models/character.response';
import {endPoints} from '../utils/endpointd';
import {transformedResponse} from './charcter.trasformer';

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
  return transformedResponse(userData);
};
