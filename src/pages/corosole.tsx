"use client";
import "../app/globals.css";
import * as React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const Console = (): React.JSX.Element => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  const carouselItems = [
    { src: "/assets/corosole/1.png", content: "Holistic care for your body, mind, and soul" },
    { src: "/assets/corosole/2.png", content: "Gentle and effective remedies for all ages" },
    { src: "/assets/corosole/3.jpeg", content: "Safe, natural treatments for chronic conditions" },
    { src: "/assets/corosole/4.jpeg", content: "Boost your immunity with homeopathy" },
    { src: "/assets/corosole/5.jpg", content: "Personalized solutions for your unique health needs" },
  ];

  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setMaxDrag(containerWidth - carouselWidth);
    }
  }, []);

  return (
    <div className="bg-gray-50 w-full h-screen flex items-center justify-center">
      <div ref={containerRef} className="relative w-full max-w-[1440px] overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-3 sm:gap-6 px-2 sm:px-4"
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }}
          dragElastic={0.2}
          whileTap={{ cursor: "grabbing" }}
        >
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%] flex flex-col items-center gap-3 sm:gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <motion.img
                src={item.src}
                alt={`Homeopathy Image ${index + 1}`}
                className="w-full min-h-[250px] sm:min-h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-lg pointer-events-none select-none"
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-800 select-none">
                {item.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Console;
