"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiSendPlane2Fill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        py: 8,
        px: 3,
      }}
    >
      <Box
        maxWidth="1200px"
        mx="auto"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
      >
        {/* Logo & description */}
        <Box flex={1}>
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={200}
              height={40}
              alt="logo"
              style={{ marginBottom: 16 }}
            />
          </Link>
          <Typography variant="body2" color="grey.400" lineHeight={1.7}>
            We turn your vision into reality through expert craftsmanship,
            tailored solutions, and innovative designs — delivering every
            project on time and beyond expectations.
          </Typography>
        </Box>

        {/* Contact info */}
        <Box flex={1}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            📍 Contact
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <RiMapPin2Fill color="#ffc221" />
              <Typography>1250 Brickstone Ave, US</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <RiPhoneFill color="#ffc221" />
              <Typography>+123-456-78-90</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <RiMailFill color="#ffc221" />
              <Typography>email@urbanbuild.com</Typography>
            </Box>
          </Box>
        </Box>

        {/* Newsletter */}
        <Box flex={1}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            📨 Newsletter
          </Typography>
          <Typography variant="body2" mb={2} color="grey.400">
            Subscribe to get the latest updates and special offers directly to
            your inbox.
          </Typography>
          <Box display="flex" gap={1}>
            <TextField
              placeholder="Your Email"
              variant="filled"
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                input: { color: "#000" },
                flex: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffc221",
                color: "#000",
                minWidth: "40px",
                p: 1.5,
                "&:hover": { backgroundColor: "#e0ae1d" },
              }}
            >
              <RiSendPlane2Fill size={20} />
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Bottom copyright */}
      <Box textAlign="center" mt={6} fontSize={14} color="grey.500">
        © {new Date().getFullYear()} UrbanBuild. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
