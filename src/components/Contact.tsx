'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const tiltRef = useRef<HTMLDivElement>(null);

  const onSubmit = (data: any) => {
    console.log(data);
    // Add your form submission logic here
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-black  text-white overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-500">
              Get In Touch
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
              With Us
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential collaboration? 
            We'd love to hear from you. Reach out through any of these channels.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 transition-all duration-300 overflow-hidden"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 to-indigo-500/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 animate-[pulse_3s_infinite]"></div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20">
                  <FiMail className="text-2xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">For general inquiries</p>
                  <a href="mailto:contact@example.com" className="text-cyan-400 hover:underline">
                    aamnaashraf501.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 transition-all duration-300 overflow-hidden"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 animate-[pulse_3s_infinite]"></div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                  <FiPhone className="text-2xl text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-2">Mon-Fri from 9am to 5pm</p>
                  <a href="tel:+1234567890" className="text-pink-400 hover:underline">
                    03342570180
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                rotateX: -5,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 transition-all duration-300 overflow-hidden"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-indigo-500/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 animate-[pulse_3s_infinite]"></div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20">
                  <FiMapPin className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-2">Our headquarters</p>
                  <p className="text-purple-400">
                    123 Tech Street, Silicon Valley, CA 94000
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            ref={tiltRef}
            className="relative bg-black backdrop-blur-sm rounded-xl p-8 border border-gray-700 transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.01,
              rotateX: 2,
              rotateY: -2,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 to-indigo-500/30 rounded-xl opacity-70 blur-md transition-all duration-300 animate-[pulse_3s_infinite]"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-pink-400">This field is required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-pink-400">
                      {errors.email.type === "required" 
                        ? "This field is required" 
                        : "Please enter a valid email"}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: true })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-pink-400">This field is required</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-900 to-gray-800 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all relative overflow-hidden"
                >
                  {/* Button glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-gray-900 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-[pulse_2s_infinite]"></span>
                  <FiSend className="text-lg relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}