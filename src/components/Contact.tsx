"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box
      id="contact"
      component="section"
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
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
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
        {/* Text Column */}
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
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
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
              sx={{
                maxWidth: 500,
                lineHeight: 1.7,
              }}
            >
              Ready to bring your project to life? Share your ideas with us, and
              we’ll get back to you within 24 hours with expert advice and a
              personalized quote tailored to your goals.
            </Typography>
          </Box>
        </motion.div>

        {/* Form Column */}
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
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
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
