/* import { getMoviesByCategory } from "@/lib/tmdb";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movies";

type Props = {
  category: string;
  title: string;
};

export default async function MovieCategoryPage({ category, title }: Props) {
  const data = await getMoviesByCategory(category);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-8">{title}</h1>
      <div className="movie-grid">
        {data.results.map((movie: Movie) => (
          <div key={movie.id} className="movie-card">
            <Link href={`/movies/${movie.id}`} className="movie-link">
              <Image
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
              />
              <p className="movie-title">{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 */

