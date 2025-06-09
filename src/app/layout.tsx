import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header/header";


export const metadata = {
  // Metadata for the application
  title: "Next.js Movie Finder",
  description: "Find your favorite movies with Next.js",
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
