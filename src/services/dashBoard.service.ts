import {DashBoard} from '../models/dashBoard';
import {DashBoardResponse} from '../models/dashBoard.response';
import {CHARACTERS} from '../utils';
import {fetchData} from './serviceConfig';

export const getCharactersFromApi = async (): Promise<DashBoard[]> => {
  // await new Promise(resolve => setTimeout(resolve, 10000));
  const fetchCharacters: DashBoardResponse = await fetchData(
    CHARACTERS.endpoint,
  );
  const transformedResponse: DashBoard[] = fetchCharacters.results.map(
    serverModel => {
      return {
        gender: serverModel.gender,
        image: serverModel.image,
        name: serverModel.name,
        species: serverModel.species,
        status: serverModel.status,
      };
    },
  );
  return transformedResponse;
};
