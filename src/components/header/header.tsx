"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.jpg";
import Link from "next/link";
import classes from "./header.module.css";
import SearchBar from "../search/searchBar";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <Link href="/" className={classes.logo}>
            <Image src={logo} alt="Logo" width={40} height={40} priority />
            <span className={classes.title}>Mai Movie Finder </span>
          </Link>
        </div>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movies/popular">Popular</Link>
            </li>
            <li>
              <Link href="/movies/top_rated">Top Rated</Link>
            </li>
            <li>
              <Link href="/movies/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link href="/movies/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
      <SearchBar />
    </>
  );
}
