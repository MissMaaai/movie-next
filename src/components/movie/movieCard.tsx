"use client";
import Image from "next/image";
import Link from "next/link";
import classes from "./movieCard.module.css";
import { Movie } from "@/types/movies";
import AddFavorite from "@/components/addFavorite";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
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
          <AddFavorite movie={movie} />
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
