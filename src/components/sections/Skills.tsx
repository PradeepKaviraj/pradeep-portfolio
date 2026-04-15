"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const SkillCategory = ({ title, skills, isPrimary = false }: { title: string, skills: string[], isPrimary?: boolean }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }, willChange: "transform, opacity" }
      }}
      className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] w-full relative ${
        isPrimary 
        ? "bg-gradient-to-br from-blue-900/20 to-zinc-900 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-400" 
        : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${isPrimary ? "text-blue-400" : "text-white"}`}>
          {title}
        </h3>
        {isPrimary && (
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.2)]">
            Primary Strength
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2 text-zinc-300">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className={`px-4 py-2 ${isPrimary ? "bg-black/50 border border-blue-500/20 text-blue-100" : "bg-black border border-zinc-800 text-zinc-300"} rounded-xl text-sm sm:text-base font-medium whitespace-nowrap`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { core, backend, frontend, ai, devops, tools } = resumeData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
      willChange: "opacity"
    }
  };

  return (
    <section id="skills" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
            TECH STACK
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Technical <span className="text-blue-500">Arsenal</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl"
          >
            A comprehensive overview of the technologies and tools I use to build robust applications.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Order: 1. Backend, 2. Core, 3. AI, 4. DevOps, 5. Frontend, 6. Tools */}
          <SkillCategory title="Backend & APIs" skills={backend} isPrimary={true} />
          <SkillCategory title="Core Technologies" skills={core} />
          <SkillCategory title="AI & Integration" skills={ai} />
          <SkillCategory title="DevOps & Cloud" skills={devops} />
          <SkillCategory title="Frontend Development" skills={frontend} />
          <SkillCategory title="Tools & Workflow" skills={tools} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
