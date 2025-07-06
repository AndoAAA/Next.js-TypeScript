"use client";

import { Box, Button, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import Image from "next/image";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      sx={{
        width: "100%",
        py: 10,
        px: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        maxWidth="1200px"
        mx="auto"
        px={2}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={6}
        alignItems="center"
        mb={10}
      >
        {/* Text content */}
        <Box flex={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#e0ae1d",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
              mb: 3,
              fontSize: { xs: "1.25rem", md: "1.75rem" },
              textAlign: "center",
              display: "inline-block",
              position: "relative",
              "&::before, &::after": {
                content: '"•"',
                color: "#e0ae1d",
                mx: 1.5,
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                position: "relative",
                top: "5px",
              },
            }}
          >
            Testimonials
          </Typography>

          <Typography variant="h3" fontWeight={700} mb={2}>
            Built On Trust, Proven By Results
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="600px"
            mb={3}
            mx={{ xs: "auto", md: 0 }}
          >
            From homes to commercial spaces, our clients share their experiences
            of working with us. See how we've helped them bring their dreams to
            life with expert craftsmanship.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#e0ae1d",
              color: "#000",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#c8961a",
              },
            }}
            endIcon={
              <LaunchIcon
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "4px",
                }}
              />
            }
          >
            Work with us
          </Button>
        </Box>

        {/* Image with overlay */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 250, md: 400 },
            flex: 1,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src="/assets/img/testimonials/img.jpg"
            alt="Testimonials"
            fill
            style={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
            }}
          />
        </Box>
      </Box>

      {/* Slider Section */}
      <Box maxWidth="900px" mx="auto" textAlign="center">
        <Image
          src="/assets/img/testimonials/quote.svg"
          width={54}
          height={36}
          alt="Quote"
          style={{ marginBottom: 16 }}
        />
        <Slider />
      </Box>
    </Box>
  );
};

export default Testimonials;
