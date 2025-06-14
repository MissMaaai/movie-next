"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { searchMovies } from "@/lib/searchMovies";
import MovieCard from "@/components/movie/movieCard";
import { Movie } from "@/types/movies";
import classes from "@/components/movie/movieCard.module.css";

function SearchPageContent() {
  const searchParams = useSearchParams(); // Brug useSearchParams til at få adgang til URL-forespørgselsparametre
  const [movies, setMovies] = useState<Movie[]>([]); // Initialiserer en state til at gemme filmene i et array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      const fetchMovies = async () => {
        try {
          const data = await searchMovies(query); // Brug den nye funktion
          const filtered = (data.results as Movie[]).filter(
            (movie) => movie.poster_path
          );
          setMovies(filtered);
        } catch {
          setError("Failed to load movies.");
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    } else {
      setLoading(false);
      setError("No search term provided.");
    }
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-center text-4xl font-bold mb-4">
        Movies you searched for
      </h1>
      <div className={classes.cardContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

//suspense bruges til at vise en fallback-komponent, mens data hentes asynkront.
export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
