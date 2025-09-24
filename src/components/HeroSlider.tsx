"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";
import TrailerModal from "./TrailerModal";
import useSWR from "swr";

// Generic fetcher for SWR
const fetcher = async <T,>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch trailer");
  return res.json();
};

// Types
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
  overview?: string;
  vote_average?: number;
}

interface Video {
  id: string;
  key: string;
  site: string;
  type: string;
}

interface VideosResponse {
  results: Video[];
}

interface HeroSliderProps {
  movies: Movie[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<Movie | null>(null);

  // Get Media Title
  const getMediaTitle = (media: Movie): string =>
    media.media_type === "movie"
      ? media.title || "Untitled"
      : media.name || "Untitled";

  // Get Movie Genre
  const getGenres = (media: Movie): string =>
    media.genres?.length
      ? media.genres.map((g) => g.name).join(", ")
      : "Unknown";

  // Get Movie Runtime
  const formatDuration = (media: Movie): string => {
    if (media.media_type === "movie" && media.runtime) {
      const hour = Math.floor(media.runtime / 60);
      const minute = media.runtime % 60;
      return `${hour}h ${minute}m`;
    }
    return "";
  };

  // Handle Navigation Buttons
  const handleButtonClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
      setCurrentSlide(index);
    }
  };

  // Fetch trailer videos when a media is selected

  const { data: trailerData, error } = useSWR<VideosResponse>(
    selectedMedia
      ? `https://api.themoviedb.org/3/${selectedMedia.media_type}/${selectedMedia.id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
      : null,
    fetcher
  );

  // Find the first YouTube trailer

  const trailer = trailerData?.results?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  const trailerUrl = trailer
    ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
    : null;

  // Open/Close modal

  const openModal = (media: Movie) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  return (
    <section className="relative min-h-[360px] sm:min-h-[480px] md:min-h-[720px] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={movies.length > 1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="w-full h-full"
      >
        {movies.map((media) => (
          <SwiperSlide key={media.id}>
            <div className="relative w-full h-[360px] sm:h-[480px] md:h-[720px]">
              {/* Background image */}
              <Image
                src={
                  media.backdrop_path
                    ? `https://image.tmdb.org/t/p/w1280${media.backdrop_path}`
                    : "/images/placeholder.jpg"
                }
                alt={getMediaTitle(media)}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center sm:items-end p-4 sm:p-8 md:p-20 text-white max-w-xs sm:max-w-md md:max-w-2xl">
                <div>
                  <Link
                    href={`/details?id=${media.id}&media_type=${media.media_type}`}
                  >
                    <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold leading-tight sm:leading-snug">
                      {getMediaTitle(media)}
                    </h1>
                  </Link>

                  {media.genres && (
                    <p className="text-sm md:text-lg mt-0.5 sm:mt-2 text-yellow-400 font-semibold sm:leading-5">
                      {getGenres(media)}
                    </p>
                  )}

                  <p className="text-sm md:text-lg mt-5 line-clamp-5 hidden sm:block sm:leading-5">
                    {media.overview || "No Description Available"}
                  </p>

                  <p className="flex items-center gap-4 text-sm md:text-lg mt-5 sm:leading-5">
                    {media.vote_average !== undefined && (
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {media.vote_average.toFixed(1)}
                      </span>
                    )}
                    {media.media_type === "movie" && (
                      <span>{formatDuration(media)}</span>
                    )}
                  </p>

                  <button
                    onClick={() => openModal(media)}
                    disabled={!media.id}
                    className={`mt-5 sm:mt-8 inline-block bg-yellow-400 text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition text-sm md:text-base ${
                      !media.id
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    aria-label={`Watch trailer of ${getMediaTitle(media)}`}
                  >
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nav Buttons */}
      {movies.length > 1 && (
        <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          {movies.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-colors ${
                currentSlide === index
                  ? "bg-yellow-400 border-yellow-400"
                  : "bg-transparent border-white cursor-pointer"
              }`}
              onClick={() => handleButtonClick(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        trailerUrl={trailerUrl}
        title={selectedMedia ? getMediaTitle(selectedMedia) : "Trailer"}
      />
    </section>
  );
};

export default HeroSlider;
