"use client";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { BackgroundBeams } from "./background-beams";
import { TextGenerateEffect } from "./text-generate-effect";

export function ModernHero() {
  const words = "Empowering Your Business with Scalable IT Solutions";

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-50/20 to-slate-50 dark:from-transparent dark:via-slate-950/20 dark:to-slate-950"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 dark:bg-blue-950/50 backdrop-blur-sm px-6 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <Sparkles size={16} className="text-blue-500" />
            ISO 27001 Certified | 24/7 Support
            <BadgeCheck size={16} className="text-blue-500" />
          </div>
        </motion.div>

        {/* Main Heading with Text Generate Effect */}
        <div className="mb-8">
          <TextGenerateEffect
            words={words}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent"
          />
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12"
        >
          We offer comprehensive IT services including cloud solutions, DevOps,
          cybersecurity, enterprise software, and tech consulting to help your
          business scale securely and efficiently.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link to="/get-a-quote">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </Link>
          
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Preview Image with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            {/* Image Container */}
            <div className="relative bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                  alt="IT Solutions Dashboard Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}