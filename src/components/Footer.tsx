import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.tarverdyan-projects.com/"
          target="_blank"
          className="text-[#a91f64] hover:underline hover:font-bold"
        >
          www.tarverdyan-projects.com
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
