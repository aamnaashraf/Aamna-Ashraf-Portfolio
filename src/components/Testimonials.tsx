'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaHandshake, FaRocket, FaCode, FaRobot } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

export default function Collaboration() {
  // Updated testimonial data with 6 items
  const testimonials = [
    {
      quote: "The AI chatbot solution completely transformed our customer support. Response times improved by 65% while maintaining 98% accuracy.",
      author: "Michael Chen",
      role: "Director of Operations",
      avatar: "/avatars/3.jpg"
    },
    {
      quote: "Our e-commerce platform saw a 30% increase in conversions after the redesign. The attention to UX principles was particularly impressive.",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      avatar: "/avatars/4.jpg"
    },
    {
      quote: "Exceptional Python developer who solved our data processing bottlenecks. What took 4 hours now runs in 12 minutes with optimized algorithms.",
      author: "Dr. James Wilson",
      role: "Lead Data Scientist",
      avatar: "/avatars/5.jpg"
    },
    {
      quote: "The portfolio website became our company's flagship template. Clients constantly compliment the smooth animations and intuitive navigation.",
      author: "Lisa Thompson",
      role: "Creative Director",
      avatar: "/avatars/6.jpg"
    },
    {
      quote: "The mobile app development exceeded our expectations. Performance optimization resulted in 40% fewer crashes on low-end devices.",
      author: "David Kim",
      role: "Product Manager",
      avatar: "/avatars/7.jpg"
    },
    {
      quote: "Cloud architecture design reduced our infrastructure costs by 35% while improving scalability. Documentation was thorough and professional.",
      author: "Sarah Johnson",
      role: "CTO",
      avatar: "/avatars/8.jpg"
    }
  ];

  
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
  if (!containerRef.current) return;

  const container = containerRef.current;
  if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);

  scrollIntervalRef.current = setInterval(() => {
    if (!containerRef.current || isPaused) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  }, 3000);

  return () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };
}, [isPaused]);


  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-black text-white overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Client Voices</span> &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Experiences</span>
          </h2>

          <div
            ref={containerRef}
            className="flex gap-5 md:gap-8 overflow-x-auto pb-6 scrollbar-hide px-2"
            style={{ scrollSnapType: 'x mandatory', overflowY: 'hidden' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 transition-all duration-500 hover:border-gray-600 hover:bg-[#2b292b]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <FaQuoteLeft className="text-cyan-400 text-xl md:text-2xl mb-3 md:mb-4 opacity-70" />
                <p className="text-base md:text-lg italic mb-4 md:mb-6 line-clamp-4">{testimonial.quote}</p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">{testimonial.author}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ----- Ready to Collaborate Section (unchanged) ----- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-1 border border-gray-700"
        >
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <FaHandshake className="text-4xl md:text-5xl mx-auto text-cyan-400 mb-4 md:mb-6" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Collaborate?</span>
            </h3>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
              Let's turn your ideas into reality. Whether you need a complete solution or expert augmentation for your team, I'm here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <motion.div whileHover={{ y: -5 }} className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all">
                <FaRocket className="text-xl md:text-2xl text-pink-400 mb-2 md:mb-3" />
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Project Development</h4>
                <p className="text-xs md:text-sm text-gray-400">End-to-end solutions from concept to deployment</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all">
                <FaCode className="text-xl md:text-2xl text-purple-400 mb-2 md:mb-3" />
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Code Consultation</h4>
                <p className="text-xs md:text-sm text-gray-400">Expert review and optimization of existing code</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all">
                <FaRobot className="text-xl md:text-2xl text-yellow-400 mb-2 md:mb-3" />
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">AI Solutions</h4>
                <p className="text-xs md:text-sm text-gray-400">Custom AI integrations and automation</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}