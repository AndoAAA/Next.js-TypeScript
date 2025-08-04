"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider1 from "../../public/images/slider1.jpg";
import Slider2 from "../../public/images/slider2.jpg";
import Slider3 from "../../public/images/slider3.jpg";

const Slider = () => {
  const slides = [
    {
      image: Slider1,
      content: (
        <div className="text-center leading-snug tracking-wide space-y-2">
          <div className="text-white text-3xl md:text-5xl font-semibold">
            Hot
          </div>
          <div className="text-white text-3xl md:text-5xl font-semibold">
            Offers
          </div>
          <div className="text-[#a01f64] text-3xl md:text-5xl font-bold">
            50%
          </div>
        </div>
      ),
    },
    {
      image: Slider2,
      content: (
        <div className="text-center leading-snug tracking-wide space-y-2">
          <div className="text-white text-3xl md:text-5xl font-semibold">
            New
          </div>
          <div className="text-[#a01f64] text-3xl md:text-5xl font-bold">
            Collection
          </div>
          <div className="text-white text-3xl md:text-5xl font-semibold">
            2025
          </div>
        </div>
      ),
    },
    {
      image: Slider3,
      content: (
        <div className="text-center leading-snug tracking-wide space-y-2">
          <div className="text-[#a01f64] text-3xl md:text-5xl font-bold">
            Deal
          </div>
          <div className="text-white text-3xl md:text-5xl font-semibold">
            Of
          </div>
          <div className="text-white text-3xl md:text-5xl font-semibold">
            The Week
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full h-[400px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for arrows and bullets */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff;
          transition: color 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #a01f64;
        }
        .swiper-pagination-bullet {
          background: #999;
          opacity: 1;
          transition: background 0.3s ease;
        }
        .swiper-pagination-bullet:hover {
          background: #a01f64;
        }
        .swiper-pagination-bullet-active {
          background: #a01f64;
        }

        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
