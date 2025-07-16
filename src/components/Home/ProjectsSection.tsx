import React, { Children } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function ProjectsSection() {
  const projects = [{
    id: 1,
    title: 'Teazilla',
    description: 'A modern e-commerce website designed for seamless online shopping, featuring user-friendly navigation, secure payment integration, responsive design, and efficient product management for both customers and administrators.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    technologies: ['React', 'Firebase', 'AWS'],
    liveLink: 'http://3.111.34.50/',
    githubLink: '#',
    gradient: 'from-primary-400 to-primary-600'
  }, {
    id: 2,
    title: 'Teazilla -e-commerce admin dashboard',
    description: 'An intuitive e-commerce admin dashboard providing real-time insights, order and inventory management, customer analytics, and product control — all in one centralized platform for streamlined store operations',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    technologies: ['React', 'Firebase',  'AWS EC2'],
    liveLink: 'http://13.126.158.55:3002/login',
    githubLink: '#',
    gradient: 'from-secondary-400 to-secondary-600'
  }, {
    id: 3,
    title: 'Skin Clinic Website',
    description: 'A professional skin clinic website offering detailed service listings, appointment booking, expert dermatologist profiles, and skincare tips — designed to provide a smooth and informative experience for clients seeking personalized skin treatments.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZgIDWURBW8-LTmqX6Q9CEOqhi4P2nm0ZtQ&s',
    technologies: ['React', 'Firebase', 'AWS'],
    liveLink: 'http://13.126.158.55/',
    githubLink: '#',
    gradient: 'from-accent-400 to-accent-600'
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
      y: 30
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="projects" className="py-20 relative overflow-hidden">
      {/* Modern colorful background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-secondary-900/20 z-[-2] animate-gradient"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary-100 to-primary-200 dark:from-primary-900/10 dark:to-primary-800/20 rounded-bl-full opacity-70 dark:opacity-20 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary-100 to-secondary-200 dark:from-secondary-900/10 dark:to-secondary-800/20 rounded-tr-full opacity-70 dark:opacity-20 animate-pulse-glow"></div>
        <motion.div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/10 dark:to-accent-800/20 rounded-full opacity-50 dark:opacity-20" animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        {/* Animated wave */}
        <svg className="absolute bottom-0 left-0 right-0 opacity-20 dark:opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path fill="#0099ff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" animate={{
          d: ['M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z', 'M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,229.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z', 'M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z']
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
        </svg>
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-white" style={{
        width: Math.random() * 6 + 2 + 'px',
        height: Math.random() * 6 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%'
      }} animate={{
        y: [0, Math.random() * -80 - 40],
        opacity: [0, 0.7, 0]
      }} transition={{
        duration: Math.random() * 8 + 8,
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 5
      }} />)}
      </div>
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
            Featured Projects
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
            A selection of my recent work and personal projects.
          </p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        amount: 0.1
      }}>
          {projects.map(project => <motion.div key={project.id} variants={item} className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500" whileHover={{
          y: -15,
          transition: {
            duration: 0.3
          }
        }}>
              {/* Card shine effect on hover */}
              <motion.div className="absolute -inset-full z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" animate={{
            left: ['-100%', '200%']
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut'
          }} />
              {/* Colorful gradient top border */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}></div>
              <div className="h-48 overflow-hidden">
                <motion.div className="w-full h-full" whileHover={{
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent group-hover:from-secondary-500 group-hover:to-accent-500 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => <motion.span key={index} className={`inline-block px-2 py-1 text-xs font-medium bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-sm`} initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.1 * index,
                duration: 0.3
              }} viewport={{
                once: true
              }} whileHover={{
                y: -3,
                scale: 1.05,
                transition: {
                  duration: 0.2
                }
              }}>
                      {tech}
                    </motion.span>)}
                </div>
                <div className="flex justify-between">
                  <motion.a href={project.liveLink} className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium flex items-center" target="_blank" rel="noopener noreferrer" whileHover={{
                x: 5,
                color: '#2563eb'
              }} whileTap={{
                scale: 0.97
              }}>
                    <ExternalLinkIcon size={16} className="mr-1" />
                    Live Demo
                  </motion.a>
              {/*    <motion.a href={project.githubLink} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center" target="_blank" rel="noopener noreferrer" whileHover={{*/}
              {/*  x: 5,*/}
              {/*  color: '#2563eb'*/}
              {/*}} whileTap={{*/}
              {/*  scale: 0.97*/}
              {/*}}>*/}
              {/*      <GithubIcon size={16} className="mr-1" />*/}
              {/*      Code*/}
              {/*    </motion.a>*/}
                </div>
              </div>
            </motion.div>)}
        </motion.div>
        <motion.div className="text-center mt-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.5
      }} viewport={{
        once: true
      }}>
        {/*  <motion.a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/25" whileHover={{*/}
        {/*  scale: 1.05,*/}
        {/*  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'*/}
        {/*}} whileTap={{*/}
        {/*  scale: 0.95*/}
        {/*}}>*/}
        {/*    View All Projects*/}
        {/*  </motion.a>*/}
        </motion.div>
      </div>
    </section>;
}
