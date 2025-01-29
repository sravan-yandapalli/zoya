"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/app/globals.css";

const images = [
  "/assets/cover/slide1.png",
  "/assets/cover/slide2.png",
  "/assets/cover/slide3.png",
  "/assets/cover/slide4.png",
];

export const PediatricsCover = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#E6E6FA] via-[#D8BFD8] to-[#C8A2C8] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Pediatrics Slide"
          className="absolute w-full h-full object-cover brightness-95"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <motion.div 
        className="absolute bg-white bg-opacity-50 text-black p-10 rounded-2xl text-center shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
         <motion.h1 
          className="text-5xl font-extrabold tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          ZOYA HOMEO CARE
        </motion.h1>
        <br/>
        <motion.h1 
          className="text-4xl font-extrabold tracking-wide drop-shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
         " PEDIATRIC "
        </motion.h1>
        <motion.p 
          className="text-2xl mt-4 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          Dedicated to children's health, covering diagnosis, treatment, and preventive care
        </motion.p>
      </motion.div>
    </div>
  );
}

export default PediatricsCover;

