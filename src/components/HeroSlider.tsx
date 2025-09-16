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

// Movie type
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

interface HeroSliderProps {
  movies: Movie[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Get Media Title
  const getMediaTitle = (media: Movie): string => {
    return media.media_type === "movie"
      ? media.title || "untitle"
      : media.name || "untitle";
  };

  // Get Movie Genre
  const getGenres = (media: Movie): string => {
    if (media.media_type === "movie" && media.genres?.length) {
      return media.genres.map((g: Genre) => g.name).join(", ");
    }
    return "";
  };

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
        {movies.map((media: Movie) => (
          <SwiperSlide key={media.id}>
            <div className="relative w-full h-[360px] sm:h-[480px] md:h-[720px]">
              <div
                className="absolute bg-center bg-cover inset-0"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
                    media.backdrop_path || "placeholder.jpg"
                  })`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
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
                    <p className="text-sm sm:text-sm md:text-lg mt-0.5 sm:mt-2 text-yellow-400 font-semibold sm:leading-5">
                      {getGenres(media)}
                    </p>
                  )}

                  <p className="text-sm sm:text-sm md:text-lg mt-5 line-clamp-5 hidden sm:block sm:leading-5">
                    {media.overview || "No Description Available"}
                  </p>

                  <p className="flex items-center gap-4 text-sm sm:text-sm md:text-lg mt-5 sm:leading-5">
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
                    className={`mt-5 sm:mt-8 inline-block bg-yellow-400 text-black px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition text-sm sm:text-base md:text-base ${
                      !media.id
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
