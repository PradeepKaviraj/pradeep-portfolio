"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');
  
  const { experience, education, certifications } = resumeData;

  const tabContent = {
    experience: (
      <div className="space-y-12">
        {experience.map((exp, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={i} 
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline line and dot for mobile */}
            <div className="md:hidden absolute left-0 top-0 bottom-[-3rem] w-px bg-white/10" />
            <div className="md:hidden absolute left-[-4px] top-2 w-[9px] h-[9px] bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

            <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 group cursor-pointer">
              <div className="md:text-right pt-1">
                <span className="text-emerald-500 font-mono text-sm md:text-base font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{exp.duration}</span>
              </div>
              
              <div className="p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-white/5 hover:border-emerald-500/30 transition-all shadow-lg">
                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                <p className="text-lg text-zinc-400 mb-2">{exp.company} <span className="text-sm px-2">•</span> {exp.location}</p>
                <ul className="mt-4 space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-zinc-300">
                      <span className="text-emerald-500 shrink-0 mt-1.5 text-xs">◆</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    education: (
      <div className="space-y-8">
        {education.map((edu, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={i} 
            className="p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-white/5 hover:border-cyan-500/30 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
              <p className="text-lg text-zinc-400">{edu.college}</p>
            </div>
            <div className="shrink-0 flex items-start">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">{edu.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    certifications: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={i} 
            className="p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-white/5 hover:border-purple-500/30 transition-all shadow-lg group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M12 15l-2 5l9-5z"/><circle cx="12" cy="8" r="6"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors relative z-10 pr-8">{cert.title}</h3>
            
            <div className="flex items-center gap-3 mt-auto relative z-10">
              {cert.year && (
                <span className="text-sm font-mono text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">{cert.year}</span>
              )}
              {cert.status && (
                <span className="text-sm font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">{cert.status}</span>
              )}
              {cert.organization && (
                <span className="text-sm text-zinc-500 ml-auto">{cert.organization}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    )
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-black text-white relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
          >
            My <span className="text-emerald-500">Journey</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            A timeline of my professional experience, education, and continuous learning path.
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 bg-zinc-900/50 p-2 sm:p-2.5 rounded-2xl sm:rounded-full border border-white/5 w-fit mx-auto backdrop-blur-md">
          {(['experience', 'education', 'certifications'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-sm sm:text-base font-bold transition-all w-full sm:w-auto capitalize ${
                activeTab === tab 
                  ? 'text-white' 
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl sm:rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Experience;
