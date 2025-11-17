import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sparkles, Music, Eye, Mic, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "../components/IntroAnimation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const roles = [
    {
      title: "Main Vocalist",
      icon: Mic,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/40",
      description: "Carry the vocal backbone of the group with powerful, stable vocals. Handle the most challenging vocal parts.",
    },
    {
      title: "Main Dancer",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/40",
      description: "Lead the group's choreography with precision, power, and grace. The main dancer sets the standard for performance.",
    },
    {
      title: "Main Rapper",
      icon: Music,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/40",
      description: "Deliver powerful rap verses with flow, rhythm, and attitude. Bring energy and edge to the group's sound.",
    },
    {
      title: "Main Visualizer",
      icon: Eye,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/40",
      description: "Embody the group's visual concept and brand image. Capture attention through stage presence and visuals.",
    },
    {
      title: "All-Rounder",
      icon: Sparkles,
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      description: "Excel in multiple areas - singing, dancing, and presence. The versatile member who can adapt to any role.",
      crossed: true,
    }
  ];

  if (showIntro) {
    return <IntroAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
      {/* Mysterious floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-blue-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        {/* Fog effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Hero Section */}
            <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
              
              {/* Main Content */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative z-10 text-center"
              >
                {/* Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="relative inline-block">
                    <motion.div 
                      className="text-8xl md:text-9xl font-black text-white mb-2 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" 
                      style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.02em" }}
                      animate={{
                        textShadow: [
                          "0 0 30px rgba(59,130,246,0.5)",
                          "0 0 50px rgba(59,130,246,0.8)",
                          "0 0 30px rgba(59,130,246,0.5)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      NEW
                    </motion.div>
                    <div className="text-7xl md:text-8xl font-black text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.02em" }}>
                      ACADEMY
                    </div>
                  </div>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-orange-400 text-2xl md:text-3xl mb-3 font-bold italic drop-shadow-lg"
                >
                  2025 Online Auditions
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-blue-300 text-xl md:text-2xl mb-12 font-semibold italic drop-shadow-lg"
                  style={{ fontFamily: "'Brush Script MT', cursive" }}
                >
                  Using talent for God's glory
                </motion.p>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Link 
                    to={createPageUrl("Audition")}
                    className="group relative inline-block"
                  >
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
                    <button className="relative px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-lg rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                      <Sparkles className="w-6 h-6" />
                      START YOUR AUDITION
                      <Sparkles className="w-6 h-6" />
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-16 animate-bounce"
                >
                  <p className="text-blue-300/60 text-sm mb-2">Scroll to learn more</p>
                  <div className="w-6 h-10 border-2 border-blue-400/40 rounded-full mx-auto flex justify-center">
                    <div className="w-1 h-3 bg-blue-400/60 rounded-full mt-2 animate-pulse" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Roles Section */}
            <div className="relative py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    WE NEED A...
                  </h2>
                  <p className="text-blue-300/80 text-lg max-w-2xl mx-auto font-semibold">
                    The fifth member was chosen—but who are the other four?
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {roles.map((role, index) => (
                    <motion.div
                      key={role.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={role.crossed ? {} : { y: -10, scale: 1.02 }}
                      className={`group relative ${role.crossed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${role.color} ${role.crossed ? 'opacity-0' : 'opacity-0 group-hover:opacity-20'} blur-xl transition-opacity duration-500 rounded-3xl`} />
                      <div className={`relative h-full ${role.bgColor} backdrop-blur-lg border-2 ${role.borderColor} rounded-3xl p-8 ${role.crossed ? '' : 'hover:border-opacity-80 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'} transition-all duration-500 ${role.crossed ? 'bg-gray-800/20' : ''}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 ${role.crossed ? '' : 'group-hover:scale-110'} transition-transform duration-300 shadow-lg ${role.crossed ? 'grayscale' : ''}`}>
                          <role.icon className={`w-8 h-8 ${role.crossed ? 'text-gray-500' : 'text-white'}`} />
                        </div>
                        <h3 className={`text-2xl font-black ${role.crossed ? 'text-gray-500 line-through' : 'text-white'} mb-4`}>
                          {role.title}
                        </h3>
                        <p className={`${role.crossed ? 'text-gray-600 line-through' : 'text-blue-200/80'} leading-relaxed font-medium`}>
                          {role.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-16"
                >
                  <div className="mb-6">
                    <p className="text-white font-bold text-xl mb-2">Ages: 12-14 (boys)</p>
                    <p className="text-orange-400 font-bold text-xl">Deadline: April 20, 2026</p>
                  </div>
                  <Link 
                    to={createPageUrl("Audition")}
                    className="group relative inline-block"
                  >
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    <button className="relative px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black text-base rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      APPLY NOW
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative py-12 text-center bg-slate-950 border-t border-blue-500/20">
              <p className="text-blue-300/60 text-sm font-semibold">
                © 2025 New Academy. Powered by faith and passion.
              </p>
              <p className="text-blue-300 font-bold text-lg mt-2">
                newacademy.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
