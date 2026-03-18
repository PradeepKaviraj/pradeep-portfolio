"use client";

import { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import Link from 'next/link';

const Hero = () => {
  const { name, title } = resumeData.personalInfo;
  const tagline = resumeData.summary.split('.')[0] + '.';

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={containerRef} id="hero" className="min-h-[100dvh] flex flex-col items-center justify-center bg-black text-white px-6 sm:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <motion.div style={{ scale: glowScale }} className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      <motion.div style={{ scale: glowScale }} className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center max-w-5xl mx-auto w-full pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm md:text-base font-medium tracking-wide">
            Hello, I am {name}
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {title.split(" ")[0]}
          </span>
          <br />
          <span className="text-white">{title.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          {tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
          <Link href="#projects" className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] text-center">
            Explore My Work
          </Link>
          <Link href="#contact" className="w-full sm:w-auto px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl font-bold hover:bg-white/10 transition-colors text-center">
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-sm tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
