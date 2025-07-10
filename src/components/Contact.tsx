"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundImage: "url('/assets/img/hero/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Optional dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      <Box
        maxWidth="1200px"
        mx="auto"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="flex-start"
        gap={{ xs: 6, md: 8 }}
        px={2}
        position="relative"
        zIndex={2}
      >
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#e0ae1d",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                mb: 1,
              }}
            >
              • Contact •
            </Typography>
            <Typography variant="h3" fontWeight={700} mb={2} lineHeight={1.3}>
              Request A Quote
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              maxWidth="500px"
              lineHeight={1.7}
            >
              Ready to bring your project to life? Share your ideas with us, and
              we’ll get back to you within 24 hours with expert advice and a
              personalized quote tailored to your goals.
            </Typography>
          </Box>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
            }}
          >
            <Form />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Contact;
