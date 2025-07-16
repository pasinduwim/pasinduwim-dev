import React from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function HeroSection() {
  return <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-blue-50 to-secondary-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 z-[-2] animate-gradient"></div>
      {/* Colorful Overlay Pattern */}
      <div className="absolute inset-0 z-[-1] opacity-20 dark:opacity-10">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" alt="" className="absolute w-full h-full object-cover" />
      </div>
      {/* Animated Blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-white" style={{
        width: Math.random() * 8 + 2 + 'px',
        height: Math.random() * 8 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%'
      }} animate={{
        y: [0, Math.random() * -100 - 50],
        opacity: [0, 0.7, 0]
      }} transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 5
      }} />)}
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="w-full md:w-1/2 mb-12 md:mb-0" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <div className="relative z-10">
              <motion.p className="text-primary-600 dark:text-primary-400 font-medium mb-2 tracking-wide" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                Hello, I'm
              </motion.p>
              {/* Animated Gradient Text */}
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-gradient" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }}>
                Pasindu Wimalarathne
              </motion.h1>
              {/* Typewriter Effect */}
              <div className="h-8 md:h-10 overflow-hidden mb-6">
                <motion.h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 animate-typing" initial={{
                width: 0
              }} animate={{
                width: '100%'
              }} transition={{
                duration: 2.5,
                delay: 0.8,
                ease: 'easeInOut'
              }}>
                  Full Stack Developer
                </motion.h2>
              </div>
              <motion.p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }}>
                I build scalable, efficient web applications with modern
                technologies. Passionate about clean code, user experience, and
                continuous learning.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }}>
                {/* Animated Contact Button */}
                <motion.a href="#contact" className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-1" whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
              }} whileTap={{
                scale: 0.95
              }}>
                  Contact Me
                </motion.a>
                <motion.a href="#" className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 text-gray-800 dark:text-white font-medium rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800" whileHover={{
                scale: 1.05,
                borderColor: '#3B82F6'
              }} whileTap={{
                scale: 0.95
              }}>
                  <FileTextIcon size={18} />
                  Resume
                </motion.a>
                <motion.div className="flex items-center gap-4 mt-4 sm:mt-0" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.8,
                duration: 0.5
              }}>
                  {/* Animated Social Icons */}
                  <motion.a href="https://github.com/pasinduwimalarathne2000" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="GitHub" whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  color: '#3B82F6'
                }} whileTap={{
                  scale: 0.9
                }}>
                    <GithubIcon size={24} />
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/pasindu00/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn" whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  color: '#3B82F6'
                }} whileTap={{
                  scale: 0.9
                }}>
                    <LinkedinIcon size={24} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          {/* Enhanced Profile Image Animation */}
          <motion.div className="w-full md:w-1/2 flex justify-center md:justify-end" initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.2
        }}>
            <div className="relative">
              {/* Outer ring animation */}
              <motion.div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full opacity-75 blur-md" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }} />
              <motion.div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 relative z-10" animate={{
              scale: [1, 1.05, 1]
            }} transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut'
            }}>
                <motion.div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2 overflow-hidden" initial={{
                rotate: -5
              }} animate={{
                rotate: 5
              }} transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}>
                  <motion.div className="w-full h-full rounded-full overflow-hidden" whileHover={{
                  scale: 1.05
                }}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Pasindu Wimalarathne" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* Status indicator with pulsing animation */}
              <motion.div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg" initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              delay: 1,
              duration: 0.5,
              type: 'spring'
            }}>
                <motion.div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full p-2" animate={{
                boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 0 10px rgba(59, 130, 246, 0.3)', '0 0 0 0 rgba(59, 130, 246, 0)']
              }} transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}>
                  <motion.span className="block w-4 h-4 bg-green-500 rounded-full" animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}></motion.span>
                </motion.div>
              </motion.div>
              {/* Floating tech icons around the profile */}
              {['⚛️', '🌐', '🚀', '💻', '📱'].map((emoji, i) => <motion.div key={i} className="absolute text-2xl" style={{
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? '-15%' : '105%'
            }} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1 + i * 0.2
              }
            }}>
                  <motion.div animate={{
                y: [0, -10, 0]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut'
              }}>
                    {emoji}
                  </motion.div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator animation */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1.5,
        duration: 0.5
      }}>
          <motion.a href="#about" className="text-primary-500 dark:text-primary-400" animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut'
        }}>
            <ArrowDownIcon size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>;
}
