import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroAnimation() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 flex items-center justify-center overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border-2 border-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Logo Animation */}
      {showText && (
        <div className="relative z-10 px-8">
          <div className="text-center">
            {/* "NEW" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <motion.h1
                className="text-8xl md:text-9xl font-black text-white"
                style={{ 
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                  filter: "drop-shadow(0 0 40px rgba(59,130,246,0.6))"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
              >
                {"NEW".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.15,
                      duration: 0.5,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* "ACADEMY" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                {["A", "C", "A", "D", "E", "M", "Y"].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block text-white"
                    initial={{ opacity: 0, y: 20, scaleY: 0 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    transition={{
                      delay: 1.4 + i * 0.08,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    style={{
                      transformOrigin: "bottom",
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      letterSpacing: "-0.02em",
                      filter: "drop-shadow(0 0 40px rgba(59,130,246,0.6))"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Underline */}
            <motion.div
              className="mx-auto mt-6"
              style={{ width: "80%", maxWidth: "600px" }}
            >
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 0.8,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                style={{ transformOrigin: "center" }}
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
