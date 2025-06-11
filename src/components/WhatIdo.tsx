'use client';

import { motion } from 'framer-motion';
import { FaCode, FaPython, FaRobot, FaServer } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { useEffect, useState } from 'react';

// Helper component for animated background elements
function AnimatedBackground() {
  const [positions] = useState(() => 
    Array(8).fill(0).map(() => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 30 + 20
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            width: `${pos.width}px`,
            height: `${pos.height}px`,
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            opacity: 0.15
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            filter: "blur(80px)",
          }}
        />
      ))}
    </div>
  );
}

export default function WhatIDo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <FaCode size={40} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      title: 'Web Development',
      description: 'Modern and responsive websites built with React, Next.js, and Tailwind CSS — fast, optimized, and visually stunning.',
    },
    {
      icon: <FaPython size={40} className="text-yellow-300 group-hover:text-yellow-200 transition-colors" />,
      title: 'Python Programming',
      description: 'Clean and efficient Python code for automation, data processing, backend development, and more.',
    },
    {
      icon: <FaRobot size={40} className="text-green-300 group-hover:text-green-200 transition-colors" />,
      title: 'AI Agents',
      description: 'Smart AI agents that automate tasks, make decisions, and solve real-world problems using AI tools and APIs.',
    },
    {
      icon: <FaServer size={40} className="text-red-400 group-hover:text-red-300 transition-colors" />,
      title: 'Backend Systems',
      description: 'Robust backend systems and APIs built with Node.js, Express, and databases that scale and perform.',
    },
  ];

  if (!mounted) return null;

  return (
    <section className="bg-gradient-to-b from-black text-white py-20 px-6 md:px-20 relative overflow-hidden">
      <AnimatedBackground />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16 relative z-10"
      >
        <span className="text-transparent bg-clip-text bg-white">What I</span>{' '}
        <span className="text-transparent bg-clip-text bg-indigo-400">Specialize In</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#7c3aed"
            glarePosition="all"
            glareBorderRadius="1rem"
            scale={1.03}
            transitionSpeed={1500}
            perspective={1000}
            className="w-full h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full rounded-xl overflow-hidden p-[1px] bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-purple-500/30"
            >
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-70"></div>
              
              <div className="relative bg-black h-full rounded-xl p-8 transition-all duration-500 group-hover:bg-gray-800/70">
                <motion.div 
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-6 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}