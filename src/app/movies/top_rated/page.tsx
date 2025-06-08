import { getMoviesByCategory } from "@/lib/tmdb";
import { Movie } from "@/types/movies";
import Image from "next/image";
import Link from "next/link";

export default async function TopRated() {
  const data = await getMoviesByCategory("top_rated");

  return (
    <div>
      <h1>Top Rated</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((movie: Movie) => (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
              />
              <p>{movie.title}</p>
              <p>Rating: {movie.vote_average}</p>
              <p>Release Date: {movie.release_date}</p>
              <p>{movie.overview}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
