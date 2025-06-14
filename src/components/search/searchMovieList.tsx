"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function SearchMovieContent() {
  // SearchMovieContent-komponenten håndterer søgeformularen og navigerer til søgeresultatsiden
  const searchParams = useSearchParams(); // Brug useSearchParams til at få adgang til URL-forespørgselsparametre
  const [searchTerm, setSearchTerm] = useState<string>(""); // Initialiserer en state til at gemme søgetermen

  useEffect(() => {
    const initial = searchParams.get("q") || "";
    setSearchTerm(initial);
  }, [searchParams]);

  //e.reactEvent er en type, der repræsenterer en begivenhed, bruges fordi det er typescript
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(
        //encodeURIComponent bruges til at sikre, at søgetermen er korrekt kodet i URL'en
        searchTerm.trim() //
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

// Den wrappe SearchMovie-komponent i Suspense
export default function SearchMovie() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchMovieContent />
    </Suspense>
  );
}
