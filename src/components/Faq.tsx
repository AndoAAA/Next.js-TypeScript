"use client";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "Timelines vary based on project size and complexity.",
  },
  {
    title: "Do I need permits for my project?",
    description: "Yes, and we help manage the permit process for you.",
  },
  {
    title: "What materials do you use?",
    description:
      "We use high-quality, sustainable materials suitable for each project.",
  },
  {
    title: "Can I make changes after construction starts?",
    description:
      "Minor changes can be accommodated but may impact timeline and cost.",
  },
  {
    title: "How much will my construction project cost?",
    description:
      "Costs depend on scope, materials, and design preferences. We provide transparent estimates.",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description:
      "Our team follows strict safety protocols and quality checks at every stage.",
  },
];

const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeInOut",
    },
  }),
};

const Faq = () => {
  return (
    <Box
      id="faq"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "#f5f7fa",
      }}
    >
      <Box maxWidth="900px" mx="auto" textAlign="center" mb={6}>
        <Typography
          variant="h6"
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
          FAQ
        </Typography>
        <Typography variant="h3" fontWeight={700} mb={2}>
          Got Questions? We've Got You Covered
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="700px"
          mx="auto"
        >
          From project planning to final touches, we've answered the most common
          questions to help you make informed decisions.
        </Typography>
      </Box>

      <Box maxWidth="900px" mx="auto">
        {faqItemsData.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={faqItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion
              sx={{
                backgroundColor: "#fff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                borderRadius: 2,
                mb: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ fontWeight: 600 }}
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails sx={{ color: "text.secondary" }}>
                {item.description}
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
