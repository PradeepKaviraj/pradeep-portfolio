"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const About = () => {
  const { summary, strengths } = resumeData;

  // Split summary into bullet points
  const summaryBullets = summary
    .split('. ')
    .filter(sentence => sentence.length > 5)
    .map(sentence => sentence.endsWith('.') ? sentence : sentence + '.');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
      willChange: "opacity"
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            ABOUT
          </p>
        </div>
        <motion.div
          className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side - Content/Summary */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight">
              About <span className="text-blue-500">Me</span>.
            </h2>

            <div className="space-y-4">
              {summaryBullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-blue-500 font-bold opacity-80 mt-1">▹</span>
                  <p className="text-zinc-300 text-lg leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Strengths Grid */}
          <motion.div variants={itemVariants} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-zinc-600">
            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">
              Key Strengths
            </h3>
            <div className="space-y-4">
              {strengths.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-black border border-zinc-800 transition-colors hover:border-zinc-700"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <p className="text-zinc-300 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
