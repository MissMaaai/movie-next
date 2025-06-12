/* "use client";

import { useState } from "react";
import { Movie } from "@/types/movies";
import Image from "next/image";
import Link from "next/link";
import classes from "./movieCard.module.css";
import { Heart } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Forhindrer navigation når man klikker på hjertet
    setIsFavorite((prev) => !prev);
  };

  return (
    <article className={classes.card}>
      <Link href={`/movies/${movie.id}`} className={classes.link}>
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
          <p>⭐ Rating: {movie.vote_average}</p>
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

          <button className={classes.favoriteButton} onClick={toggleFavorite}>
            {isFavorite ? <Heart color="red" fill="red" /> : <Heart />}
          </button>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
 */

"use client";

import { useState } from "react";
import { Movie } from "@/types/movies";
import Image from "next/image";
import Link from "next/link";
import classes from "./movieCard.module.css";
import { Heart } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Håndter klik på favoritknappen
  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); // Forhindrer navigation, når man klikker på hjertet

    if (!isFavorite) {
      try {
        // Send POST-anmodning for at tilføje filmen til favorit
        const res = await fetch("/api/favoriteMovies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movie),
        });

        if (res.ok) {
          setIsFavorite(true); // Hvis filmen blev tilføjet som favorit, opdaterer UI'et
        } else {
          console.error("Could not add movie to favorites");
        }
      } catch (error) {
        console.error("Error adding favorite movie:", error);
      }
    } else {
      console.log("The movie is already a favorite.");
    }
  };

  return (
    <article className={classes.card}>
      <Link href={`/movies/${movie.id}`} className={classes.link}>
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
          <p>⭐ Rating: {movie.vote_average}</p>
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

          <button className={classes.favoriteButton} onClick={toggleFavorite}>
            {isFavorite ? <Heart color="red" fill="red" /> : <Heart />}
          </button>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
