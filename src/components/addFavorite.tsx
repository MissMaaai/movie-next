"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/types/movies";
import { Heart } from "lucide-react";

interface AddFavoriteProps {
  movie: Movie;
}

const AddFavorite = ({ movie }: AddFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // 🔍 Check if the movie is already a favorite when component mounts
  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const res = await fetch("/api/favoriteMovies");
        if (res.ok) {
          const favorites: Movie[] = await res.json();
          const isFav = favorites.some((fav) => fav.id === movie.id);
          setIsFavorite(isFav);
        }
      } catch (error) {
        console.error("Failed to check favorites", error);
      }
    };

    checkIfFavorite();
  }, [movie.id]);

  // ➕➖ Toggle favorite status on click
  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation

    const method = isFavorite ? "DELETE" : "POST";

    try {
      const res = await fetch("/api/favoriteMovies", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      if (res.ok) {
        setIsFavorite(!isFavorite);
      } else {
        console.error("Could not add/remove from favorites");
      }
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? <Heart color="red" fill="red" /> : <Heart />}
    </button>
  );
};

export default AddFavorite;
