"use client";

import { Box, Typography, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        width: "100%",
        height: { xs: "600px", md: "800px" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src="/assets/img/hero/bg.jpg"
        alt="Hero background construction"
        fill
        quality={100}
        priority
        style={{ objectFit: "cover", zIndex: -2 }}
      />

      {/* Overlay Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Box sx={{ maxWidth: "900px", px: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#e0ae1d",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontWeight: 600,
            mb: 1,
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          • Welcome to UrbanBuild •
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2.2rem",
              sm: "2.8rem",
              md: "3.5rem",
              lg: "4rem",
            },
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: "#e0ae1d" }}>Building</span> Robust, Lasting
          Solutions
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.25rem",
            },
            mb: 4,
            color: "#f0f0f0",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          From concept to completion, we ensure every detail is optimized for
          strength and endurance—creating spaces that inspire confidence and
          stand the test of time.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#ffc221",
            color: "#000",
            fontWeight: 600,
            borderRadius: "8px",
            px: 4,
            py: 1.5,
            "&:hover": {
              backgroundColor: "#e0ae1d",
            },
          }}
          endIcon={<LaunchIcon />}
        >
          See Our Work
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
