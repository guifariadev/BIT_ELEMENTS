"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CardStack({
  items,
  offset = 10,
  scaleFactor = 0.06,
}) {
  const [cards, setCards] = useState(items);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCards((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setVisible(true);
      }, 100); // tempo da animação de saída
    }, 4000); // tempo entre trocas

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-[500px]">
      {cards.map((card, index) => {
        const translateY = index * offset;
        const scale = 1 - index * scaleFactor;
        const rotate = index * 1.5;
        const isTop = index === 0;

        return (
          <AnimatePresence key={card.id}>
            {(!isTop || visible) && (
              <motion.div
                key={card.id + "-" + card.name}
                layout
                initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                animate={{
                  opacity: 1,
                  y: translateY,
                  scale,
                  rotateX: rotate,
                  filter: "blur(0px)", // LIMPA o blur ao entrar
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(6px)",
                  pointerEvents: "none",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute w-full h-full bg-zinc-900 text-white shadow-2xl rounded-xl p-6 overflow-hidden"
                style={{
                  zIndex: cards.length - index,
                  transformOrigin: "top center",
                }}
              >
                <div className="font-bold text-lg">{card.name}</div>
                <div className="text-sm mt-2">{card.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
}
