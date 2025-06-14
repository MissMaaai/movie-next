"use server";

import { revalidatePath } from "next/cache";

export async function deleteFavorite(movieId: number) {
  await fetch(`http://localhost:3000/api/favoriteMovies`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: movieId }),
  });

  revalidatePath("/favorites"); // ← Opdater path til din favoritside
}

//server action til at slette en favoritfilm, da jeg bruger better-sqlite3, så sikre jeg også filmen
//bliver slettet fra databasen.
// Jeg kunne have valgt at brugr server actions til add favorite, men det ville kræve at jeg
// skulle have lavet en server action for at tilføje en favoritfilm, og det ville være unødvendigt nu, da jeg har en klassisk route
// Denne funktion kaldes når brugeren klikker på slet knappen i DeleteFavorite komponenten
