"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export default function Reveal({ children, delay = 0, className = "", yOffset = 30 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(10px)", scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

