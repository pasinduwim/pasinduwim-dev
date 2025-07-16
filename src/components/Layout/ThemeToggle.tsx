import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
export function ThemeToggle() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} whileHover={{
    scale: 1.1,
    rotate: 5
  }} whileTap={{
    scale: 0.9
  }} initial={{
    rotate: 0
  }} animate={{
    rotate: theme === 'dark' ? 0 : 360
  }} transition={{
    duration: 0.5
  }}>
      {theme === 'dark' ? <motion.div initial={{
      y: 10,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: -10,
      opacity: 0
    }} transition={{
      duration: 0.2
    }}>
          <SunIcon size={18} />
        </motion.div> : <motion.div initial={{
      y: 10,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: -10,
      opacity: 0
    }} transition={{
      duration: 0.2
    }}>
          <MoonIcon size={18} />
        </motion.div>}
    </motion.button>;
}