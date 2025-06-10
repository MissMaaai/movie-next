"use client";

import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  // Opdater søgefeltet med den nuværende søgning i URL'en
  useEffect(() => {
    const currentQuery = searchParams.get("q") || "";
    setQuery(currentQuery);
  }, [searchParams]);

  // Håndterer formularindsendelsen
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Sørger for at formularen ikke opdaterer siden
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
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
