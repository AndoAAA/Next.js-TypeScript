"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden ">
        <Header/>
        <Hero />
      </main>
    </>
  );
}
