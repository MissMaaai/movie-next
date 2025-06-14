//dette er en app router, der interagerer med databasen, den håndterer API-anmodninger for at hente, tilføje og fjerne favoritfilm i en SQLite-database
// ved hjælp af Next.js og better-sqlite3.

import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server"; //bruges til at håndtere HTTP-anmodninger og svar i Next. (pakken skal hentes ned)

export async function GET() {
  const statement = db.prepare("SELECT * FROM favorites"); //opretter forberedt statement SQL-forespørgsel, der henter alle poster fra tabellen favorites.
  const favorites = statement.all(); //henter alle poster fra tabellen favorites og gemmer dem i variablen favorites.
  return NextResponse.json(favorites); //returnerer de hentede favoritter som et JSON-objekt i HTTP-svaret.
}

export async function POST(req: NextRequest) {
  //POST bruges til at tilføje en ny favoritfilm til databasen.
  const movie = await req.json(); //henter JSON-data fra anmodningen, som forventes at indeholde filmoplysningerne.
  // Forberedt SQL-forespørgsel til at indsætte en ny favoritfilm i databasen.
  const statement = db.prepare(` 
    INSERT OR IGNORE INTO favorites 
    (id, title, overview, poster_path, vote_average, release_date)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  statement.run(
    //kører den forberedte forespørgsel med de givne filmoplysninger.
    movie.id,
    movie.title,
    movie.overview,
    movie.poster_path,
    movie.vote_average,
    movie.release_date
  );
  return NextResponse.json({ success: true }); //returnerer et JSON-objekt, der angiver, at anmodningen var vellykket.
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json(); //henter id'et på den film, der skal fjernes fra databasen, fra anmodningens JSON-krop.
  const statement = db.prepare("DELETE FROM favorites WHERE id = ?");
  statement.run(id);
  return NextResponse.json({ success: true });
}
