/* import sql from "better-sqlite3";

const db = new sql("favorites.db");

// Opret tabel til favoritter, hvis den ikke allerede eksisterer
const createFavoritesTable = () => {
  const stmt = db.prepare(`
    CREATE TABLE IF NOT EXISTS favorites (
      movie_id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      poster_path TEXT NOT NULL,
      vote_average REAL NOT NULL,
      overview TEXT NOT NULL,
      release_date TEXT NOT NULL
    );
  `);
  stmt.run();
};

export { db, createFavoritesTable };
 */

/* import sql from "better-sqlite3";
import path from "path";

// Sørg for at databasen ligger i roden af projektet
const dbPath = path.resolve(process.cwd(), "data.db");
const db = new sql(dbPath);

// Opret tabel hvis den ikke findes
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS favoriteMovies (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    overview TEXT,
    poster_path TEXT,
    vote_average REAL,
    release_date TEXT
  )
`
).run();

export default db; */


import Database from "better-sqlite3";
import { join } from "path";

const dbPath = join(process.cwd(), "favorites.db");
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY,
    title TEXT,
    overview TEXT,
    poster_path TEXT,
    vote_average REAL,
    release_date TEXT
  )
`);

export default db;
