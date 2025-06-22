export type RMCharacter = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export const fetchRickAndMortyCharacters = async (): Promise<RMCharacter[]> => {
  const graphqlEndpoint = 'https://rickandmortyapi.com/graphql';
  const query = `
    query {
      characters(page: 1, filter: {}) {
        results {
          id
          name
          status
          species
          image
        }
      }
    }
  `;

  const res = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

  const json = await res.json();
  const chars = json.data.characters.results as RMCharacter[] | null;

  return chars ? chars : [];
};
