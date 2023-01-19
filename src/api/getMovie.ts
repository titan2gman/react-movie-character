import movieData from "./data/movies.json";
import stall from "./stall";

export interface Movie {
  id: string;
  title: string;
  director: string;
  released: string;
}

/**
 * Returns data about a movie, by its ID.
 *
 * @param id The ID of the movie to return data for
 */
export default async function getMovie(id: string): Promise<Movie> {
  await stall(1);

  for (let movie of movieData) {
    if (movie.id === id) {
      return movie;
    }
  }

  throw new Error(`Unable to find movie with ID '${id}'`);
}
