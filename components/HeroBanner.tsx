"use client";

import React from "react";
import { motion } from "framer-motion";

function HeroBanner() {
  const text = "Portfolio";

  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute md:top-1/6 top-1/4 md:right-1/4 right-0 md:w-96 w-64 md:h-96 h-64 bg-greenLight opacity-70 blur-3xl rounded-full pointer-events-none z-0"></div>
      <div className="md:w-1/3 w-3/4 flex">
        <div className="bg-whiteSmoked px-3 rounded-2xl border border-black font-geo text-2xl">
          <h3>PABLO ORTEGA</h3>
        </div>
      </div>
      <div>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="font-londrinaSketch md:text-9xl text-7xl inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: index * 0.2,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="md:w-1/3 w-3/4 flex md:gap-6 gap-2 text-sm">
        {["C / C++", "Matlab", "Next.js"].map((skill, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center md:gap-5 gap-2 bg-whiteSmoked md:px-3 px-2 rounded-2xl border border-black font-geo text-xl"
          >
            <h3>{skill}</h3>
            <div className="w-3 h-3 bg-greenLight opacity-80 shadow shadow-greenLight/50 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;