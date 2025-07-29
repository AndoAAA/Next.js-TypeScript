"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="bg-[url('/assets/hero/bg.png')] bg-no-repeat bg-cover bg-center relative xl:h-[1098px] py-20 sm:py-28 md:py-36 xl:py-0"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:h-[960px]">
          {/* Left: Text content */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              A taste of local <br /> flavours
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white text-lg font-semibold mb-4"
            >
              by: <span className="text-orange-300">Wildan Wari</span>
            </motion.p>

            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white text-base mb-10 max-w-lg mx-auto xl:mx-0"
            >
              Posuere amet, sed vitae condimentum accumsan aliquam et, aliquam.
              Tellus in fusce vel gravida lobortis diam dis ut. Bibendum
              senectus urna, in ultricies sed lorem natoque. Risus pharetra
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="mb-10"
            >
              <Button
                className="bg-teal-700  hover:bg-teal-500 cursor-pointer"
                variant="destructive"
                size="lg"
              >
                Let’s eat
              </Button>
            </motion.div>
          </div>

          {/* Right: Plate image */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-10 xl:mt-0 hidden xl:block xl:absolute xl:right-0 xl:top-[180px]"
          >
            <Image
              src="/assets/hero/plate.png"
              alt="hero-img"
              width={756}
              height={682}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom coffee image */}
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="hidden xl:flex xl:absolute xl:bottom-0"
      >
        <Image
          src="/assets/hero/coffee.png"
          width={386}
          height={404}
          alt="coffee-img"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
