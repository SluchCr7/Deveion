"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/10 blur-3xl rounded-full"></div>

      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-20 relative">
        
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="rounded-3xl overflow-hidden shadow-xl shadow-black/20 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md border border-white/20 hover:scale-[1.02] transition-transform"
          >
            <Image
              src="/about.png"
              width={600}
              height={600}
              alt="About - AI Tools"
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start"
        >
          {/* Tag */}
          <span className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-lg font-medium text-gray-700 dark:text-gray-200">
            About Us
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
            Empowering Your Business With  
            <span className="text-red-400"> Smart AI Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            We design intelligent tools that help businesses automate workflows, 
            accelerate innovation, and unlock new growth opportunities using advanced AI technology.
          </p>

          {/* Learn More Button */}
          <button className="px-6 py-2 mt-6 bg-red-400 hover:bg-red-500 text-white font-medium rounded-full transition-all shadow-md">
            Learn More
          </button>

          {/* Testimonial */}
          <div className="flex items-start gap-4 mt-10 p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-lg max-w-xl">
            {/* Line Accent */}
            <div className="w-1 h-20 bg-gradient-to-b from-red-400 to-purple-500 rounded-full"></div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                “This platform transformed the way we manage operations.  
                The AI-powered features helped us save time and scale faster  
                than ever before.”
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <Image
                  src="/profile.png"
                  width={40}
                  height={40}
                  alt="Profile"
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Jessica Smith</p>
                  <span className="text-sm text-gray-500">
                    Web Developer @ Deveion
                  </span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
