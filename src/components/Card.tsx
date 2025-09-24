"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Youtube } from "lucide-react";
import { useState } from "react";
import useSWR from "swr";
import TrailerModal from "./TrailerModal";

interface Media {
  id: number;
  poster_path?: string;
  title?: string;
  name?: string;
  vote_average?: number;
  media_type?: string;
}

interface Video {
  key: string;
  site: string;
  type: string;
}

interface VideoResponse {
  results: Video[];
}

interface CardProps {
  media: Media;
}

const fetcher = async (url: string): Promise<VideoResponse> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch trailer");
  return res.json();
};

export default function Card({ media }: CardProps) {
  const {
    id,
    poster_path: posterPath,
    title,
    name,
    vote_average: voteAverage,
    media_type: mediaType = "movie",
  } = media || {};

  const displayTitle = title || name || "Untitled";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: trailerData, error } = useSWR<VideoResponse>(
    id
      ? `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
      : null,
    fetcher
  );

  const trailer = trailerData?.results?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  const trailerUrl = trailer
    ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
    : null;

  const openModal = () => {
    if (trailerUrl) setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex-none w-40 sm:w-48 md:w-56 min-w-[160px] max-w-[224px] bg-[#18181b] rounded-lg overflow-hidden shadow-lg snap-start">
      <Link href={`/details?id=${id}&media_type=${mediaType}`}>
        <div className="relative aspect-[2/3] group cursor-pointer">
          <Image
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w500${posterPath}`
                : "/default_poster.jpg"
            }
            alt={displayTitle}
            fill
            className="object-cover rounded-t-lg group-hover:brightness-95 transition-all"
            sizes="33vw"
            quality={90}
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-2">
        <p className="flex items-center text-xs sm:text-sm text-yellow-400">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          {voteAverage?.toFixed(1) || "N/A"}
        </p>
        <Link href={`/details?id=${id}&media_type=${mediaType}`}>
          <p className="text-base sm:text-lg my-1 font-semibold text-white line-clamp-2 h-12 sm:h-14 cursor-pointer hover:underline">
            {displayTitle}
          </p>
        </Link>
        <button
          onClick={openModal}
          disabled={!trailerUrl}
          className={`flex items-center justify-center gap-2 w-full py-2 bg-[#18181b] text-white font-bold border border-gray-600 rounded-full transition-colors text-sm sm:text-base ${
            trailerUrl
              ? "hover:bg-[#252525] cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <Youtube className="w-6 h-6 text-red-500" />
          Trailer
        </button>
      </div>
      <TrailerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        trailerUrl={trailerUrl}
        title={displayTitle}
      />
    </div>
  );
}
