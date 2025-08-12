import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import Slider from "@/components/Slider";
import TopSellers from "@/components/TopSellers";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <NewArrivals />
      <TopSellers />
    </div>
  );
};

export default HomePage;
