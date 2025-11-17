import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ThankYou() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl"
    >
      <div className="bg-white/95 backdrop-blur-xl border-2 border-blue-300 rounded-3xl shadow-2xl overflow-hidden">
        {/* Animated Background */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-16 text-center overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -30, -60],
                }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative z-10"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              AUDITION SUBMITTED!
            </h1>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Sparkles className="w-5 h-5" />
              <p className="text-lg font-semibold">Thank you for your submission</p>
              <Sparkles className="w-5 h-5" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="px-8 py-12 space-y-8 bg-white">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">What happens next?</h2>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-blue-900">Please wait 4 to 6 months</strong> while we carefully review all auditions. 
                  We'll contact you via email with the results. Make sure to check your inbox regularly!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-purple-900 mb-2">We appreciate your patience</h2>
                <p className="text-gray-700 leading-relaxed">
                  As an independent, faith-based initiative, we're taking our time to ensure we find the right members 
                  who share our vision of spreading the gospel through music. Thank you for understanding!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
              If you have any questions, feel free to reach out to the parent email you provided. 
              We'll be in touch soon! 🙏✨
            </p>
            
            <Link 
              to={createPageUrl("Home")}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              RETURN HOME
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
