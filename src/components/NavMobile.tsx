"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { RiHomeFill, RiMenu2Line } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface NavMobileProps {
  containerStyles?: string;
  linkStyles?: string;
  iconStyles?: string;
}

const links = [
  { icon: <RiHomeFill />, path: "home", name: "Home", offset: 0 },
  { icon: <BiSolidFoodMenu />, path: "menu", name: "Menu", offset: 0 },
  { icon: <FaUsers />, path: "about", name: "About", offset: -50 },
  { icon: <BsTelephoneFill />, path: "contact", name: "Contact", offset: 0 },
];

const NavMobile: React.FC<NavMobileProps> = ({
  containerStyles,
  linkStyles,
  iconStyles,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={containerStyles}>
      {/* Open menu button */}
      <button
        onClick={toggleMenu}
        className="z-30 p-2 rounded-full  cursor-pointer text-white text-3xl transition duration-300"
      >
        <RiMenu2Line />
      </button>

      {/* Slide-out menu */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-20 w-full sm:w-[80%] md:w-[60%] max-w-sm bg-green-950 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute left-6 top-6 p-2 text-white text-3xl hover:text-orange-300 transition duration-300 cursor-pointer"
        >
          <IoCloseOutline />
        </button>

        {/* Logo */}
        <div className="flex justify-center mt-16">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              width={120}
              height={48}
              alt="logo"
              className="hover:opacity-90 transition"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col items-center justify-center mt-16 gap-10">
          {links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.path}
              smooth={true}
              offset={link.offset}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-x-3"
            >
              <div className={`${iconStyles}`}>{link.icon}</div>
              <span className={`${linkStyles}`}>{link.name}</span>
            </ScrollLink>
          ))}
        </nav>
      </aside>

      {/* Background overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 z-10 backdrop-blur-sm transition-opacity"
        />
      )}
    </div>
  );
};

export default NavMobile;
