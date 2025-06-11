'use client';

import React from "react";
import Tilt from "react-parallax-tilt";
import ClientMotionDiv from "@/components/ClientOnlyMotion";
import {
  FaUsers,
  FaBrain,
  FaRegLightbulb,
  FaComments,
  FaPaintBrush,
  FaUserTie,
  FaClock,
  FaSync,
  FaHandshake,
} from "react-icons/fa";

const professionalSkills = [
  {
    id: 1,
    icon: <FaComments size={48} className="text-cyan-400" />,
    name: "Communication",
    desc: "Clear and effective expression",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    icon: <FaClock size={48} className="text-yellow-400" />,
    name: "Time Management",
    desc: "Efficient task prioritization",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 3,
    icon: <FaRegLightbulb size={48} className="text-orange-400" />,
    name: "Problem Solving",
    desc: "Creative and logical thinking",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: 4,
    icon: <FaUsers size={48} className="text-pink-400" />,
    name: "Teamwork",
    desc: "Collaborative mindset",
    gradient: "from-pink-400 to-purple-500",
  },
  {
    id: 5,
    icon: <FaSync size={48} className="text-green-400" />,
    name: "Adaptability",
    desc: "Flexible and quick learner",
    gradient: "from-green-400 to-teal-500",
  },
  {
    id: 6,
    icon: <FaUserTie size={48} className="text-indigo-400" />,
    name: "Leadership",
    desc: "Inspiring and guiding teams",
    gradient: "from-indigo-400 to-blue-600",
  },
  {
    id: 7,
    icon: <FaPaintBrush size={48} className="text-rose-400" />,
    name: "Creativity",
    desc: "Innovative approach",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    id: 8,
    icon: <FaBrain size={48} className="text-blue-400" />,
    name: "Critical Thinking",
    desc: "Analytical and objective",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    id: 9,
    icon: <FaHandshake size={48} className="text-purple-400" />,
    name: "Collaboration",
    desc: "Building strong partnerships",
    gradient: "from-purple-400 to-violet-500",
  },
];

export default function ProfessionalSkills() {
  // Pre-calculate static positions for background elements to avoid SSR mismatch
  const backgroundElements = [...Array(6)].map((_, i) => ({
    id: i,
    width: 100 + Math.random() * 200,
    height: 100 + Math.random() * 200,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 30 + 20
  }));

  return (
    <section className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 bg-gradient-to-b from-black text-white relative overflow-hidden">
      {/* Subtle background elements - now hydration safe */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {backgroundElements.map((el) => (
          <ClientMotionDiv
            key={el.id}
            initial={{
              x: 0,
              y: 0,
              width: el.width,
              height: el.height,
              left: el.left,
              top: el.top,
              opacity: 0.2
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
            style={{
              filter: "blur(60px)",
            }}
          />
        ))}
      </div>

      <ClientMotionDiv
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-center mb-12 md:mb-16 relative z-10"
      >
        <span className="text-white">My </span>
        <span className="text-indigo-400">Professional Skills</span>
      </ClientMotionDiv>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 mx-auto max-w-7xl">
        {professionalSkills.map((skill) => (
          <Tilt
            key={skill.id}
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
            <ClientMotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="skill-card h-full flex flex-col rounded-xl border border-gray-800 bg-black transition-all duration-300 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10 p-6"
            >
              <div className="absolute inset-0 rounded-xl border border-gray-900 pointer-events-none"></div>
              
              <ClientMotionDiv 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {skill.icon}
              </ClientMotionDiv>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {skill.desc}
                </p>
              </div>
              
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.gradient} opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10`} />
            </ClientMotionDiv>
          </Tilt>
        ))}
      </div>
    </section>
  );
}