"use client";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { BackgroundBeams } from "./background-beams";
import { TextGenerateEffect } from "./text-generate-effect";

export function ModernHero() {
  const words = "Transform Your Business with Enterprise-Grade IT Solutions";

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden mt-10">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-50/20 to-slate-50 dark:from-transparent dark:via-slate-950/20 dark:to-slate-950"></div>
      
      {/* Trust Indicators */}
      <div className="absolute top-8 left-8 z-20 hidden lg:block">
        <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Trusted by 500+ Companies</span>
        </div>
      </div>

      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">ISO 27001 Certified</span>
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Premium Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 dark:bg-blue-950/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <Sparkles size={16} className="text-blue-500" />
            Enterprise-Grade Security
          </div>
          <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-50/80 dark:bg-green-950/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300">
            <BadgeCheck size={16} className="text-green-500" />
            99.9% Uptime SLA
          </div>
          <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-50/80 dark:bg-purple-950/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300">
            <span className="text-purple-500">⚡</span>
            24/7 Expert Support
          </div>
        </motion.div>

        {/* Main Heading with Text Generate Effect */}
        <div className="mb-8">
          <TextGenerateEffect
            words={words}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent"
          />
        </div>

        {/* Enhanced Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
        >
          Partner with industry-leading experts to accelerate your digital transformation. 
          From AI-powered solutions to enterprise cloud infrastructure, we deliver measurable 
          results that drive growth, enhance security, and future-proof your business.
        </motion.p>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Fortune 500 Trusted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Award-Winning Team</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Global Reach</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>ROI Guaranteed</span>
          </div>
        </motion.div>

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

        {/* Enhanced Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto"
        >
          {[
            { number: "1000+", label: "Enterprise Projects", sublabel: "Successfully Delivered" },
            { number: "250+", label: "Global Clients", sublabel: "Across 40+ Countries" },
            { number: "99.99%", label: "System Uptime", sublabel: "SLA Guaranteed" },
            { number: "15min", label: "Response Time", sublabel: "24/7 Expert Support" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}