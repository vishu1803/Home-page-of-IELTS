import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative pt-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-secondary-600/5"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%)",
            "linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            ref={ref}
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🎯 Trusted by 10,000+ Students
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Master IELTS with
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Expert Guidance
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Join thousands of successful students who achieved their dream IELTS scores with our comprehensive training program, AI-powered practice, and personalized feedback.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <span className="relative z-10">Start Free Trial</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.button 
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { value: "98%", label: "Success Rate", color: "text-primary-600" },
                { value: "10K+", label: "Students", color: "text-secondary-600" },
                { value: "4.9", label: "Rating", color: "text-purple-600" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                >
                  <motion.div 
                    className={`text-4xl font-bold ${stat.color} mb-2`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5, type: "spring", bounce: 0.6 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Interactive Demo */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 15 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Demo Interface */}
              <div className="bg-gradient-to-br from-white via-primary-50 to-secondary-50 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="space-y-6">
                    {/* Mock IELTS Test Interface */}
                    <motion.div 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    >
                      <div className="flex space-x-2">
                        <motion.div 
                          className="w-3 h-3 bg-red-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div 
                          className="w-3 h-3 bg-yellow-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-3 h-3 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">IELTS Practice Test</span>
                    </motion.div>
                    
                    <div className="space-y-4">
                      {[75, 50, 66].map((width, index) => (
                        <motion.div 
                          key={index}
                          className="h-4 bg-gradient-to-r from-primary-200 to-primary-300 rounded-full relative overflow-hidden"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${width}%` } : { width: 0 }}
                          transition={{ delay: 1.4 + index * 0.2, duration: 1 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <motion.div 
                        className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 text-center border border-primary-200"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                      >
                        <motion.div 
                          className="text-3xl font-bold text-primary-600 mb-1"
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 1.8, duration: 0.5, type: "spring", bounce: 0.6 }}
                        >
                          7.5
                        </motion.div>
                        <div className="text-sm text-gray-600 font-medium">Band Score</div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-4 text-center border border-secondary-200"
                        whileHover={{ scale: 1.05, rotateY: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1.7, duration: 0.6 }}
                      >
                        <motion.div 
                          className="text-3xl font-bold text-secondary-600 mb-1"
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 1.9, duration: 0.5, type: "spring", bounce: 0.6 }}
                        >
                          85%
                        </motion.div>
                        <div className="text-sm text-gray-600 font-medium">Accuracy</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-80 shadow-xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-80 shadow-xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <motion.div 
                className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-60 shadow-lg"
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
