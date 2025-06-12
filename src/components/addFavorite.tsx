/* // components/FavoriteButton.tsx
import { useState } from "react";

type Props = {
  movieId: number;
  title: string;
  posterPath: string;
};

export default function FavoriteButton({ movieId, title, posterPath }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async () => {
    const method = isFavorite ? "DELETE" : "POST";
    const body = JSON.stringify({
      tmdbId: movieId,
      title: title,
      posterPath: posterPath,
    });

    try {
      const response = await fetch("/api/favorites", {
        method,
        headers: { "Content-Type": "application/json" },
        body,
      });

      if (!response.ok) {
        throw new Error("Failed to add/remove from favorites");
      }

      // Skift tilstanden af knappen
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating favorites.");
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
 */