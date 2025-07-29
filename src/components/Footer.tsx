"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/footer/bg.png')] bg-cover bg-no-repeat text-white pt-10 sm:pt-14 md:pt-16 lg:pt-20">
      <div className="max-w-[1200px] px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                width={90}
                height={36}
                alt="logo"
                className="w-[80px] sm:w-[90px] h-auto"
              />
            </Link>
          </div>

          {/* Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 xl:gap-16">
            {/* Blog */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">Blog</h4>
              <ul className="flex flex-col gap-y-4 text-sm sm:text-base">
                <li>
                  <Link href="/" className="hover:text-orange-300">
                    Sit pellentesque neque egestas quis dolor, sit
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-300">
                    Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-300">
                    Tempor, volutpat nulla sed posuere orci ac diam integer
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-300">
                    Ultrices consectetur orci ultrices viverra mauris laoreet
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-y-4 text-sm sm:text-base">
                <li>
                  <Link href="/about" className="hover:text-orange-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-orange-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">
                Follow Us
              </h4>
              <div className="flex gap-6">
                <Link href="https://facebook.com" target="_blank">
                  <FaFacebookF className="text-xl sm:text-2xl hover:text-orange-300 transition" />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <FaInstagram className="text-xl sm:text-2xl hover:text-orange-300 transition" />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <FaLinkedinIn className="text-xl sm:text-2xl hover:text-orange-300 transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-10 pt-6 pb-8 text-center text-xs sm:text-sm text-white/60">
          &copy; {new Date().getFullYear()} www.tarverdyan-projects.com . All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
