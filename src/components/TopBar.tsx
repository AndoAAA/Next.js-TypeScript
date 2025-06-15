import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Socials from "./Socials";

const TopBar = () => {
  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "#ffc221",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        px: { xs: 2, sm: 6 },
        flexWrap: "wrap",
      }}
    >
      {/* Contact Info - Hidden on mobile */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon sx={{ color: "black" }} />
          <Typography sx={{ color: "black" }}>+1 (555) 000-0000</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon sx={{ color: "black" }} />
          <Typography sx={{ color: "black" }}>urban@construct.com</Typography>
        </Box>
      </Box>

      {/* Social Icons - Centered on mobile */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          width: { xs: "100%", sm: "auto" },
          mt: { xs: 1, sm: 0 },
        }}
      >
        <Socials />
      </Box>
    </Box>
  );
};

export default TopBar;
