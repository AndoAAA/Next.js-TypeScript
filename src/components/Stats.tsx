"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CountUp from "react-countup";

const statsData = [
  { endCountNum: 99, endCountText: "%", text: "Client Satisfaction" },
  { endCountNum: 800, endCountText: "+", text: "Successful Projects" },
  { endCountNum: 32, endCountText: "k", text: "Happy Clients" },
  { endCountNum: 26, endCountText: "+", text: "Years of Experience" },
];

const Stats = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 6,
        }}
      >
        {statsData.map((item, index) => {
          const { ref, inView } = useInView({
            threshold: 0.3,
            triggerOnce: false,
          });

          return (
            <Box
              ref={ref}
              key={index}
              sx={{
                textAlign: "center",
                flex: 1,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "#e0ae1d",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    duration={2.5}
                    redraw={true}
                  />
                ) : (
                  "0"
                )}{" "}
                {item.endCountText}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  color: "#444",
                  mt: 1,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Stats;
