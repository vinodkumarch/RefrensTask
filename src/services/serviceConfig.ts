export const baseUrl = {
  DEV: 'https://rickandmortyapi.com/api/',
};

export const fetchData = async (endpoint: string): Promise<any> => {
  const url = `${baseUrl.DEV}${endpoint}`;
  const fetchResult = await fetch(url);
  return fetchResult.json();
};
