"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type CarouselProps = {
  children: ReactNode;
  showDots?: boolean; // 👈 optional prop
};

export default function Carousel({
  children,
  showDots = true, // 👈 default: visible
}: CarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      loop
      pagination={
        showDots
          ? { clickable: true }
          : false
      }
      style={{
        // 👇 CUSTOM DOT COLORS
        ["--swiper-pagination-color" as string]: "#4CAF4F", // active dot
        ["--swiper-pagination-bullet-inactive-color" as string]:
          "#C8E6C9",
        ["--swiper-pagination-bullet-inactive-opacity" as string]: "1",
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        : <SwiperSlide>{children}</SwiperSlide>}
    </Swiper>
  );
}
