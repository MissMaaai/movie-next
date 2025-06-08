"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSubmit() {
    alert("search: " + query);
    setQuery(""); // Clear the input field after submission;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "0rem",
        marginRight: "14rem",
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter search term..."
          style={{
            padding: "10px 14px",
            fontSize: "16px",
            border: "1px solid #ccc",
            width: "250px",
            height: "40px",
            boxSizing: "border-box",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "gray",
            color: "#fff",
            border: "none",
            height: "40px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
