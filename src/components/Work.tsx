"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Expert restoration of heritage and damaged buildings.",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Modern renovation services tailored to your needs.",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Professional consulting for every stage of the project.",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "High-quality construction from start to finish.",
    href: "",
  },
];

const Work = () => {
  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        backgroundColor: "#f2f4f8",
        py: 10,
        px: 2,
      }}
    >
      <Box maxWidth="1200px" mx="auto" textAlign="center" mb={6} px={2}>
        <Typography
          variant="h3"
          fontWeight={700}
          mb={2}
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
          Our Work
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={1}>
          Discover Our Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="700px"
          mx="auto"
        >
          Providing expert services designed to deliver quality and innovation
          in every project we undertake.
        </Typography>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr",
        }}
        gap={4}
        maxWidth="1200px"
        mx="auto"
        px={2}
      >
        {workData.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                "& .overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Image
              src={item.img}
              alt={item.name}
              width={600}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                bgcolor: "rgba(0,0,0,0.8)",
                color: "#fff",
                p: 2,
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease",
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CheckCircleIcon sx={{ color: "#ffc221", fontSize: 20 }} />
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Work;
