import React from "react";
import { Link } from "react-scroll";

type LinkType = {
  path: string;
  name: string;
  offset: number;
};

type NavProps = {
  containerStyles?: string;
  linkStyles?: string;
};

const links: LinkType[] = [
  { path: "home", name: "home", offset: -50 },
  { path: "menu", name: "menu", offset: -50 },
  { path: "about", name: "about", offset: -150 },
  { path: "contact", name: "contact", offset: 0 },
];

const Nav: React.FC<NavProps> = ({ containerStyles = "", linkStyles = "" }) => {
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          className={linkStyles}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
