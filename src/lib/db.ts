/* import sql from "better-sqlite3";
import { resolve } from "path";

// Opret forbindelse til SQLite-databasen, hvis den ikke findes, bliver den oprettet
const db = new sql("movies.db");

function initDb(){
    db.exec(`
        CREATE TABLE IF NOT EXISTS favorites (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            posterPath TEXT NOT NULL
            voteAverage REAL NOT NULL,
            overview TEXT NOT NULL,
            releaseDate TEXT NOT NULL)`);



export async function storeFavoriteMovies(movie)
const stmt = db.prepare(`
        INSERT INTO favorites (
        title, posterPath, voteAverage, overview, releaseDate)
        VALUES (?, ?, ?, ?, ?)`);
        await new promise(()resolve => setTimeout(resolve, 1000));
    stmt.run(movie.title, movie.posterPath, movie.voteAverage, movie.overview, movie.releaseDate);
} */

import sql from "better-sqlite3";

// Opretter eller åbner SQLite databasen
const db = new sql("favorites.db");

// Opretter tabel med en `id` kolonne som en auto-increment primærnøgle
db.prepare(
  `
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,  -- Unik ID for hver favorit
      movie_id INTEGER NOT NULL UNIQUE       -- movie_id for filmen
    )
  `
).run();

export { db };
