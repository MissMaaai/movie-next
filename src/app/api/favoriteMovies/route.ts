

import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET favorites
export async function GET() {
  const stmt = db.prepare("SELECT * FROM favorites");
  const favorites = stmt.all();
  return NextResponse.json(favorites);
}

// POST favorite
export async function POST(req: NextRequest) {
  const movie = await req.json();
  const stmt = db.prepare(`
    INSERT OR IGNORE INTO favorites 
    (id, title, overview, poster_path, vote_average, release_date)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    movie.id,
    movie.title,
    movie.overview,
    movie.poster_path,
    movie.vote_average,
    movie.release_date
  );
  return NextResponse.json({ success: true });
}

// DELETE favorite
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const stmt = db.prepare("DELETE FROM favorites WHERE id = ?");
  stmt.run(id);
  return NextResponse.json({ success: true });
}
