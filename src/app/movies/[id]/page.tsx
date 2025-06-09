import Image from "next/image";
import { getMovie } from "@/lib/movies";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

interface MoviePageProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: MoviePageProps) {
  const movie = await getMovie(params.id);
  if (!movie) {
    notFound();
  }
  return {
    title: movie.title,
    description: movie.overview,
  };
}
export default async function MovieDetailsPage({ params }: MoviePageProps) {
  const movie = await getMovie(params.id);
  if (!movie) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{movie.title}</h1>
          <p className={classes.release}>Released: {movie.release_date}</p>
          <p className={classes.overview}>{movie.overview}</p>
        </div>
      </header>
      <main>
        <p className={classes.rating}>Rating: {movie.vote_average}/10</p>
      </main>
    </>
  );
}
