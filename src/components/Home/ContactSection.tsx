import React, { Children } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function ContactSection() {
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
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="contact" className="py-20 relative overflow-hidden">
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20 z-[-2] animate-gradient"></div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
          <img src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient"></div>
      </div>
      {/* Animated background shapes */}
      <motion.div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-400/10 rounded-full dark:bg-primary-400/5 blur-xl" animate={{
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
      <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-400/10 rounded-full dark:bg-secondary-400/5 blur-xl" animate={{
      y: [0, 30, 0],
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2]
    }} transition={{
      duration: 12,
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
            Get In Touch
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
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        amount: 0.1
      }}>
          {[{
          icon: <MailIcon className="text-primary-600 dark:text-primary-400" size={20} />,
          title: 'Email',
          content: 'pasinduwimalarathne2000@gmail.com',
          gradient: 'from-primary-500 to-blue-500',
          bgGradient: 'from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20'
        }, {
          icon: <PhoneIcon className="text-secondary-600 dark:text-secondary-400" size={20} />,
          title: 'Phone',
          content: '+94 (71) 683-2745',
          gradient: 'from-secondary-500 to-purple-500',
          bgGradient: 'from-secondary-50 to-purple-50 dark:from-secondary-900/20 dark:to-purple-900/20'
        }, {
          icon: <MapPinIcon className="text-accent-600 dark:text-accent-400" size={20} />,
          title: 'Location',
          content: 'Colombo, Sri Lanka',
          gradient: 'from-accent-500 to-red-500',
          bgGradient: 'from-accent-50 to-red-50 dark:from-accent-900/20 dark:to-red-900/20'
        }].map((contact, index) => <motion.div key={index} variants={item} className={`bg-gradient-to-br ${contact.bgGradient} p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center`} whileHover={{
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: {
            duration: 0.3
          }
        }}>
              <motion.div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`} whileHover={{
            rotate: 15,
            scale: 1.1
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
                <div className="text-white">{contact.icon}</div>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contact.content}
              </p>
            </motion.div>)}
        </motion.div>
        <motion.div className="max-w-3xl mx-auto mt-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true,
        amount: 0.1
      }}>
          <motion.div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-8 overflow-hidden relative" whileHover={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
            {/*/!* Animated gradient background *!/*/}
            {/*<div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/10 dark:to-secondary-900/10 z-0"></div>*/}
            {/*/!* Animated corner accents *!/*/}
            {/*<div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-20 dark:opacity-10 rounded-br-full"></div>*/}
            {/*<div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-secondary-500 to-accent-500 opacity-20 dark:opacity-10 rounded-tl-full"></div>*/}
            {/*<div className="relative z-10">*/}
            {/*  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">*/}
            {/*    Send Me a Message*/}
            {/*  </h3>*/}
            {/*  <form>*/}
            {/*    <div className="grid md:grid-cols-2 gap-6 mb-6">*/}
            {/*      <motion.div initial={{*/}
            {/*      opacity: 0,*/}
            {/*      x: -20*/}
            {/*    }} whileInView={{*/}
            {/*      opacity: 1,*/}
            {/*      x: 0*/}
            {/*    }} transition={{*/}
            {/*      duration: 0.5,*/}
            {/*      delay: 0.1*/}
            {/*    }} viewport={{*/}
            {/*      once: true*/}
            {/*    }}>*/}
            {/*        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">*/}
            {/*          Your Name*/}
            {/*        </label>*/}
            {/*        <motion.div whileHover={{*/}
            {/*        scale: 1.01*/}
            {/*      }} transition={{*/}
            {/*        duration: 0.2*/}
            {/*      }}>*/}
            {/*          <motion.input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" placeholder="John Doe" whileFocus={{*/}
            {/*          scale: 1.01,*/}
            {/*          borderColor: '#3B82F6'*/}
            {/*        }} transition={{*/}
            {/*          duration: 0.2*/}
            {/*        }} />*/}
            {/*        </motion.div>*/}
            {/*      </motion.div>*/}
            {/*      <motion.div initial={{*/}
            {/*      opacity: 0,*/}
            {/*      x: 20*/}
            {/*    }} whileInView={{*/}
            {/*      opacity: 1,*/}
            {/*      x: 0*/}
            {/*    }} transition={{*/}
            {/*      duration: 0.5,*/}
            {/*      delay: 0.2*/}
            {/*    }} viewport={{*/}
            {/*      once: true*/}
            {/*    }}>*/}
            {/*        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">*/}
            {/*          Your Email*/}
            {/*        </label>*/}
            {/*        <motion.div whileHover={{*/}
            {/*        scale: 1.01*/}
            {/*      }} transition={{*/}
            {/*        duration: 0.2*/}
            {/*      }}>*/}
            {/*          <motion.input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" placeholder="john@example.com" whileFocus={{*/}
            {/*          scale: 1.01,*/}
            {/*          borderColor: '#3B82F6'*/}
            {/*        }} transition={{*/}
            {/*          duration: 0.2*/}
            {/*        }} />*/}
            {/*        </motion.div>*/}
            {/*      </motion.div>*/}
            {/*    </div>*/}
            {/*    <motion.div className="mb-6" initial={{*/}
            {/*    opacity: 0,*/}
            {/*    y: 20*/}
            {/*  }} whileInView={{*/}
            {/*    opacity: 1,*/}
            {/*    y: 0*/}
            {/*  }} transition={{*/}
            {/*    duration: 0.5,*/}
            {/*    delay: 0.3*/}
            {/*  }} viewport={{*/}
            {/*    once: true*/}
            {/*  }}>*/}
            {/*      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">*/}
            {/*        Subject*/}
            {/*      </label>*/}
            {/*      <motion.div whileHover={{*/}
            {/*      scale: 1.01*/}
            {/*    }} transition={{*/}
            {/*      duration: 0.2*/}
            {/*    }}>*/}
            {/*        <motion.input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" placeholder="Project Inquiry" whileFocus={{*/}
            {/*        scale: 1.01,*/}
            {/*        borderColor: '#3B82F6'*/}
            {/*      }} transition={{*/}
            {/*        duration: 0.2*/}
            {/*      }} />*/}
            {/*      </motion.div>*/}
            {/*    </motion.div>*/}
            {/*    <motion.div className="mb-6" initial={{*/}
            {/*    opacity: 0,*/}
            {/*    y: 20*/}
            {/*  }} whileInView={{*/}
            {/*    opacity: 1,*/}
            {/*    y: 0*/}
            {/*  }} transition={{*/}
            {/*    duration: 0.5,*/}
            {/*    delay: 0.4*/}
            {/*  }} viewport={{*/}
            {/*    once: true*/}
            {/*  }}>*/}
            {/*      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">*/}
            {/*        Message*/}
            {/*      </label>*/}
            {/*      <motion.div whileHover={{*/}
            {/*      scale: 1.01*/}
            {/*    }} transition={{*/}
            {/*      duration: 0.2*/}
            {/*    }}>*/}
            {/*        <motion.textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" placeholder="Your message here..." whileFocus={{*/}
            {/*        scale: 1.01,*/}
            {/*        borderColor: '#3B82F6'*/}
            {/*      }} transition={{*/}
            {/*        duration: 0.2*/}
            {/*      }}></motion.textarea>*/}
            {/*      </motion.div>*/}
            {/*    </motion.div>*/}
            {/*    <motion.button type="submit" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center" whileHover={{*/}
            {/*    scale: 1.05,*/}
            {/*    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'*/}
            {/*  }} whileTap={{*/}
            {/*    scale: 0.95*/}
            {/*  }} initial={{*/}
            {/*    opacity: 0*/}
            {/*  }} whileInView={{*/}
            {/*    opacity: 1*/}
            {/*  }} transition={{*/}
            {/*    duration: 0.5,*/}
            {/*    delay: 0.5*/}
            {/*  }} viewport={{*/}
            {/*    once: true*/}
            {/*  }}>*/}
            {/*      <SendIcon size={18} className="mr-2" />*/}
            {/*      Send Message*/}
            {/*    </motion.button>*/}
            {/*  </form>*/}
            {/*</div>*/}
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
