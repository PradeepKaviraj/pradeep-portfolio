"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';

const Contact = () => {
  const { email, phone, location, github, linkedin } = resumeData.personal;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 text-white relative">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <motion.div 
          className="rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-12 md:p-20 relative overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, y: 0, 
              transition: { duration: 0.7, staggerChildren: 0.2 } 
            }
          }}
        >
          {/* Decorative Background Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 blur-[80px] sm:blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-600/10 blur-[80px] sm:blur-[100px] -ml-32 -mb-32 rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Info Side */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                Let's <span className="text-blue-500">Connect</span>.
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6 sm:space-y-8">
                <a href={`mailto:${email}`} className="flex items-center gap-4 sm:gap-6 group w-fit">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-blue-500/20 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all shadow-sm">
                    📧
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm font-medium mb-1 uppercase tracking-wider">Email</p>
                    <p className="text-lg sm:text-xl font-bold text-zinc-200 group-hover:text-white transition-colors">{email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 sm:gap-6 group w-fit">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all shadow-sm">
                    📱
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm font-medium mb-1 uppercase tracking-wider">Phone</p>
                    <p className="text-lg sm:text-xl font-bold text-zinc-200 group-hover:text-white transition-colors">{phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group w-fit">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl sm:text-2xl shadow-sm">
                    📍
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm font-medium mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-lg sm:text-xl font-bold text-zinc-200">{location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                <a href={github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  GitHub ↗
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  LinkedIn ↗
                </a>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.form variants={itemVariants} className="space-y-4 sm:space-y-6 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 px-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 focus:bg-white/5 outline-none transition-all placeholder:text-zinc-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 px-1">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 focus:bg-white/5 outline-none transition-all placeholder:text-zinc-600" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 px-1">Subject</label>
                <input type="text" placeholder="Opportunity / Hello" className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 focus:bg-white/5 outline-none transition-all placeholder:text-zinc-600" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 px-1">Message</label>
                <textarea placeholder="How can I help you?" rows={5} className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 focus:bg-white/5 outline-none transition-all resize-none placeholder:text-zinc-600" />
              </div>
              <button 
                type="button"
                className="w-full py-4 sm:py-5 mt-2 bg-white text-black rounded-2xl font-bold text-lg hover:bg-zinc-200 hover:scale-[1.01] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </motion.form>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
