import { searchMovies } from "@/lib/search";
import MovieCard from "@/components/movie/movieCard";
import { Movie } from "@/types/movies";
import classes from "@/components/movie/movieCard.module.css";

interface SearchPageProps {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""; // Hent query fra URL

  if (!query) {
    return <div>You did not enter search term </div>; // Ingen søgning givet
  }

  let data;
  try {
    data = await searchMovies(query); // Hent film med søgeord
  } catch {
    return <div>Failed to load movies.</div>; // Fejl ved hentning
  }

  const filtered = (data.results as Movie[]).filter(
    (movie) => movie.poster_path
  );

  return (
    <div className="p-6 text-white">
      <h1 className="text-center text-4xl font-bold mb-4">
        Result of searched Movies
      </h1>
      <div className={classes.cardContainer}>
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
