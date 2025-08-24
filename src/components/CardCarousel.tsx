"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

interface Card {
  id: number;
  image: string;
  text: string;
  price: number;
}

interface CardCarouselProps {
  title: string;
  cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ title, cards }) => {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          {title}
        </h2>
        <Link href="/products">
          <span className="text-lg text-gray-600 hover:text-[#a01f64]">
            View More
          </span>
        </Link>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="card-swiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="mb-10">
              <ProductCard
                id={card.id}
                image={card.image}
                text={card.text}
                price={card.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardCarousel;
