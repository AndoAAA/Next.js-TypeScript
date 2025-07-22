"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black py-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* logo, nav, btn */}
        <div className="flex items-center justify-around">
          {/* logo */}
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={75}
              height={30}
              style={{ height: "auto" }}
            />
          </Link>
          {/* Nav */}
          <Nav
            containerStyles="hidden xl:flex text-white gap-x-12 cursor-pointer"
            linkStyles="capitalize  hover:text-orange-300"
          />
          {/* BTN */}
          <ScrollLink to="reservation" smooth={true}>
            <Button
              className="bg-orange-400 cursor-pointer uppercase"
              variant="destructive"
              size="sm"
            >
              Book a Table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl text-white"
            linkStyles="uppercase text-white hover:text-orange-300 transition-colors duration-200 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
