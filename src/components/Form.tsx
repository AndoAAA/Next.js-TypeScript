"use client";

import React, { useState } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const services = [
  { value: "construction", label: "Construction" },
  { value: "renovation", label: "Renovation" },
  { value: "restoration", label: "Restoration" },
  { value: "consulting", label: "Consulting" },
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    // TODO: Add Firebase or email sending here

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    alert("Thank you! We'll be in touch.");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 600,
        mx: "auto",
        p: 2,
      }}
    >
      <TextField
        label="Full Name *"
        name="name"
        fullWidth
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />

      <TextField
        label="Email Address *"
        name="email"
        type="email"
        fullWidth
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        label="Phone Number"
        name="phone"
        type="tel"
        fullWidth
        variant="outlined"
        value={formData.phone}
        onChange={handleChange}
      />

      <TextField
        select
        label="Select a Service"
        name="service"
        value={formData.service}
        onChange={handleChange}
        fullWidth
      >
        {services.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Message *"
        name="message"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        value={formData.message}
        onChange={handleChange}
      />

      <Button
        type="submit"
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
          alignSelf: "flex-start",
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
              fontSize: 20,
              p: 0.5,
            }}
          />
        }
      >
        Work with us
      </Button>
    </Box>
  );
};

export default Form;
