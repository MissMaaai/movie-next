import { getMovie } from "@/lib/movies";
import { Movie } from "@/types/movies";
import MovieCard from "@/components/movie/movieCard";
import classes from "@/components/movie/movieCard.module.css";

export default async function Popular() {
  const data = await getMovie("popular"); //Fetcher popular movies from the API

  return (
    <div className="p-6 text-white">
      <h1 className="text-center text-4xl font-bold mb-4">Popular Movies</h1>

      <div className={classes.cardContainer}>
        {data.results.map( // Map funktionen itererer over hver film i data.results og returnerer en MovieCard komponent for hver film.
          (
            movie: Movie 
          ) => (
            <MovieCard key={movie.id} movie={movie} /> // hver film får et unikt key baseret på dens id
          )
        )}
      </div>
    </div>
  );
}
