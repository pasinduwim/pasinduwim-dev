import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { HeroSection } from './components/Home/HeroSection';
import { AboutSection } from './components/Home/AboutSection';
import { ProjectsSection } from './components/Home/ProjectsSection';
import { SkillsSection } from './components/Home/SkillsSection';
import { ContactSection } from './components/Home/ContactSection';
import { Footer } from './components/Layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
export function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <ThemeProvider>
      <AnimatePresence>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>;
}