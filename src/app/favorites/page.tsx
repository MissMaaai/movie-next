import Image from "next/image";
import classes from "./page.module.css";
import DeleteFavorite from "@/components/deleteFavorite";

interface FavoriteMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default async function FavoritesPage() {
  const response = await fetch("http://localhost:3000/api/favoriteMovies", {
    cache: "no-store", // denne sikrer at vi altid henter de nyeste data fordi denne side ændrer sig dynamisk
  });

  if (!response.ok) {
    return <p>Movie not found</p>;
  }

  const favorites: FavoriteMovie[] = await response.json();

  if (favorites.length === 0) {
    return <h1>No favorites yet</h1>;
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
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
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
              <DeleteFavorite movieId={movie.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
