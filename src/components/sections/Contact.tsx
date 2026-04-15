"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const Contact = () => {
  const { email, phone, location, links } = resumeData.personalInfo;
  const { github, linkedin } = links;

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
    <section id="contact" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-8 max-w-4xl text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-950 border border-emerald-900 text-emerald-400 text-sm font-semibold tracking-wide">
              Open to Backend / Full Stack roles
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Let&apos;s <span className="text-blue-500">Connect</span>.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I am currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-16">
            <a href={`mailto:${email}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl group-hover:bg-blue-900/30 group-hover:border-blue-500/50 transition-colors">
                📧
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-zinc-500 text-sm font-medium">Email</p>
                <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl group-hover:bg-zinc-800 transition-colors">
                📱
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-zinc-500 text-sm font-medium">Phone</p>
                <p className="text-lg font-bold text-white">{phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl group-hover:bg-zinc-800 transition-colors">
                📍
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-zinc-500 text-sm font-medium">Location</p>
                <p className="text-lg font-bold text-white">{location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <a href={`mailto:${email}`} className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
              Say Hello
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-blue-600 border border-blue-500 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
              LinkedIn
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-xl font-bold transition-colors">
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
