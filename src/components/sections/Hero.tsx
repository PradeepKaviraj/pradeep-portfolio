"use client";

import { motion, Variants } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import Link from 'next/link';

const Hero = () => {
  const { name, tagline } = resumeData.personalInfo;
  
  // UI Override for proof line
  const proofLine = "Built and deployed AI SaaS with real-time streaming on Vercel, and production systems on AWS";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
      willChange: "opacity",
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }, willChange: "opacity, transform" },
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col items-center justify-center bg-black text-white px-6 sm:px-8 relative overflow-hidden py-16">
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Micro-conversion line */}
        <motion.div variants={itemVariants} className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-semibold tracking-wide">
            Hello, I am {name}
          </span>
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-950 border border-emerald-900 text-emerald-400 text-sm font-bold tracking-wide flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Backend / Full Stack Developer roles
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight text-white">
           <span className="text-blue-500">Backend</span>-Focused<br /> Full Stack Developer
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-zinc-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </motion.p>
        
        {/* Superior Proof Line */}
        <motion.div variants={itemVariants} className="mb-4 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl font-bold text-white bg-blue-900/20 py-4 px-6 rounded-2xl border border-blue-500/30 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <span className="text-blue-400 text-2xl">⚡</span> {proofLine}
          </p>
        </motion.div>

        {/* Confidence Signal */}
        <motion.p variants={itemVariants} className="text-sm sm:text-base font-medium text-zinc-400 mb-10 max-w-xl mx-auto uppercase tracking-widest bg-zinc-900/50 py-2 px-4 rounded-lg border border-zinc-800/50">
          Built production-ready applications with real-world deployment
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 active:scale-95 text-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            View Projects
          </a>
          {resumeData.personalInfo.links.resume && (
            <a href={resumeData.personalInfo.links.resume} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 border border-zinc-700 bg-zinc-900 rounded-xl font-bold hover:bg-zinc-800 hover:scale-105 transition-all duration-300 text-center text-white">
              Resume
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
