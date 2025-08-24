import React from "react";
import { products } from "../../public/data/data.json";
import CardCarousel from "./CardCarousel";

const TopSellers = () => {
  const cards = products.slice(4, 12).map((item) => ({
    id: item.id,
    image: item.image,
    text: item.text,
    price: Number(item.price),
  }));
  return (
    <div>
      <CardCarousel title="Top Sellers" cards={cards} />
    </div>
  );
};

export default TopSellers;
