"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const HighlightedText = ({ text }: { text: string }) => {
  const terms = ["REST APIs", "JWT authentication", "MongoDB schema", "real-time streaming", "backend APIs"];
  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, i) => 
        terms.some(t => t.toLowerCase() === part.toLowerCase()) 
          ? <strong key={i} className="text-blue-400 font-bold">{part}</strong> 
          : part
      )}
    </span>
  );
};

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
      willChange: "opacity"
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" }, willChange: "opacity, transform" }
  };

  // Ensure featured projects are listed first
  const sortedProjects = [...resumeData.projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
            FEATURED PROJECT
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Featured <span className="text-blue-500">Work</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl"
          >
            A selection of projects that showcase my backend expertise and full-stack capabilities.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sortedProjects.map((project, i) => {
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`flex flex-col bg-zinc-900 border overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg ${
                  isFeatured 
                  ? "lg:col-span-full lg:flex-row lg:items-center rounded-[2rem] border-blue-500/30 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-gradient-to-br from-zinc-900 to-black p-2" 
                  : "col-span-1 border-zinc-800 rounded-3xl hover:border-zinc-500"
                }`}
              >
                <div className={`p-8 sm:p-10 flex flex-col flex-1 h-full`}>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <h3 className={`font-bold text-white tracking-tight ${isFeatured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl"}`}>
                      {project.name}
                    </h3>
                    {isFeatured && (
                      <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold uppercase tracking-[0.1em] shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                        Primary Project
                      </span>
                    )}
                  </div>

                  {project.impact && (
                    <p className={`text-zinc-300 font-medium leading-relaxed mb-8 ${isFeatured ? "text-xl text-blue-100/90" : "text-base"}`}>
                      <HighlightedText text={project.impact} />
                    </p>
                  )}

                  <ul className="text-zinc-400 space-y-4 leading-relaxed mb-10 flex-1">
                    {project.description?.slice(0, 6).map((bullet, idx) => (
                      <li key={idx} className="flex gap-4 text-sm sm:text-base items-start">
                        <span className="text-blue-500 shrink-0 mt-0.5 opacity-80 font-bold">▹</span> 
                        <span className="leading-relaxed">
                          <HighlightedText text={bullet} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech?.map(tag => (
                        <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-black border border-zinc-800 rounded-full text-zinc-300 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-zinc-800/50 flex flex-wrap gap-4">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                          View Live
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="px-8 py-3 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors text-sm">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
