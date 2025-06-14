"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteFavorite } from "@/app/actions/deleteFavorite"; // ← Importér din server action

interface DeleteFavoriteProps {
  movieId: number;
}

const DeleteFavorite = ({ movieId }: DeleteFavoriteProps) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      deleteFavorite(movieId);
    });
  };

  return (
    <button onClick={handleDelete} disabled={isPending}>
      {isPending ? "Removing..." : <Trash2 color="white" />}
    </button>
  );
};

export default DeleteFavorite;
