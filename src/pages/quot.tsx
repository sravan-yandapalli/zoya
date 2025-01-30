"use client";

import { motion } from "framer-motion";

export default function QuoteCard() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6 mb-20"
      style={{
        backgroundImage: 'url("/assets/fotter/ko.png")', // replace with your image URL
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg bg-white rounded-2xl shadow-lg p-6 text-center"
      >
        <motion.p
          className="text-lg font-semibold text-gray-800 italic"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          &quot;Homeopathy cures a larger percentage of cases than any other method of treatment and is beyond doubt safer and more economical and most complete medical science.&quot;
        </motion.p>
        <h3 className="mt-4 text-xl font-bold text-lavender-700">— Mahatma Gandhi</h3>
      </motion.div>
    </div>
  );
}
