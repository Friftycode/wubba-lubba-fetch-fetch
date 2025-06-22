export type RMCharacter = {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  location: { name: string };
  origin: { name: string };
  status: string;
};

type APICharacter = {
  id: number;
  image: string;
  name: string;
  species: string;
  gender: string;
  location: { name: string };
  origin: { name: string };
  status: string;
};

export const fetchRickAndMortyCharacters = async (): Promise<RMCharacter[]> => {
  let char: RMCharacter[] = [];
  let nextUrl: string | null = 'https://rickandmortyapi.com/api/character';

  while (nextUrl) {
    const res = await fetch(nextUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const json = await res.json();
    char = char.concat(
      (json.results as APICharacter[]).map((c) => ({
        id: String(c.id),
        image: c.image,
        name: c.name,
        species: c.species,
        gender: c.gender,
        location: { name: c.location.name },
        origin: { name: c.origin.name },
        status: c.status,
      }))
    );
    nextUrl = json.info.next;
  }

  return char;
};

export type RMEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};

export const fetchRickAndMortyEpisodes = async (): Promise<RMEpisode[]> => {
  let episodes: RMEpisode[] = [];
  let nextUrl: string | null = 'https://rickandmortyapi.com/api/episode';

  while (nextUrl) {
    const res = await fetch(nextUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const json = await res.json();
    episodes = episodes.concat(json.results);
    nextUrl = json.info.next;
  }

  return episodes;
};

export type RMLocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export const fetchRickAndMortyLocations = async (): Promise<RMLocation[]> => {
  let locations: RMLocation[] = [];
  let nextUrl: string | null = 'https://rickandmortyapi.com/api/location';

  while (nextUrl) {
    const res = await fetch(nextUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const json = await res.json();
    locations = locations.concat(json.results);
    nextUrl = json.info.next;
  }

  return locations;
};
