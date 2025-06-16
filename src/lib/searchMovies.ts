export async function searchMovies(query: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
}
