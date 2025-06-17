//jeg bruger useEffect til at hente favorit bliver mounted når komponenten indlæses.,
// useState til at holde styr på om den aktuelle film er en favorit.
// Når brugeren klikker, toggler jeg status med en fetch-anmodning (enten POST eller DELETE) til mit API i app routeren.
// Det giver en interaktiv brugeroplevelse.

"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/types/movies";
import { Heart } from "lucide-react";

interface AddFavoriteProps {
  movie: Movie; // TypeScript interface for the movie prop
}

const AddFavorite = ({ movie }: AddFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // useEffect kører når komponenten mountes en gang eller når movie.id ændres
    const checkIfFavorite = async () => {
      try {
        const response = await fetch("/api/favoriteMovies"); // Henter alle favoritfilm fra serveren
        if (response.ok) {
          const favorites: Movie[] = await response.json();
          const isFav = favorites.some((fav) => fav.id === movie.id); //vha lamdba funktionen tjekker vi om filmen er i favoritterne
          setIsFavorite(isFav); // opdaterer state med resultatet
        }
      } catch (error) {
        console.error("Failed to check favorites", error);
      }
    };

    checkIfFavorite();
  }, [movie.id]); // Kører kun når movie.id ændres

 
  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation

    const method = isFavorite ? "DELETE" : "POST"; //sender DELETE hvis filmen allerede er i favoritterne, ellers POST for at tilføje den nå der trykkes på hjertet

    try {
      const response = await fetch("/api/favoriteMovies", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      if (response.ok) {
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
