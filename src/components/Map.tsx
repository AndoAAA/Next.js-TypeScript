"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const markers: {
  position: [number, number];
  title: string;
  sutitle: string;
  image: string;
}[] = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    sutitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/assets/map/1.png",
  },
  {
    position: [32.9748, -118.3356],
    title: "Location 2",
    sutitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/assets/map/2.png",
  },
  {
    position: [34.0211, -118.3965],
    title: "Location 3",
    sutitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/assets/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/assets/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full"
      id="contact"
    >
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        scrollWheelZoom={true}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <div className="max-w-[200px]">
                <Image
                  src={marker.image}
                  alt={marker.title}
                  width={200}
                  height={100}
                  className="rounded mb-2"
                  priority
                  unoptimized
                />
                <h2 className="font-bold text-sm">{marker.title}</h2>
                <p className="text-xs text-gray-600">{marker.sutitle}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
