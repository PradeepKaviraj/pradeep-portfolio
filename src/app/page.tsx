import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import AIChat from "@/components/ai/AIChat";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Preloader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <AIChat />
    </main>
  );
}