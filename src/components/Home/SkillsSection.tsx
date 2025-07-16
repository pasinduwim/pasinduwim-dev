import React, { Children } from 'react';
import { ServerIcon, CodeIcon, DatabaseIcon, GlobeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function SkillsSection() {
  const skillCategories = [{
    id: 1,
    title: 'Backend Development',
    icon: <ServerIcon size={24} className="text-primary-600 dark:text-primary-400" />,
    skills: ['Spring Boot', 'Java', 'REST APIs', 'Microservices'],
    color: 'from-primary-500 to-primary-600',
    bgGradient: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/30',
    hoverColor: 'group-hover:from-primary-600 group-hover:to-primary-700'
  }, {
    id: 2,
    title: 'Frontend Development',
    icon: <CodeIcon size={24} className="text-secondary-600 dark:text-secondary-400" />,
    skills: ['Angular', 'Next.js', 'React', 'TypeScript', 'HTML/CSS'],
    color: 'from-secondary-500 to-secondary-600',
    bgGradient: 'from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/30',
    hoverColor: 'group-hover:from-secondary-600 group-hover:to-secondary-700'
  }, {
    id: 3,
    title: 'Database & Storage',
    icon: <DatabaseIcon size={24} className="text-accent-600 dark:text-accent-400" />,
    skills: ['SQL', 'Firebase', 'MySQL'],
    color: 'from-accent-500 to-accent-600',
    bgGradient: 'from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/30',
    hoverColor: 'group-hover:from-accent-600 group-hover:to-accent-700'
  }, {
    id: 4,
    title: 'DevOps & Cloud',
    icon: <GlobeIcon size={24} className="text-blue-600 dark:text-blue-400" />,
    skills: ['AWS', 'CI/CD Pipelines', 'Docker'],
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30',
    hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-700'
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.3
      }
    })
  };
  return <section id="skills" className="py-20 relative overflow-hidden">
      {/* Colorful background with animation */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-50 via-blue-50 to-primary-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 z-[-2] animate-gradient"></div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-[-1] opacity-10 dark:opacity-5">
        <img src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Grid pattern with animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 animate-pulse-glow"></div>
      {/* Animated shapes */}
      <motion.div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-400/10 rounded-full dark:bg-primary-400/5 blur-xl" animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
      <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-400/10 rounded-full dark:bg-secondary-400/5 blur-xl" animate={{
      scale: [1, 1.3, 1],
      opacity: [0.2, 0.4, 0.2]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="max-w-3xl mx-auto text-center mb-12" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
          {/* Colorful heading */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4 animate-gradient">
            Skills & Expertise
          </h2>
          <motion.div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6" initial={{
          width: 0
        }} whileInView={{
          width: 80
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}></motion.div>
          <p className="text-gray-600 dark:text-gray-400">
            My technical skills and areas of expertise in software development.
          </p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        amount: 0.1
      }}>
          {skillCategories.map(category => <motion.div key={category.id} variants={item} className={`bg-gradient-to-br ${category.bgGradient} rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 group transition-all duration-300`} whileHover={{
          y: -10,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          transition: {
            duration: 0.3
          }
        }}>
              <div className="flex items-center mb-6">
                {/* Animated icon container */}
                <motion.div className={`p-3 bg-gradient-to-r ${category.color} rounded-full mr-4 shadow-lg`} whileHover={{
              rotate: 15,
              scale: 1.2
            }} transition={{
              type: 'spring',
              stiffness: 300,
              damping: 10
            }} animate={{
              boxShadow: ['0 0 0 0 rgba(0, 0, 0, 0)', '0 0 0 10px rgba(0, 0, 0, 0.1)', '0 0 0 0 rgba(0, 0, 0, 0)']
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}>
                  <div className="text-white">{category.icon}</div>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              {/* Colorful animated skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => <motion.span key={index} custom={index} variants={skillVariants} className={`px-3 py-2 rounded-full bg-gradient-to-r ${category.color} ${category.hoverColor} text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md`} whileHover={{
              y: -5,
              scale: 1.05,
              transition: {
                duration: 0.2
              }
            }}>
                    {skill}
                  </motion.span>)}
              </div>
            </motion.div>)}
        </motion.div>
        <motion.div className="mt-16" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true,
        amount: 0.1
      }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 text-center">
              Technical Proficiency
            </h3>
            <div className="space-y-8">
              {[{
              name: 'Backend Development',
              percentage: 90,
              color: 'from-primary-500 to-primary-600',
              delay: 0
            }, {
              name: 'Frontend Development',
              percentage: 85,
              color: 'from-secondary-500 to-secondary-600',
              delay: 0.2
            }, {
              name: 'Database Management',
              percentage: 80,
              color: 'from-accent-500 to-accent-600',
              delay: 0.4
            }, {
              name: 'Cloud & DevOps',
              percentage: 75,
              color: 'from-blue-500 to-blue-600',
              delay: 0.6
            }].map((skill, index) => <div key={index}>
                  <div className="flex justify-between mb-2">
                    <motion.span className="text-gray-700 dark:text-gray-300 font-medium" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: skill.delay,
                  duration: 0.5
                }} viewport={{
                  once: true
                }}>
                      {skill.name}
                    </motion.span>
                    <motion.span className="text-gray-700 dark:text-gray-300 font-bold" initial={{
                  opacity: 0,
                  x: 20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: skill.delay,
                  duration: 0.5
                }} viewport={{
                  once: true
                }}>
                      {skill.percentage}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative`} initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.percentage}%`
                }} transition={{
                  duration: 1.5,
                  delay: skill.delay,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }} viewport={{
                  once: true
                }}>
                      {/* Animated glow effect */}
                      <motion.div className="absolute top-0 right-0 bottom-0 w-4 bg-white opacity-40 rounded-full blur-sm" animate={{
                    x: [40, -5, 40]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: skill.delay + 1
                  }} />
                    </motion.div>
                  </div>
                </div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}
