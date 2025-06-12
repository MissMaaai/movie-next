"use client";

import { useState } from "react";
import { Movie } from "@/types/movies";
import { Heart } from "lucide-react";

interface AddFavoriteProps {
  movie: Movie;
}

const AddFavorite = ({ movie }: AddFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Handle click on the favorite button
  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the heart

    const method = isFavorite ? "DELETE" : "POST"; // Use POST to add, DELETE to remove

    try {
      const res = await fetch("/api/favoriteMovies", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      if (res.ok) {
        setIsFavorite(!isFavorite); // If success, toggle the status
      } else {
        console.error("Could not add/remove from favorites");
      }
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? (
        <Heart color="red" fill="red" />
      ) : (
        <Heart />
      )}
    </button>
  );
};

export default AddFavorite;
