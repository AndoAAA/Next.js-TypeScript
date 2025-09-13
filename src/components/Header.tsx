"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchterm] = useState("");
  const [suggestion, setSuggestion] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch search suggestions
  const fetchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestion([]);
      return;
    }

    setIsLoading(true); // ✅ fix

    try {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(
        query
      )}`;
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        const filtredResults =
          data.results
            ?.filter(
              (item: any) =>
                item.media_type === "movie" || item.media_type === "tv"
            )
            .slice(0, 5) || [];
        setSuggestion(filtredResults);
      } else {
        setSuggestion([]);
      }
    } catch (error) {
      console.error(error);
      setSuggestion([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Search Button
  const handleSearchClick = () => {
    if (isSearchOpen && suggestion.length > 0) {
      setIsSearchOpen(false);
      setSearchterm("");
      setSuggestion([]);
    } else if (searchTerm.trim()) {
      setIsSearchOpen(true);
      fetchSuggestions(searchTerm);
    }
  };

  //Nav links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Series", href: "/tv-series" },
  ];

  return (
    <>
      <motion.header
        className="bg-transparent text-white w-full py-2 z-50 px-4 md:px-10 xl:px-36 absolute top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Desktop Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="flex flex-col items-center">
              <span className="text-2xl md:text-xl lg:text-3xl font-bold text-yellow-400">
                Tarverdyan Projects
              </span>
              <span className="text-xs lg:text-base text-white">
                Movies & TV Series
              </span>
            </Link>
            {/* Mobile Menu Toggle Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-white/80 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Search Bar (Desktop) */}
          <motion.div className="relative w-full md:w-1/3 md:mx-8 hidden md:block">
            <input
              type="text"
              placeholder="Quick Search"
              aria-label="Search movies or TV series"
              className="w-full px-4 py-1.5 lg:py-3 bg-white text-sm text-gray-500 focus:outline-none placeholder-gray-500 rounded-xl border border-gray-500 focus:border-white pr-10"
              value={searchTerm}
              onChange={(e) => setSearchterm(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handleSearchClick}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
              ) : isSearchOpen && suggestion.length > 0 ? (
                <X className="w-5 h-5 text-gray-500" />
              ) : (
                <Search className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Animated Suggestions Dropdown */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  className="absolute top-full mt-1 w-full bg-[#18181b] border border-gray-500 rounded-lg shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {suggestion.length > 0 ? (
                    suggestion.map((item: any) => (
                      <Link
                        key={item.id}
                        href={
                          item.media_type === "movie"
                            ? `/movies/${item.id}`
                            : `/tv-series/${item.id}`
                        }
                      >
                        <div className="flex items-center gap-2 p-2 hover:bg-[#252525] rounded-lg cursor-pointer">
                          <Image
                            src={
                              item.poster_path
                                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                : "/default_poster.jpg"
                            }
                            alt={item.title || item.name || "Unnamed"}
                            width={32}
                            height={48}
                            className="w-8 aspect-[2/3] object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="text-sm text-white line-clamp-2 h-10">
                              {item.title || item.name || "Unnamed"}
                            </h3>
                            <p className="text-xs text-gray-400">
                              {(
                                item.release_date || item.first_air_date
                              )?.split("-")[0] || "N/A"}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-2 text-sm text-gray-400 text-center">
                      No Results Found
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-base font-medium relative text-white ${
                  pathname === link.href ? "text-white" : "hover:text-white/80"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-400"
                    layoutId="underline"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden backdrop-blur-xs bg-[rgba(24,24,27,0.95)] z-50 absolute left-0 w-full px-4 py-4"
            >
              {/* Mobile Search Bar */}
              <motion.div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Quick Search..."
                  className="w-full px-4 py-2 bg-white text-gray-500 placeholder-gray-500 rounded-xl border border-gray-500 focus:outline-none focus:border-white pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchterm(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleSearchClick}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                  ) : isSearchOpen && suggestion.length > 0 ? (
                    <X className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Search className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {/* Mobile Suggestions */}
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      className="absolute top-full mt-1 w-full bg-[#18181b] border border-gray-500 rounded-lg shadow-lg z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {suggestion.length > 0 ? (
                        suggestion.map((item: any) => (
                          <Link
                            key={item.id}
                            href={
                              item.media_type === "movie"
                                ? `/movies/${item.id}`
                                : `/tv-series/${item.id}`
                            }
                          >
                            <div className="flex items-center gap-2 p-2 hover:bg-[#252525] rounded-lg cursor-pointer">
                              <Image
                                src={
                                  item.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                    : "/default_poster.jpg"
                                }
                                alt={item.title || item.name || "Unnamed"}
                                width={32}
                                height={48}
                                className="w-8 aspect-[2/3] object-cover rounded"
                              />
                              <div className="flex-1">
                                <h3 className="text-sm text-white line-clamp-2 h-10">
                                  {item.title || item.name || "Unnamed"}
                                </h3>
                                <p className="text-xs text-gray-400">
                                  {(
                                    item.release_date || item.first_air_date
                                  )?.split("-")[0] || "N/A"}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="p-2 text-sm text-gray-400 text-center">
                          No Results Found
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col items-center gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white text-base font-medium hover:text-white/80"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
