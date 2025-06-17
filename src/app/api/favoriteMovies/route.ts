import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server"; //bruges til at håndtere HTTP-anmodninger og svar i Next. (pakken skal hentes ned)

export async function GET() {
  const statement = db.prepare("SELECT * FROM favorites");
  const favorites = statement.all();
  return NextResponse.json(favorites);
}

export async function POST(req: NextRequest) {
  const movie = await req.json(); //henter JSON-data fra anmodningen, som forventes at indeholde filmoplysningerne.

  const statement = db.prepare(` 
    INSERT OR IGNORE INTO favorites 
    (id, title, overview, poster_path, vote_average, release_date)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  statement.run(
    movie.id,
    movie.title,
    movie.overview,
    movie.poster_path,
    movie.vote_average,
    movie.release_date
  );
  return NextResponse.json({ success: true }); //returnerer et JSON-objekt, der angiver, at anmodningen var lykket.
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json(); //henter id'et på den film, der skal fjernes fra databasen, fra anmodningens JSON-krop.
  const statement = db.prepare("DELETE FROM favorites WHERE id = ?");
  statement.run(id);
  return NextResponse.json({ success: true });
}
