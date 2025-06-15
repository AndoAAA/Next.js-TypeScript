"use client";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: isMobile ? "center" : "left",
        gap: 6,
      }}
    >
      {/* Տեքստային հատված */}
      <Box
        sx={{
          maxWidth: 700,
          flex: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#e0ae1d",
          }}
        >
          About Us
        </Typography>

        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{ fontWeight: 600, mb: 3 }}
        >
          Focused on Excellence In Every Project
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            lineHeight: 1.8,
            mb: 4,
            color: "#555",
          }}
        >
          Our unwavering commitment to excellence drives every project we
          undertake. From concept to completion, we meticulously craft solutions
          that embody quality, precision, and innovation.
        </Typography>

        <Image
          src="/assets/img/about/signature.svg"
          width={154}
          height={38}
          alt="signature"
          style={{ marginBottom: 8 }}
        />

        <Typography
          variant="subtitle1"
          sx={{ mb: 4, fontStyle: "italic", color: "#888" }}
        >
          Company CEO
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
            "&:hover": {
              backgroundColor: "#c8961a",
            },
          }}
          endIcon={<LaunchIcon />}
        >
          Contact Us
        </Button>
      </Box>

      {/* Նկար */}
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          flex: 1,
          mt: isMobile ? 6 : 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="/assets/img/about/img.jpg"
          width={400}
          height={300}
          alt="team photo"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 16,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
