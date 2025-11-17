"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Icons
import { TbCirclesRelation } from "react-icons/tb";
import { FaHandPointUp } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa6";

import Intro from "./Intro";
import { Feature } from "../utils/Types";

// ======================= DATA =======================
const features: Feature[] = [
  {
    id: 1,
    title: "Smart AI Automations",
    description:
      "Automate repetitive tasks with intelligent workflows that adapt to your business needs.",
    icon: TbCirclesRelation,
  },
  {
    id: 2,
    title: "One-Click Suggestions",
    description:
      "Generate ideas, improve content, and speed up your workflow with one simple click.",
    icon: FaHandPointUp,
  },
  {
    id: 3,
    title: "Real-Time Processing",
    description:
      "Handle large tasks instantly with fast, optimized AI-powered performance.",
    icon: CiTimer,
  },
  {
    id: 4,
    title: "Enhanced Creativity Tools",
    description:
      "Write, design, and build smarter using AI tools crafted for creators and teams.",
    icon: FaPenNib,
  },
];

// Animation Variants
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

// =====================================================
const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center text-center">
        
        {/* Intro Section */}
        <Intro
          heading="Powerful Features to Help You Scale"
          para="Discover intelligent tools built to accelerate productivity, automate your workflow, and boost performance."
        />

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mt-14">

          {/* Features List */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group p-7 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <span className="p-4 rounded-xl bg-gradient-to-br from-red-400/20 to-red-500/20 
                                   text-red-500 dark:text-red-400 border border-red-400/30 text-3xl
                                   group-hover:scale-110 transition-transform duration-300">
                    <feature.icon />
                  </span>

                  {/* Text */}
                  <div className="flex flex-col items-start text-left">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-xl 
                            hover:scale-[1.03] transition-all duration-500">
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-400/20 via-transparent to-blue-400/20 pointer-events-none"></div>

              <Image
                src="/f1.png"
                alt="AI Features"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
