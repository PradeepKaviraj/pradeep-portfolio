"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const About = () => {
  const { summary, personalInfo, strengths } = resumeData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
      willChange: "opacity"
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }, willChange: "transform, opacity" }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <motion.div
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side - Visual / Stats */}
          <motion.div variants={itemVariants} className="w-full lg:w-5/12 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl md:blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 flex flex-col items-center justify-center p-8 text-center glass">

              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-4xl sm:text-5xl mb-6 shadow-xl">
                👨‍💻
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{personalInfo.name}</h3>
              <p className="text-cyan-400 font-medium tracking-wide mb-6">{personalInfo.title}</p>

              <div className="w-full h-px bg-white/10 mb-6" />

              <div className="flex flex-col gap-3 w-full text-left">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-zinc-400">Location</span>
                  <span className="font-medium text-right">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-zinc-400">Experience</span>
                  <span className="font-medium text-right">0.5+ Years</span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-zinc-400">Available</span>
                  <span className="font-medium text-emerald-400 text-right">For Opportunities</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="w-full lg:w-7/12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>.
            </h2>

            <div className="space-y-6 text-zinc-300 text-lg sm:text-xl leading-relaxed mb-10">
              <p>{summary}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-6">Key Strengths</h4>
              {strengths.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-zinc-300 leading-snug">{highlight}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
