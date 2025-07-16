import React from 'react';
import { CodeIcon, BookOpenIcon, BriefcaseIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function AboutSection() {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };
  return <section id="about" className="py-20 relative overflow-hidden">
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 z-[-2] animate-gradient"></div>
      {/* Modern background pattern */}
      <div className="absolute inset-0 z-[-1] opacity-5 dark:opacity-10">
        <img src="https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Animated gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-secondary-500 to-primary-500 animate-gradient"></div>
      {/* Colorful floating shapes */}
      <motion.div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/10 rounded-full dark:bg-primary-400/5" animate={{
      y: [0, -15, 0],
      rotate: [0, 5, 0]
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
      <motion.div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-400/10 rounded-full dark:bg-secondary-400/5" animate={{
      y: [0, -20, 0],
      rotate: [0, -5, 0]
    }} transition={{
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }} />
      <motion.div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-400/10 rounded-full dark:bg-accent-400/5" animate={{
      y: [0, -10, 0],
      x: [0, 10, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 2
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
            About Me
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
            Get to know me, my background, and what drives me as a developer.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true,
          amount: 0.3
        }}>
            {/* Animated text paragraphs */}
            {["I'm a passionate Full Stack Developer with experience in building scalable, efficient web applications. I recently completed a one-year internship at Rumex followed by 6 months as an Associate Software Engineer, where I honed my skills in modern web technologies.", "My expertise spans both frontend and backend development, with a focus on creating clean, maintainable code and intuitive user experiences. I'm particularly interested in building robust architectures that can scale with business needs.", "When I'm not coding, I'm continuously learning new technologies and methodologies to stay at the forefront of web development. I believe in writing code that not only works but is also easy to understand and maintain."].map((paragraph, i) => <motion.p key={i} className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" custom={i} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.6
          }} variants={textVariants}>
                {paragraph}
              </motion.p>)}
          </motion.div>
          <div className="space-y-6">
            {[{
            icon: <BriefcaseIcon className="text-primary-600 dark:text-primary-400" size={20} />,
            title: 'Work Experience',
            items: ['Associate Software Engineer at Rumex (6 months)', 'Software Engineering Intern at Rumex (1 year)'],
            delay: 0.2,
            bgColor: 'from-primary-50 to-primary-100 dark:from-primary-900/10 dark:to-primary-800/20',
            borderColor: 'border-primary-200 dark:border-primary-700/30',
            iconBg: 'bg-primary-100 dark:bg-primary-900/30'
          }, {
            icon: <CodeIcon className="text-secondary-600 dark:text-secondary-400" size={20} />,
            title: 'Technical Interests',
            items: ['Clean Code & Best Practices', 'Scalable System Architecture', 'Cloud Infrastructure & DevOps'],
            delay: 0.4,
            bgColor: 'from-secondary-50 to-secondary-100 dark:from-secondary-900/10 dark:to-secondary-800/20',
            borderColor: 'border-secondary-200 dark:border-secondary-700/30',
            iconBg: 'bg-secondary-100 dark:bg-secondary-900/30'
          }, {
            icon: <BookOpenIcon className="text-accent-600 dark:text-accent-400" size={20} />,
            title: 'Continuous Learning',
            content: 'Currently exploring microservices architecture and advanced React patterns to build more efficient and maintainable applications.',
            delay: 0.6,
            bgColor: 'from-accent-50 to-accent-100 dark:from-accent-900/10 dark:to-accent-800/20',
            borderColor: 'border-accent-200 dark:border-accent-700/30',
            iconBg: 'bg-accent-100 dark:bg-accent-900/30'
          }].map((section, index) => <motion.div key={index} className={`bg-gradient-to-br ${section.bgColor} p-6 rounded-lg shadow-sm border ${section.borderColor}`} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: section.delay
          }} viewport={{
            once: true,
            amount: 0.3
          }} whileHover={{
            y: -8,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transition: {
              duration: 0.3
            }
          }}>
                <div className="flex items-center mb-4">
                  <motion.div className={`p-2 ${section.iconBg} rounded-full mr-4`} whileHover={{
                rotate: 15,
                scale: 1.2
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 10
              }}>
                    {section.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                {section.items ? <ul className="space-y-3">
                    {section.items.map((item, idx) => <motion.li key={idx} className="flex items-center" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3,
                delay: 0.1 * idx + section.delay
              }} viewport={{
                once: true
              }}>
                        <motion.span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mr-2" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.3
                }} />
                        <span className="text-gray-600 dark:text-gray-400">
                          {item}
                        </span>
                      </motion.li>)}
                  </ul> : <p className="text-gray-600 dark:text-gray-400">
                    {section.content}
                  </p>}
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}