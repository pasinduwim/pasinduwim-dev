import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, HeartIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  return <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="mb-6 md:mb-0" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <motion.a href="#" className="text-xl font-bold text-gray-900 dark:text-white" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              Pasindu<span className="text-blue-600">.</span>dev
            </motion.a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Full Stack Developer specializing in modern web applications.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-6 justify-center" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => <motion.a key={index} href={`#${item.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm" whileHover={{
            y: -2
          }} whileTap={{
            scale: 0.95
          }} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.05 * index
          }}>
                  {item}
                </motion.a>)}
          </motion.div>
          <motion.div className="mt-6 md:mt-0" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            <div className="flex space-x-4">
              {[{
              icon: <GithubIcon size={20} />,
              label: 'GitHub'
            }, {
              icon: <LinkedinIcon size={20} />,
              label: 'LinkedIn'
            }, {
              icon: <TwitterIcon size={20} />,
              label: 'Twitter'
            }].map((social, index) => <motion.a key={index} href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label={social.label} whileHover={{
              scale: 1.2,
              rotate: 5
            }} whileTap={{
              scale: 0.9
            }} initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.4 + 0.1 * index
            }}>
                  {social.icon}
                </motion.a>)}
            </div>
          </motion.div>
        </div>
        <motion.div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} viewport={{
        once: true
      }}>
          <motion.p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center" animate={{
          scale: [1, 1.03, 1]
        }} transition={{
          repeat: Infinity,
          repeatDelay: 3,
          duration: 1
        }}>
            Made with <HeartIcon size={16} className="mx-1 text-red-500" /> by
            Pasindu Wimalarathne
          </motion.p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
}
