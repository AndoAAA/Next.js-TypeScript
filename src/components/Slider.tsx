"use client";

import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Slider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });

      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  }, [swiperInstance]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 630,
        mx: "auto",
        position: "relative",
        "& .swiper-pagination-bullet": {
          backgroundColor: "#ccc",
          opacity: 1,
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "#ffc221",
        },
      }}
    >
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        style={{ width: "100%", height: 300 }}
      >
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundColor: "#f9f9f9",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <Image
                src="/assets/img/testimonials/avatar.jpg"
                width={60}
                height={60}
                alt="Avatar"
                style={{ borderRadius: "50%", marginBottom: 16 }}
              />
              <Typography variant="body1" fontWeight={500} mb={1}>
                Exceeded expectations. On time, within budget and top-quality
                work. Highly recommend!
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
                Jane Doe
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      {!isMobile && (
        <>
          <IconButton
            ref={prevRef}
            aria-label="Previous slide"
            disabled={isBeginning}
            sx={{
              position: "absolute",
              top: "50%",
              left: -40,
              transform: "translateY(-50%)",
              bgcolor: isBeginning ? "#f0e6a0" : "#ffc221",
              color: isBeginning ? "#999" : "#000",
              boxShadow: isBeginning ? "none" : "0 2px 8px rgba(0,0,0,0.2)",
              cursor: isBeginning ? "default" : "pointer",
              "&:hover": {
                bgcolor: isBeginning ? "#f0e6a0" : "#e0ae1d",
              },
              zIndex: 10,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            ref={nextRef}
            aria-label="Next slide"
            disabled={isEnd}
            sx={{
              position: "absolute",
              top: "50%",
              right: -40,
              transform: "translateY(-50%)",
              bgcolor: isEnd ? "#f0e6a0" : "#ffc221",
              color: isEnd ? "#999" : "#000",
              boxShadow: isEnd ? "none" : "0 2px 8px rgba(0,0,0,0.2)",
              cursor: isEnd ? "default" : "pointer",
              "&:hover": {
                bgcolor: isEnd ? "#f0e6a0" : "#e0ae1d",
              },
              zIndex: 10,
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default Slider;
