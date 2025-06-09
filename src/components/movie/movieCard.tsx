"use client";
import { Movie } from "@/types/movies";
import Image from "next/image";
import Link from "next/link";
import classes from "./movieCard.module.css";

interface MovieCardProps {
  //interface for the props
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
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
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
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
