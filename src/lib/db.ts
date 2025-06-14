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

//oprettelse af en databaseforbindelse med better-sqlite3
// og oprettelse af en tabel til favoritter, hvis den ikke allerede findes.
// Denne tabel indeholder kolonner til at gemme filmens id, titel, oversigt, plakatsti, bedømmelse og udgivelsesdato - (objekter)
//man kan se tabellen i DB browse for better-sqlite3 i den program jeg har hentet ned, hvis man ønsker at se backend.
// Tryk refresh(to pile) for at se ændringerne i tabellen
