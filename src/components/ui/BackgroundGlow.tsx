"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="glow-container">
      {/* Warm Gold Glow */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-glow-coral) 0%, transparent 70%)" }}
      />

      {/* Pale Gold Glow */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-glow-gold) 0%, transparent 70%)" }}
      />

      {/* Subtle Indigo Glow */}
      <motion.div
        animate={{
          x: [0, 30, -50, 0],
          y: [0, 60, 20, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-glow-indigo) 0%, transparent 70%)" }}
      />
    </div>
  );
}
