import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata = {
  title: "Next.js Movie Finder",
  description: "Browse movies using the TMDB API",
};

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
