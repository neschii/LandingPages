"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
 
export default function PageContent() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-zinc-200 text-center">
          Grandes momentos começam com um simples clique.
        </div>
        <div className="font-extralight text-base md:text-4xl text-yellow-400 py-4">
          Viva a experiência
        </div>
        <button className="bg-yellow-400 rounded-full w-fit text-black dark:text-black px-8 py-2">
          Ingressar
        </button>
      </motion.div>
    </AuroraBackground>

  );
}