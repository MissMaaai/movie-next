"use client";

import { useEffect, useState, Suspense } from "react";
import styles from "./SearchBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

function SearchBarPage() {
  const router = useRouter(); // Brug useRouter til at navigere til en ny side, når brugeren indsender søgeformularen
  const searchParams = useSearchParams(); // Brug useSearchParams til at få adgang til URL-forespørgselsparametre og opdatere søgefeltet dynamisk
  const [query, setQuery] = useState(""); // Initialiserer en state til at gemme den aktuelle søgeforespørgsel

  // useEffect bruges til at opdatere søgefeltet, når URL-forespørgselsparametrene ændres
  useEffect(() => {
    const currentQuery = searchParams.get("q") || ""; // Henter værdien af 'q' fra URL'en, eller sætter den til tomt hvis der ikke er nogen
    setQuery(currentQuery);
  }, [searchParams]); // Kører kun når 'searchParams' ændrer sig

  // Håndterer formularindsendelsen
  //event handler betyder en funktion, der håndterer en bestemt begivenhed, i dette tilfælde indsendelse af formularen
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Sørger for at formularen ikke opdaterer siden
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`); //pushes en ny URL til routeren med den indtastede søgning, push betyder at den nye URL tilføjes til browserens historik, så brugeren kan navigere tilbage
    }
    // Nulstil søgefeltet
    setQuery("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter search term..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
}

// suspense bruges til at vise en fallback-komponent, mens data hentes asynkront, det er ikke nødvendig
//men den skal med i dette tilfælde for at kunne køre npm run build og fordi jeg bruger useSearchParams
export default function SearchBar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchBarPage />
    </Suspense>
  );
}
