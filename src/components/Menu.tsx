"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const menu = [
  {
    img: "/assets/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$24.00",
  },
  {
    img: "/assets/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: "$26.00",
  },
  {
    img: "/assets/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: "$22.00",
  },
  {
    img: "/assets/menu/item-4.png",
    title: "Orange and banana cookies",
    price: "$12.00",
  },
];

const Menu: React.FC = () => {
  return (
    <section
      id="menu"
      className="relative py-12 xl:py-24 bg-[url(/assets/menu/bg.png)] bg-cover bg-center"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center mb-10"
        >
          <h2 className="text-3xl xl:text-4xl font-bold text-green-950">
            Favorite Menu
          </h2>
          <Link
            href="/"
            className="flex items-center gap-1 text-green-800 hover:text-orange-400 transition-colors duration-300 group"
          >
            View All
            <IoIosArrowRoundForward className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {menu.map((item, index) => (
            <div
              key={index}
              className="group text-center space-y-3 p-4 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  width={270}
                  height={270}
                  alt={item.title}
                  className="mx-auto rounded-xl transform group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-orange-400 font-medium">{item.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
