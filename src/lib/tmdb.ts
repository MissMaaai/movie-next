export async function getMoviesByCategory(category: string) {
  const apiKey = process.env.TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}
