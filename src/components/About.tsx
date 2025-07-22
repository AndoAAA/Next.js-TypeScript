"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React from "react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="relative grid grid-cols-1 xl:grid-cols-2 items-center gap-10 px-6 py-12 md:px-16 xl:px-32 bg-[#0f172a] text-white"
    >
      {/* Left Text Block */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold leading-tight">
          Let's Talk About <span className="text-orange-400">W'Food</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Mauris nam et ipsum ipsum in. Risus nullam in sit mi est justo at
          fringilla. Consequat ac fringilla quis enim, sit ipsum. Laoreet eget
          metus morbi convallis gravida elementum facilisis.
        </p>

        <p className="text-gray-400 text-md leading-relaxed">
          Nisi, eu ut ultricies enim enim amet porttitor. Volutpat ac tellus
          volutpat eget volutpat orci enim, ut a. Turpis adipiscing eleifend
          dignissim viverra euismod ultrices.
        </p>

        <Button className="uppercase px-10 py-4 bg-teal-700 hover:bg-teal-500 cursor-pointer transition rounded-full text-lg">
          Read More
        </Button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <Image
          src="/assets/about/img.png"
          alt="about-image"
          width={600}
          height={700}
          className="rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default About;
