"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleClick = (card: Card) => {
    setSelectedCards(prev => 
      prev.includes(card.id) 
        ? prev.filter(id => id !== card.id) 
        : [...prev, card.id]
    );
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn(
            card.className,
            "relative overflow-hidden rounded-xl cursor-pointer",
            selectedCards.includes(card.id) ? "ring-4 ring-pink-500" : ""
          )}
          onClick={() => handleClick(card)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ImageComponent card={card} />
          <div className={cn(
            "absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center",
            selectedCards.includes(card.id) ? "opacity-100" : "opacity-0"
          )}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedCards.includes(card.id) ? 1 : 0 }}
              className="text-white text-2xl font-bold"
            >
              Selected
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {card.content}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      alt="thumbnail"
    />
  );
};