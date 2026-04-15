"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Download } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" }, // 🔥 priority
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    const sections = navLinks.map((link) => link.href.substring(1));
    let current = "";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          window.scrollY >= offsetTop - 200 &&
          window.scrollY < offsetTop + offsetHeight - 200
        ) {
          current = section;
        }
      }
    }

    // 🔥 FIX: Handle bottom of page (Contact section)
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      current = "contact";
    }

    if (current) setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

          {/* Logo + Availability */}
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, "#hero")}
              className="text-xl font-black tracking-tight"
            >
              PK<span className="text-white/60">.dev</span>
            </a>

            <span className="hidden lg:inline text-xs text-green-400 ml-3">
              ● Available
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`text-sm transition-colors relative ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/60 hover:text-white"
                    } ${
                      link.name === "Projects" ? "font-semibold text-white" : ""
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-white rounded-full"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Social + Resume */}
            <div className="flex items-center gap-4 ml-4 pl-6 border-l border-white/10">

              <a
                href={resumeData.personalInfo.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/10"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href={resumeData.personalInfo.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={resumeData.personalInfo.links.resume}
                download="Pradeep_Kaviraj_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all shadow-md hover:shadow-lg"
                aria-label="Download Resume"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col md:hidden"
          >
            {/* Resume CTA first */}
            <a
              href={resumeData.personalInfo.links.resume}
              target="_blank"
              rel="noreferrer"
              className="mb-8 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold"
            >
              <Download size={18} />
              Resume
            </a>

            <div className="flex flex-col gap-6 text-2xl font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`${
                    activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-6 mt-auto border-t border-white/10 pt-8">
              <a
                href={resumeData.personalInfo.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white"
              >
                <Github size={22} />
                GitHub
              </a>

              <a
                href={resumeData.personalInfo.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white"
              >
                <Linkedin size={22} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}