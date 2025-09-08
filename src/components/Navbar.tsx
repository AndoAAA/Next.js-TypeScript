"use client";

import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
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
  const pathName = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "New Arrivals", href: "/newarrivals" },
    { name: "Top Sellers", href: "/topsellers" },
    { name: "Products", href: "/products" },
  ];

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishListItems = useAppSelector((state) => state.wishList.items);
  const wishListItemcount = wishListItems.length;

  return (
    <nav className="sticky top-0 z-50 bg-slate-50 px-6 py-4 flex items-center justify-between">
      {/* Left section: Logo */}
      <div className="flex flex-col leading-tight">
        <Link href="/">
          <span className="text-lg md:text-2xl font-bold text-[#a91f64] cursor-pointer">
            Tarverdyan Projects
          </span>
        </Link>
        <span className="text-sm text-gray-500 tracking-widest self-center">
          Furniture store
        </span>
      </div>

      {/* Center section: Nav links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {links.map((link) => {
          const isActive =
            pathName === link.href || pathName.startsWith(link.href + "/");
          return (
            <li
              key={link.href}
              className={
                isActive ? "text-[#a91f64] font-bold" : "text-gray-900"
              }
            >
              <Link
                href={link.href}
                className="hover:text-[#a91f64] transition"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Right section: icons */}
      <div className="flex items-center gap-6 text-gray-700 text-xl">
        <div className="flex gap-6">
          <FaTruck className="hover:text-[#a91f64] cursor-pointer" />
          <Link href="/wishlist" className="relative">
            <FaHeart className="hover:text-[#a91f64] cursor-pointer" />
            {wishListItemcount > 0 && (
              <span className="absolute -top-3 -right-4 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5">
                {wishListItemcount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart className="hover:text-[#a91f64] cursor-pointer" />
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-4 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Burger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="text-2xl hover:text-[#a91f64] cursor-pointer" />
            ) : (
              <FaBars className="hover:text-[#a91f64] cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay + Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          />
          {/* Mobile Menu */}
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 text-gray-700 font-medium md:hidden shadow-md z-50">
            {links.map((link) => {
              const isActive =
                pathName === link.href || pathName.startsWith(link.href + "/");
              return (
                <li
                  key={link.href}
                  className={
                    isActive ? "text-[#a91f64] font-bold" : "text-gray-900"
                  }
                >
                  <Link
                    href={link.href}
                    className="hover:text-[#a91f64] transition"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
