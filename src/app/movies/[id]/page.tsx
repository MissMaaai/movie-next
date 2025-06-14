import Image from "next/image";
import { getMovie } from "@/lib/movies";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

interface MoviePageProps {
  //props er URL-parameterne, der bruges til at hente filmdata.
  params: Promise<{
    id: string;
  }>;
}
//Dette er en interface, der definerer de props, der skal bruges i MovieDetailsPage komponenten.
// params er en Promise, der indeholder et objekt med en id-egenskab. Hvor id er en streng, der repræsenterer filmens ID.
// Promise bruges til at håndtere asynkrone operationer, hvilket betyder, at MovieDetailsPage kan vente på, at dataene er tilgængelige, før de vises.

//Genereratemetadata tager moviePageProps som argument - den generer info om siden før den bliver vist.
//generateMetadata bruger Metadata-objektet der indeholder info om filmen og returnerer det objekt med indholdet.
//Bruger getMovie-funktionen til at hente filmdata baseret på det id, der er givet i params.
// GenerateMetadata er vigtig for dynamiske sider, da den hele tiden ændrer sig baseret på de data, der hentes fra API'et.
export async function generateMetadata(props: MoviePageProps) {
  const params = await props.params; // henter URL-parameterne ud fra id ( hvilken film der skal vises)
  const movie = await getMovie(params.id); // henter data om filmen API baseret på id.
  if (!movie) {
    notFound();
  }
  return {
    movie_id: movie.id,
    title: movie.title,
    description: movie.overview,
    posterPath: movie.poster_path,
    voteAverage: movie.vote_average,
    overview: movie.overview,
    releaseDate: movie.release_date,
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