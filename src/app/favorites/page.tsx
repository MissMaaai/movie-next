// app/favorites/page.tsx
import Image from "next/image";

interface FavoriteMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default async function FavoritesPage() {
  const res = await fetch("http://localhost:3000/api/favoriteMovies", {
    cache: "no-store", // Sikrer frisk data
  });

  if (!res.ok) {
    return <p>Kunne ikke hente favoritfilm 😞</p>;
  }

  const favorites: FavoriteMovie[] = await res.json();

  if (favorites.length === 0) {
    return <p>Du har ingen favoritter endnu.</p>;
  }

  return (
    <div>
      <h1>Mine Favoritfilm</h1>
      <ul
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {favorites.map((movie) => (
          <li
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
            />
            <h2>{movie.title}</h2>
            <p>⭐ {movie.vote_average}</p>
            <p>🎬 {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
