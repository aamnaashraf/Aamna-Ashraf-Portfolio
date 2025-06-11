'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiFacebook } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FiGithub />, 
      url: "https://github.com/aamnaashraf", 
      name: "GitHub",
      color: "group-hover:text-[#4078c0]"
    },
    { 
      icon: <FiFacebook />, 
      url: "https://www.facebook.com/AamnAashraff", 
      name: "Facebook",
      color: "group-hover:text-[#1877f2]"
    },
    { 
      icon: <FiLinkedin />, 
      url: "https://www.linkedin.com/in/aamna-ashraf-rajput-552a20280", 
      name: "LinkedIn",
      color: "group-hover:text-[#0a66c2]"
    },
    { 
      icon: <FiInstagram />, 
      url: "https://www.instagram.com/aamnaashrafrajput2244", 
      name: "Instagram",
      color: "group-hover:text-[#e4405f]"
    },
    { 
      icon: <FiMail />, 
      url: "mailto:aamnaashraf501@gmail.com", 
      name: "Email",
      color: "group-hover:text-[#ea4335]"
    },
  ];

  const footerLinks = [
    { title: "Product", links: ["Features", "Pricing", "Case Studies", "Updates"] },
    { title: "Company", links: ["About", "Careers", "Contact", "Blog"] },
    { title: "Support", links: ["Help Center", "Terms", "Privacy", "Status"] },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black text-white pt-20 pb-10 px-6 md:px-20 overflow-hidden">
      {/* Animated grid pattern in background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Floating orb decoration */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white neon-glow">
              My Portfolio
            </h2>
            <p className="text-gray-400 max-w-xs">
              Creating digital experiences that matter. We help brands transform their ideas into reality.
            </p>
            
            {/* Social links - Updated */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group p-2 rounded-full transition-all duration-300 bg-gray-800 hover:bg-white/10"
                  aria-label={social.name}
                >
                  <div className={`text-2xl text-gray-300 transition-colors ${social.color}`}>
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: colIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-300">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-10"
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            Aamna Ashraf © {currentYear} All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Cookies
            </motion.a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -3, backgroundColor: "#ffffff", color: "#000000" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-lg"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </motion.button>
    </footer>
  );
}