import Image from "next/image";
import { getMovie } from "@/lib/movies";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata(props: MoviePageProps) {
  const params = await props.params;
  const movie = await getMovie(params.id);
  if (!movie) {
    notFound();
  }
  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default async function MovieDetailsPage(props: MoviePageProps) {
  const params = await props.params;
  const movie = await getMovie(params.id);
  if (!movie) {
    notFound();
  }

  return (
    <div className={classes.container}>
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
          <p>⭐ Rating: {movie.vote_average}</p>
          <p className={classes.release}>🎬 Released: {movie.release_date}</p>
        </div>
      </header>
      <section className={classes.overviewSection}>
        <h2>Description</h2>
        <p className={classes.overview}>{movie.overview}</p>
      </section>
    </div>
  );
}
