import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata = {
  title: "Next.js Movie Finder",
  description: "Find your favorite movies with Next.js",
};

//ReactNode nødvendigt, fordi det sikrer, at children kan være af enhver type, som React kan rendere (tsx, tekst, tal, funtkion).
// RootLayout er en komponent, der fungerer som en wrapper for hele applikationen.

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

// Denne RootLayout-komponent definerer det overordnede layout for applikationen, herunder metadata og hovedindholdet.
//children er en speciel prop i React, der bruges til at passere indhold til komponenten - alt 'indeni' komponenten.
// Hvis ikke jeg har en type til children, kan jeg ikke bruge den i komponenten.
