"use client";
import "../app/globals.css";
import * as React from "react";
import { motion } from "framer-motion";

export const Console = (): React.JSX.Element => {
  const carouselItems = [
    { src: "/assets/corosole/1.png", content: "Holistic care for your body, mind, and soul" },
    { src: "/assets/corosole/2.png", content: "Gentle and effective remedies for all ages" },
    { src: "/assets/corosole/3.jpeg", content: "Safe, natural treatments for chronic conditions" },
    { src: "/assets/corosole/4.jpeg", content: "Boost your immunity with homeopathy" },
    { src: "/assets/corosole/5.jpg", content: "Personalized solutions for your unique health needs" },
  ];

  return (
    <div className="bg-gray-50 flex justify-center items-center w-full min-h-screen p-4">
      <div className="relative w-full max-w-[1440px] overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 px-4 py-4" // Reduced py-8 to py-4 to decrease vertical padding
          drag="x"
          dragConstraints={{ left: -800, right: 0 }} // Adjust based on total width
          dragElastic={0.2}
          whileTap={{ cursor: "grabbing" }}
        >
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%] flex flex-col items-center gap-4"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <motion.img
                src={item.src}
                alt={`Homeopathy Image ${index + 1}`}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover rounded-2xl shadow-lg pointer-events-none select-none"
                onDragStart={(e) => e.preventDefault()} // Prevents default drag behavior
                whileHover={{
                  rotate: [0, 2, -2, 0],
                  strokeLinecap: "round"
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-800 select-none">
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
