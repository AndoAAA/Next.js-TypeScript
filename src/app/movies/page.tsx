"use client";

import MediaDisplay from "@/components/MediaDisplay";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  });

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
}

interface MoviesResponse {
  results: Movie[];
}

export default function MoviesPage() {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?${new URLSearchParams(
    {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY!,
      sort_by: "popularity.desc",
      page: "1",
    }
  )}`;

  const {
    data: moviesData,
    error,
    isLoading,
  } = useSWR<MoviesResponse>(apiUrl, fetcher);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center py-10">
        Failed to load movies
      </div>
    );

  return <MediaDisplay items={moviesData?.results || []} />;
}
