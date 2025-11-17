"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const reviewPlatforms = [
  { name: "Google", icon: FaGoogle },
  { name: "LinkedIn", icon: FaLinkedin },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blob */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-red-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('/grid.svg')] bg-cover" />
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="px-4 py-1 bg-white/10 border border-white/20 rounded-full w-fit text-sm backdrop-blur-md text-gray-800 dark:text-gray-200"
          >
            🚀 Empowering Businesses with AI
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Build, Scale & Transform with{" "}
            <span className="text-red-500">AI-Powered</span> Tools
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl leading-relaxed">
            Unlock advanced workflows, automate tasks, and boost productivity using next-gen AI solutions trusted by top professionals.
          </p>

          {/* Reviews */}
          <div className="flex flex-col gap-3 mt-2">
            {reviewPlatforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800">
                    <Icon className="text-xl text-gray-600 dark:text-gray-200" />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">4.8</span>
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <CiStar key={i} className="text-yellow-400 text-xl" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Based on 120+ reviews
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full bg-red-500 text-white font-semibold shadow-lg shadow-red-500/30 hover:bg-red-600 transition-all"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/10 backdrop-blur-md text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100/40 dark:hover:bg-gray-800/40 transition-all"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-black/20 hover:scale-[1.02] transition-transform"
          >
            <Image
              src="/hero.jpg"
              width={600}
              height={600}
              alt="AI Tools Hero"
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
