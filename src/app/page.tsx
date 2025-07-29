"use client";

import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden ">
        <Hero />
        <Menu />
        <Reservation />
        <About />
        <Map />
        <Footer />
      </main>
    </>
  );
}
