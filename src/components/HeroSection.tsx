import React from "react";
import HeroSlider from "./HeroSlider";

// ---- Types ----
interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title?: string;
  name?: string;
  media_type: "movie" | "tv";
  backdrop_path?: string;
  genres?: Genre[];
  runtime?: number;
}

// ---- Fetch Trending Movies ----
async function fetchTrendingMovies(): Promise<Movie[]> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
    { next: { revalidate: 60 * 60 } }
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  const movies: Movie[] = data.results ? data.results.slice(0, 3) : [];

  const detailedMovies: Movie[] = await Promise.all(
    movies.map(async (movie: Movie) => {
      const detailRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`
      );

      if (detailRes.ok) {
        const detailData = await detailRes.json();
        return {
          ...movie,
          genres: detailData.genres,
          runtime: detailData.runtime,
        };
      }

      return movie;
    })
  );

  return detailedMovies;
}

// ---- Component ----
export default async function HeroSection() {
  const movies = await fetchTrendingMovies();
  return <HeroSlider movies={movies} />;
}
