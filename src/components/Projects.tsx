"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "An intelligent conversational agent built with Python and LangChain, capable of natural language processing and contextual understanding.",
    image: "/ai chatbot.PNG",
    link: "https://multi-agents-ai-production.up.railway.app/",
    tech: ["Python", "LangChain", "UV", "Chainlit"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A sleek, responsive personal portfolio built with Pyhthon and streamlit with smooth animations and dark mode.",
    image: "/portfolio.PNG",
    link: "https://python-website-portfolio.streamlit.app/",
    tech: ["Python", "Streamlit", "Framer Motion"]
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "Full-featured online furniture store with React frontend and Stripe payment integration.",
    image: "/furniture website.png",
    link: "https://final-hackathon-alpha-six.vercel.app/",
    tech: ["Nextjs", "Stripe", "Sanity"]
  },
  {
    id: 4,
    title: "Unit Converter",
    description: "Comprehensive measurement conversion tool with intuitive UI supporting multiple unit categories.",
    image: "/unit conveeter.png",
    link: "https://unit-converter-aamna-ashraf.streamlit.app/",
    tech: ["Python", "Streamlit"]
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Modern blog system powered by Sanity CMS with markdown support and rich text editing.",
    image: "/blog website.png",
    link: "https://dynamic-blog-project.vercel.app/",
    tech: ["Sanity", "Next.js", "Markdown"]
  },
  {
    id: 6,
    title: "Tour Website",
    description: "Interactive travel platform showcasing destinations with immersive galleries and booking functionality.",
    image: "/tour website.png",
    link: "https://simple-website-with-tailwind-css.vercel.app/",
    tech: ["React", "Mapbox", "Node.js"]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 bg-gradient-to-b from-black text-white relative overflow-hidden">
      {/* Subtle background elements */}
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
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center mb-12 md:mb-16 relative z-10"
      >
        <span className="text-white">Some Of </span>{" "}
        <span className="text-indigo-400">My</span>{" "}
        <span className="text-indigo-400">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 mx-auto max-w-7xl">
        {projects.map((project) => (
          <Tilt
            key={project.id}
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="project-card h-full flex flex-col rounded-xl border border-gray-800 bg-gradient-to-br from-slate-900/80 to-slate-800/80 transition-all duration-300 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              {/* Always visible subtle border */}
              <div className="absolute inset-0 rounded-xl border border-indigo-500/20 pointer-events-none"></div>
              
              {/* Image container - full width/height */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 flex items-end p-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 rounded-full text-xs bg-indigo-900/80 text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-xs sm:text-sm">
                    {project.description}
                  </p>
                </div>
                
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 inline-flex items-center gap-1 text-indigo-300 hover:text-cyan-300 transition-colors self-start text-sm sm:text-base"
                  whileHover={{ x: 3 }}
                >
                  <span>View Project</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}