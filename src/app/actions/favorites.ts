/* "use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function toggleFavorite(movieId: string) {
  type FavoriteRow = { id: number; movieId: string };

  const row = db
    .prepare("SELECT * FROM favorites WHERE movieId = ?")
    .get(movieId) as FavoriteRow | undefined;

  if (row) {
    db.prepare("DELETE FROM favorites WHERE id = ?").run(row.id);
  } else {
db.prepare("INSERT INTO favorites (movieId) VALUES (?)").run(movieId);
  }

  revalidatePath("/movies/favoriteMovies");
} */

//Server action for at håndtere favoritstatus og revalidere siden
//den Kalder direkte fra komponenten, når brugeren klikker på knappen og
//opdaterer UI'en uden at genindlæse siden, med hjælp af ToggleFavoriteAction kaldes
//add eller remove direkte fra databasen og revalidere siden for at sikre, at UI'en er opdateret med den nyeste favoritstatus

"use server";
import { db } from "@/lib/db";

// Funktion til at toggle favoritstatus for en film
export const toggleFavoriteMovie = async (movieId: number) => {
  // Tjek om filmen allerede er i favoritter (vi bruger kun movieId)
  const isFavorited = db
    .prepare('SELECT 1 FROM favorites WHERE movie_id = ?')
    .get(movieId);

  if (isFavorited) {
    // Hvis filmen er favoritter, fjern den
    db.prepare('DELETE FROM favorites WHERE movie_id = ?')
      .run(movieId);
  } else {
    // Hvis filmen ikke er favoritter, tilføj den
    db.prepare('INSERT INTO favorites (movie_id) VALUES (?)')
      .run(movieId);
  }
  
};


    