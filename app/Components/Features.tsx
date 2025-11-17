"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { TbCirclesRelation } from "react-icons/tb";
import { FaHandPointUp } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa6";

import Intro from "./Intro";
import { Feature } from "../utils/Types";

const features : Feature[] = [
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

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center text-center">
        
        {/* Intro Section */}
        <Intro
          heading="Powerful Features to Help You Scale"
          para="Discover all the intelligent tools designed to boost productivity, automate workflows, and elevate your business performance."
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-14 mt-10 md:mt-16">
        
          {/* Features List */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="p-4 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-3xl">
                    <feature.icon />
                  </span>

                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white/10 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition-all">
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
