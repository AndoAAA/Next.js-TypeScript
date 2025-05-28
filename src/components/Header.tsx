"use client";

import React from "react";
import { Box, Button, List, ListItem } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

const Header = () => {
  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#333",
        py: 2,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, md: 6 },
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Link href="">
          <Image src="/assets/logo.svg" alt="logo" width={230} height={48} />
        </Link>
      </Box>
      {/* Nav Links */}
      <List
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          m: 0,
          p: 0,
          flexWrap: "wrap",
        }}
      >
        {links.map((link, index) => (
          <ListItem key={index} sx={{ width: "auto", p: 0 }}>
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              className="nav-link"
            >
              {link.name} /
            </ScrollLink>
          </ListItem>
        ))}
      </List>

      {/* CTA Button */}
      <Button
        variant="contained"
        sx={{
          mt: { xs: 2, md: 0 },
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#e0ae1d",
          },
        }}
        endIcon={<LaunchIcon />}
      >
        Get a Quote
      </Button>
    </Box>
  );
};

export default Header;
