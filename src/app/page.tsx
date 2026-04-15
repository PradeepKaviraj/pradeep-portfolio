import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import AIChat from "@/components/ai/AIChat";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Preloader />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <AIChat />
    </main>
  );
}