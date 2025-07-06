import { Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const socials = [
  {
    icon: <FacebookIcon />,
    path: "https://facebook.com",
  },
  {
    icon: <YouTubeIcon />,
    path: "https://youtube.com",
  },
  {
    icon: <TwitterIcon />,
    path: "https://twitter.com",
  },
  {
    icon: <InstagramIcon />,
    path: "https://instagram.com",
  },
];

const Socials = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {socials.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", transition: "color 0.3s" }}
        >
          <Box
            sx={{
              "&:hover": {
                color: "#fff",
              },
              display: "flex",
              alignItems: "center",
            }}
          >
            {item.icon}
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Socials;
