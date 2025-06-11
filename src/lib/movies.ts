/* export async function getMovie(id: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
} */

  // lib/movies.ts
  
export async function getMovie(id: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie data");
  }

  return res.json();
}

export async function getMovies() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie list");
  }

  return res.json();
}
