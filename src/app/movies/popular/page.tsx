/* import { getMoviesByCategory } from "@/lib/tmdb";
import { Movie } from "@/types/movies";
import Link from "next/link";
import MovieCard from "@/components/movie/movieCard";

export default async function Popular() {
  const data = await getMoviesByCategory("popular");

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((movie: Movie) => (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 */

import { getMoviesByCategory } from "@/lib/tmdb";
import { Movie } from "@/types/movies";
import MovieCard from "@/components/movie/movieCard";
import classes from "@/components/movie/movieCard.module.css";

export default async function Popular() {
  const data = await getMoviesByCategory("popular");

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>

      <div className={classes.controls}>
        {data.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
