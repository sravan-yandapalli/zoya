"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+917075367929"; // Replace with your WhatsApp number
  const message = "Hello, Just Text this Number for Online consultation"; // Replace with your message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Hover state
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="fixed bottom-10 right-6 z-50 flex flex-col items-center"
    >
      {/* Message Text */}
      <div className="mb-2 text-purple-600 text-lg font-regular">
        Online Appointment
      </div>
      
      {/* WhatsApp Button */}
      <div
        className={`p-4 bg-green-500 text-white rounded-full shadow-lg transition-all duration-300 
          ${hover ? "scale-110 shadow-xl" : "scale-100 shadow-lg"}`}
        onClick={() => window.open(whatsappLink, "_blank")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <FaWhatsapp className="text-4xl" />
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;
