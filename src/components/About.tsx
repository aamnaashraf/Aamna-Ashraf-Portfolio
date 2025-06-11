'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Code, Sparkles, Camera } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

function AnimatedGradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
      {children}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const cards = [
    {
      title: 'My Approach',
      content: 'I value writing maintainable code and collaborating with teams to build software that truly serves users.',
      Icon: Code,
      gradient: 'from-purple-500 to-pink-500',
      borderGradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Projects I Love',
      content: 'I enjoy projects that challenge me creatively, from interactive visualizations to performant web apps.',
      Icon: Sparkles,
      gradient: 'from-pink-500 to-indigo-500',
      borderGradient: 'from-pink-400 to-indigo-500'
    },
    {
      title: 'Beyond Coding',
      content: 'Outside work, I\'m passionate about hiking and photography, which fuel my creativity and balance.',
      Icon: Camera,
      gradient: 'from-indigo-500 to-purple-400',
      borderGradient: 'from-indigo-400 to-purple-500'
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="bg-gradient-to-b from-black py-20 px-6 text-white max-w-6xl mx-auto"
    >
      {/* Background elements matching Projects section */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
              opacity: 0.2,
            }}
          />
        ))}
      </div>
<motion.h2
  className="text-4xl font-extrabold mb-10 text-center relative z-10"
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }}
>
  <span className="text-white">About </span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
</motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-300 text-lg mb-16 relative z-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.9 } },
        }}
      >
        I began coding out of curiosity and quickly grew into a passionate
        developer focused on creating clean and efficient web applications.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {cards.map(({ title, content, Icon, gradient, borderGradient }, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#7c3aed"
            glarePosition="all"
            glareBorderRadius="1rem"
            scale={1.02}
            transitionSpeed={1000}
            perspective={800}
            className="w-full h-full"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative h-full p-[1px] rounded-xl"
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${borderGradient} opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
              
              {/* Glowing border animation */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${borderGradient} opacity-0 group-hover:opacity-30`}
                   style={{
                     animation: 'moveGradient 4s linear infinite',
                     backgroundSize: '200% 200%',
                   }}></div>
              
              {/* Main card content */}
              <div className="relative bg-black h-full p-6 rounded-xl flex flex-col">
                <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-tr ${gradient}`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                  {title}
                </h3>
                <p className="text-gray-300 text-sm">{content}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>

      <style jsx global>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}