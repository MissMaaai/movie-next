// lib/favorites.ts
import { db } from "@/lib/db";

export function getFavoriteMovieIds() {
  const rows = db.prepare("SELECT movie_id FROM favorites").all() as { movie_id: string }[];
  return rows.map((row) => row.movie_id);
}

export function addFavoriteMovie(movieId: string) {
  db.prepare("INSERT INTO favorites (movie_id) VALUES (?)").run(movieId);
}

export function removeFavoriteMovie(movieId: string) {
  db.prepare("DELETE FROM favorites WHERE movie_id = ?").run(movieId);
}
