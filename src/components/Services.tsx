"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill size={20} />,
    title: "Construction Services",
    description:
      "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill size={20} />,
    title: "Renovation Services",
    description:
      "Revitalizing spaces with modern designs and high-quality craftsmanship. Whether upgrading a home or remodeling an office, we bring fresh life to every project.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill size={20} />,
    title: "Restoration Services",
    description:
      "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    serviceList: [
      "Historical Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill size={20} />,
    title: "Consulting Services",
    description:
      "Providing expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainability, our consulting services ensure project success.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");

  return (
    <Box
      id="services"
      sx={{
        width: "100%",
        backgroundColor: "#f7f9fc",
        py: 10,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" mb={2} fontWeight={700}>
              Solutions We Provide
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              maxWidth="800px"
              mx="auto"
            >
              Offering tailored construction solutions, from planning to
              completion, with a focus on quality and innovation.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="tabsList">
              {serviceData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className={`tabTrigger ${
                    activeTab === item.name ? "tabTriggerActive" : ""
                  }`}
                >
                  {item.icon}
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 4,
                      alignItems: "flex-start",
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                      p: { xs: 3, md: 4 },
                      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <Box flex={1}>
                      <Typography variant="h5" mb={2} fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" mb={3}>
                        {item.description}
                      </Typography>
                      <ul
                        style={{
                          paddingLeft: "1rem",
                          listStyleType: "disc",
                          color: "#333",
                          fontSize: "1rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.serviceList.map((service, index) => (
                          <li key={index} style={{ marginBottom: "6px" }}>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Box
                      flex={1}
                      display="flex"
                      flexWrap="wrap"
                      gap={2}
                      justifyContent="center"
                    >
                      {item.thumbs.map((thumb, idx) => (
                        <Image
                          key={idx}
                          src={thumb.url}
                          alt={`${item.name} thumb ${idx}`}
                          width={280}
                          height={180}
                          style={{
                            borderRadius: "12px",
                            objectFit: "cover",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                          }}
                          className="hover:scale-105 hover:shadow-lg"
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Services;
