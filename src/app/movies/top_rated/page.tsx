import { getMovie } from "@/lib/movies";
import { Movie } from "@/types/movies";
import MovieCard from "@/components/movie/movieCard";
import classes from "@/components/movie/movieCard.module.css";

export default async function TopRated() {
  const data = await getMovie("top_rated");
  return (
    <div className="p-6 text-white">
      <h1 className="text-center text-4xl font-bold mb-4">Top Rated</h1>

      <div className={classes.cardContainer}>
        {data.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
