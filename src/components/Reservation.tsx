"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React from "react";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="reservation"
      className="bg-cover bg-center bg-no-repeat bg-[url('/assets/reservation/bg.png')] py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-green-950 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-4xl mx-auto p-6 sm:p-10 lg:p-14"
      >
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
};

export default Reservation;
