"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const Experience = () => {
  const { experience } = resumeData;

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
    <section id="experience" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
            EXPERIENCE
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Professional <span className="text-blue-500">Journey</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl"
          >
            A timeline of my professional experience in building scalable solutions.
          </motion.p>
        </div>

        <motion.div 
          className="space-y-12 pl-6 sm:pl-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experience.map((exp, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="relative sm:grid sm:grid-cols-[1fr_3fr] gap-8 group"
            >
              {/* Timeline line and dot */}
              <div className="absolute left-[-24px] sm:left-auto sm:right-[-24px] top-0 bottom-[-3rem] w-px bg-zinc-800 hidden sm:block" />
              <div className="absolute left-[-28px] sm:left-auto sm:-right-[29px] top-2 w-[10px] h-[10px] bg-blue-500 rounded-full hidden sm:block shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

              {/* Mobile Timeline dot/line */}
              <div className="sm:hidden absolute left-[-24px] top-0 bottom-[-3rem] w-px bg-zinc-800" />
              <div className="sm:hidden absolute left-[-28px] top-2 w-[10px] h-[10px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

              <div className="sm:text-right pt-1 mb-2 sm:mb-0 sm:pr-8">
                <span className="text-zinc-400 font-mono text-sm sm:text-base font-bold bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">{exp.duration}</span>
              </div>
              
              <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900 shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:border-zinc-600 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] cursor-default">
                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                <p className="text-lg text-blue-400 font-medium mb-6">{exp.company} <span className="text-zinc-600 text-sm px-2">•</span> <span className="text-zinc-400">{exp.location}</span></p>
                <ul className="space-y-3">
                  {exp.points.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-zinc-300">
                      <span className="text-blue-500 shrink-0 mt-1 opacity-80">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
