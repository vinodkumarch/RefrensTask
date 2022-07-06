import {Character} from '../models/character';
import {CharacterProfile} from '../models/character.response';

export const transformedResponse = (
  serverModel: CharacterProfile[],
): Character[] => {
  const characters = serverModel.map(character => {
    return {
      gender: character.gender,
      image: character.image,
      name: character.name,
      species: character.species,
      status: character.status,
      originName: character.origin.name,
      location: {
        name: character.location.name,
        type: character.location.type,
        dimension: character.location.dimension,
        residents: character.location.residents.length,
      },
      episode: {
        name: character.episode.name,
        date: character.episode.air_date,
        episode_number: character.episode.episode,
        characters: character.episode.characters.length,
      },
    };
  });
  return characters;
};
