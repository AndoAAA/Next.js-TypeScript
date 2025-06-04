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
        alt="Hero background"
        fill
        style={{ objectFit: "cover", zIndex: -2 }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />

      {/* Overlay Content */}
      <Box sx={{ maxWidth: "900px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3.5rem",
              lg: "4rem",
            },
            mb: 2,
          }}
        >
          <span style={{ color: "#e0ae1d" }}>Building</span> robust lasting
          solutions
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
          }}
        >
          From concept to completion, we ensure every detail is optimized for
          strength and endurance, creating solutions that inspire confidence and
          stand firm for years.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#e0ae1d",
            color: "#000",
            "&:hover": {
              backgroundColor: "#c8961a",
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
