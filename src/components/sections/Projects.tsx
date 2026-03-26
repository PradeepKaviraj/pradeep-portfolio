"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      willChange: "opacity"
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, willChange: "opacity, transform" }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-950 text-white relative">
      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
          >
            Featured <span className="text-purple-500">Works</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl"
          >
            A selection of projects that showcase my ability to build complete, scalable solutions from the ground up.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group flex flex-col h-full bg-black rounded-[2rem] border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              {/* Top Banner indicating type */}
              <div className="px-6 py-4 bg-zinc-900 border-b border-white/5 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">{project.status || 'Completed'}</span>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-5 group-hover:text-purple-400 transition-colors tracking-tight">{project.name}</h3>

                <div className="mb-6 space-y-2 flex-1">
                  <h4 className="text-sm font-bold text-white mb-3">Highlights:</h4>
                  <ul className="text-sm text-zinc-400 space-y-2 leading-relaxed">
                    {project.description.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-purple-500 shrink-0">▹</span> <span>{feature}</span>
                      </li>
                    ))}
                    {project.description.length > 4 && (
                      <li className="text-purple-400/50 pl-4 text-xs italic">...and more</li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map(tag => (
                    <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors text-sm">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
