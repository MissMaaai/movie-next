export async function getMovie(id: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json(); 
}


//fetch fra TMDB 