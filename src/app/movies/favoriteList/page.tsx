/* import db from "@/lib/db";
import { getMovie } from "@/lib/movies";
import { Movie } from "@/types/movies";
import MovieCard from "@/components/movie/movieCard";
import classes from "@/components/movie/movieCard.module.css";

export default async function FavoriteMovies() {
  // Hent alle favoritter fra SQLite
  const rows = db.prepare("SELECT movieId FROM favorites").all() as {
    movieId: string;
  }[];

  // Fetch detaljer for hver favorit-film fra API
  const favoriteMovies: Movie[] = await Promise.all(
    rows.map((row) => getMovie(row.movieId))
  );

  return (
    <div className="p-6 text-white">
      <h1 className="text-center text-4xl font-bold mb-4">Favorite Movies</h1>

      <div className={classes.cardContainer}>
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isInitiallyFavorite={true} />
        ))}
      </div>
    </div>
  );
}
 */

// app/movies/favorites/page.tsx
import { getFavoriteMovieIds } from "@/lib/favorites";
import { getMovie } from "@/lib/movies";
import MovieCard from "@/components/movie/movieCard";

export default async function FavoriteMoviesPage() {
  const ids = getFavoriteMovieIds();
  const movies = await Promise.all(ids.map((id) => getMovie(id)));

  return (
    <section>
      <h1>Dine favoritter</h1>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
