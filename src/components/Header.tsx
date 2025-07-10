"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  Drawer,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";
import Link from "next/link";
import "./style.css"; // assumes .nav-link and .active classes are styled here

const links = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Services", path: "services" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Sticky shadow effect
  const trigger = useScrollTrigger({ threshold: 10 });

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.path);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.path);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backgroundColor: "#333",
        py: 2,
        px: { xs: 2, md: 6 },
        boxShadow: trigger ? "0 2px 10px rgba(0,0,0,0.25)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="UrbanBuild logo"
            width={180}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.path}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className={`nav-link ${
                activeSection === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </Box>

        {/* Desktop CTA Button */}
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundColor: "#ffc221",
            color: "#000",
            fontWeight: 600,
            px: 3,
            "&:hover": {
              backgroundColor: "#e0ae1d",
            },
          }}
          endIcon={<LaunchIcon />}
        >
          Get a Quote
        </Button>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "#222",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#fff" }}
            aria-label="Close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {links.map((link, index) => (
            <ListItem key={index} sx={{ justifyContent: "center" }}>
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                className={`nav-link ${
                  activeSection === link.path ? "active" : ""
                }`}
                onClick={() => setTimeout(() => setDrawerOpen(false), 300)}
              >
                {link.name}
              </ScrollLink>
            </ListItem>
          ))}
          <ListItem sx={{ justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#ffc221",
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
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
