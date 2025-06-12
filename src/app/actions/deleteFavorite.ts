'use server';

import { revalidatePath } from 'next/cache';

export async function deleteFavorite(movieId: number) {
  await fetch(`http://localhost:3000/api/favoriteMovies`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: movieId }),
  });

  revalidatePath('/favorites'); // ← Opdater path til din favoritside
}
