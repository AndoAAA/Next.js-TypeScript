"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaTruck,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-slate-50 px-6 py-4 flex items-center justify-between ">
      {/* Left section: Logo */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg md:text-2xl font-bold text-[#a91f64]">
          Tarverdyan Projects
        </span>
        <span className="text-sm text-gray-500 tracking-widest self-center">
          Furniture store
        </span>
      </div>
      {/* Center section: Nav links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link href="/" className="hover:text-[#a01f64]">
            Home
          </Link>
        </li>
        <li className="hover:text-[#a01f64] cursor-pointer">New Arrivals</li>
        <li className="hover:text-[#a01f64] cursor-pointer">Top Sellers</li>
        <li>
          <Link href="/products" className="hover:text-[#a01f64]">
            Products
          </Link>
        </li>
      </ul>
      {/* Right section: icons */}
      <div className="flex items-center gap-6 text-gray-700 text-xl ">
        <div className="flex gap-6">
          <FaTruck className="hover:text-[#a01f64] cursor-pointer" />
          <Link href="/wishlist">
            <FaHeart className="hover:text-[#a01f64] cursor-pointer" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="hover:text-[#a01f64] cursor-pointer" />
          </Link>
        </div>
        {/* Burger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl hover:text-[#a01f64] cursor-pointer" />
            ) : (
              <FaBars className="hover:text-[#a01f64] cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 text-gray-700 font-medium md:hidden shadow-md">
          <li>
            <Link
              href="/"
              className="hover:text-[#a01f64] "
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li
            className="hover:text-[#a01f64] cursor-pointer"
            onClick={toggleMenu}
          >
            New Arrivals
          </li>
          <li
            className="hover:text-[#a01f64] cursor-pointer"
            onClick={toggleMenu}
          >
            Top Sellers
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-[#a01f64]"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
