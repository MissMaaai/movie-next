"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchMovie() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const initial = searchParams.get("q") || "";
    setSearchTerm(initial);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sørg for at sende brugeren til den korrekte URL
    if (searchTerm.trim()) {
      // Opret URL'en korrekt uden ekstra '='
      window.location.href = `/search?q=${encodeURIComponent(
        searchTerm.trim()
      )}`;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search</label>
      <input
        className="input ml-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
