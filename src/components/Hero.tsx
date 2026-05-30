"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 px-8 lg:px-20 py-24 items-center gap-20">
      
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <p className="text-yellow-400 tracking-[8px] uppercase mb-4">
          Elite Sportswear
        </p>

        <h1 className="text-7xl font-black leading-none">
          DOMINATE <br /> EVERY GAME
        </h1>

        <p className="text-gray-400 mt-6">
          High-performance football boots & athletic gear.
        </p>
      </motion.div>

      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        className="rounded-2xl"
      />
    </section>
  );
}