import React from "react";
import { products } from "../../public/data/data.json";
import CardCarousel from "./CardCarousel";

const NewArrivals = () => {
  const cards = products.slice(0, 8).map((item) => ({
    id: item.id,
    image: item.image,
    text: item.text,
    price: Number(item.price),
  }));
  return (
    <div>
      <CardCarousel title="New Arrivals" cards={cards} />
    </div>
  );
};

export default NewArrivals;
