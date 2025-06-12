import Image from "next/image";
import classes from "./page.module.css";

interface FavoriteMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default async function FavoritesPage() {
  const res = await fetch("http://localhost:3000/api/favoriteMovies", {
    cache: "no-store", // Ensures fresh data
  });

  if (!res.ok) {
    return <p>Kunne ikke hente favoritfilm 😞</p>;
  }

  const favorites: FavoriteMovie[] = await res.json();

  if (favorites.length === 0) {
    return <p>Du har ingen favoritter endnu.</p>;
  }

  return (
    <div>
      <h1>Mine Favoritfilm</h1>
      <ul className={classes.cardContainer}>
        {favorites.map((movie) => (
          <li key={movie.id} className={classes.card}>
            <div className={classes.image}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
            </div>
            <div className={classes.headerText}>
              <h2>{movie.title}</h2>
              <p>⭐ {movie.vote_average}</p>
              <p>🎬 {movie.release_date}</p>
            </div>
            <div className={classes.content}>
              <p className={classes.summary}>
                {movie.overview.length > 125
                  ? movie.overview.substring(0, 125) + "..."
                  : movie.overview}
              </p>
              <div className={classes.actions}>
                <span>Release: {movie.release_date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
