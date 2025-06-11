'use client';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 mt-4 overflow-visible relative z-10">
      <ParticlesBackground />
      {/* Left Content with Animation */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-white transition duration-300">
          Hi, I'm Aamna Ashraf Rajput
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold">
          <span className="text-gray-300">I'm into </span>
          <span className="text-indigo-400">
            <Typewriter
              words={['Web Development', 'Python Programming', 'Building AI Agents']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* Paragraph with highlighted important points */}
        <p className="text-gray-400 text-xl md:text-2xl leading-relaxed md:leading-loose">
          I'm passionate about building modern and responsive web applications using cutting-edge technologies like <span className="text-blue-400 font-semibold">React</span> and <span className="text-purple-400 font-semibold">Next.js</span>. With a strong background in <span className="text-blue-400 font-semibold">Python</span>, I enjoy working on both frontend and backend development. I also have experience creating intelligent <span className="text-purple-400 font-semibold">AI agents</span> that can automate tasks, make decisions, and solve real-world problems. I love turning ideas into working solutions that make a difference.
        </p>

        {/* Github and LinkedIn buttons with spacing */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6 items-center sm:items-start">
          <a
            href="https://github.com/aamnaashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-blue-500/40 transition-all duration-300 text-lg font-medium"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aamna-ashraf-rajput-552a20280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 hover:shadow-purple-500/40 transition-all duration-300 text-lg font-medium"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
        </div>

        
{/* Enhanced CTA section with perfect centering */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="mt-8 w-full flex justify-center px-4"
>
  <div className="relative group w-full max-w-lg mx-auto"> {/* Adjusted max width */}
    {/* Animated gradient border box */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm 
                   opacity-75 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
    
    {/* CTA text container */}
    <div className="relative bg-gray-900/80 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-700 
                   group-hover:border-transparent transition-all duration-300 text-center w-full">
      <p className="text-lg md:text-xl text-gray-300">
        Let's build something amazing together!
        <span className="block text-blue-300 font-medium mt-2">
          Get in touch to discuss your project ideas
        </span>
      </p>
      
      {/* Animated arrow icon - centered */}
      <div className="flex justify-center mt-3">
        <motion.div
          animate={{
            x: [0, 5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-blue-400"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.div>
      </div>
    </div>
  </div>
</motion.div>

      </motion.div>

      {/* Right Image with Zoom-in Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center"
      >
        <Image
          src="/9ae9d3be-7fdc-4f0b-8227-eb7242570fa4.jpg"
          alt="My Photo"
          width={400}
          height={400}
          className="rounded-full object-cover border-4 border-purple-500 shadow-xl transition duration-300 hover:scale-105"
        />

        {/* Hire Me button below image with margin */}
        <motion.a
          href="https://drive.google.com/file/d/1u4fn5m2NGFd1kxU6ttrC_xqGxzBw4UDU/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-md hover:shadow-purple-500/50 transition-all duration-300"
        >
          Download CV
        </motion.a>

 {/* Animated Contact Prompt */}
  <motion.div 
    className="mt-8 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={{ 
      opacity: 1, 
      y: 0,
      scale: [1, 1.03, 1]
    }}
    transition={{ 
      delay: 0.5,
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <p className="text-gray-400 text-lg">Available for</p>
    <p className="text-blue-300 font-medium">Freelance Work</p>
    <div className="mt-1 h-1 w-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
  </motion.div>


<div className="mt-6 flex justify-center space-x-6">
  <motion.a 
    href="#projects"
    whileHover={{ y: -3 }}
    className="text-gray-400 hover:text-blue-400 transition-colors"
    aria-label="View Projects"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3h18v18H3zM3 9h18M9 9v12"/>
    </svg>
  </motion.a>
  <motion.a 
    href="#contact"
    whileHover={{ y: -3 }}
    className="text-gray-400 hover:text-purple-400 transition-colors"
    aria-label="Contact Me"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>
    </svg>
  </motion.a>
  <motion.a 
    href="#skills"
    whileHover={{ y: -3 }}
    className="text-gray-400 hover:text-indigo-400 transition-colors"
    aria-label="My Skills"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  </motion.a>
</div>


<div className="mt-8 grid grid-cols-3 gap-4 max-w-xs mx-auto">
  <motion.a
    href="#projects"
    whileHover={{ scale: 1.05 }}
    className="bg-blue-900/20 p-3 rounded-lg flex flex-col items-center"
  >
    <div className="text-blue-400 text-xl">📁</div>
    <span className="text-xs mt-1 text-blue-300">Projects</span>
  </motion.a>
  <motion.a
    href="#contact"
    whileHover={{ scale: 1.05 }}
    className="bg-purple-900/20 p-3 rounded-lg flex flex-col items-center"
  >
    <div className="text-purple-400 text-xl">✉️</div>
    <span className="text-xs mt-1 text-purple-300">Contact</span>
  </motion.a>
  <motion.a
    href="#skills"
    whileHover={{ scale: 1.05 }}
    className="bg-indigo-900/20 p-3 rounded-lg flex flex-col items-center"
  >
    <div className="text-indigo-400 text-xl">🛠️</div>
    <span className="text-xs mt-1 text-indigo-300">Skills</span>
  </motion.a>
</div>


      </motion.div>
    </section>
  );
}
