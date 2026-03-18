"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const SkillCategory = ({ title, skills, colorClass }: { title: string, skills: string[], colorClass: string }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
      }}
      className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:bg-white/5 transition-all w-full"
    >
      <h3 className={`text-xl sm:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${colorClass}`}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-xl text-sm sm:text-base text-zinc-300 font-medium hover:text-white hover:border-white/20 transition-colors shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { languages, frontend, backend, databases, ai, tools } = resumeData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-black text-white relative">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
          >
            Technical <span className="text-blue-500">Arsenal</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            A comprehensive overview of the technologies and tools I use to build modern, high-performance applications.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillCategory title="Core Languages" skills={languages} colorClass="from-yellow-400 to-orange-500" />
          <SkillCategory title="Frontend Development" skills={frontend} colorClass="from-cyan-400 to-blue-500" />
          <SkillCategory title="Backend & APIs" skills={backend} colorClass="from-emerald-400 to-teal-600" />
          <SkillCategory title="Databases" skills={databases} colorClass="from-purple-400 to-indigo-600" />
          <SkillCategory title="AI & Integration" skills={ai} colorClass="from-pink-400 to-rose-600" />
          <SkillCategory title="Tools & Workflow" skills={tools} colorClass="from-red-400 to-red-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
