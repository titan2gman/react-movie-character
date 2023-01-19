import characterData from "./data/characters.json";
import stall from "./stall";

export interface ICharacter {
  id: string;
  name: string;
  born: string;
  hair_colour: string;
  height: string;
  movies: string[];
}

/**
 * Returns data about characters in the Star Wars films.
 */
export default async function getCharacters(): Promise<ICharacter[]> {
  await stall();

  return characterData;
}
