import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Skills',
    href: '#skills'
  },  {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.header initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5,
    ease: 'easeOut'
  }} className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a href="#" className="text-xl font-bold text-gray-900 dark:text-white" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            Pasindu<span className="text-blue-600">.</span>dev
          </motion.a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.1 * index,
            ease: 'easeOut'
          }} whileHover={{
            y: -2
          }}>
                {link.name}
              </motion.a>)}
            <motion.div initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.7,
            type: 'spring'
          }}>
              <ThemeToggle />
            </motion.div>
          </nav>
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <motion.button onClick={toggleMenu} className="ml-4 text-gray-700 dark:text-gray-300 focus:outline-none" aria-label="Toggle menu" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </motion.button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && <motion.nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.05 * index
          }} whileHover={{
            x: 5
          }}>
                  {link.name}
                </motion.a>)}
            </div>
          </motion.nav>}
      </div>
    </motion.header>;
}
