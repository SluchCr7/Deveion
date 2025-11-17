"use client";

import React from "react";
import {
  MdOutlineDesignServices,
  MdBusinessCenter,
  MdOutlineShoppingCart,
  MdInvertColors,
} from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { SiMicrostrategy } from "react-icons/si";
import { Service } from "../utils/Types";



const services: Service[] = [
  {
    id: 1,
    icon: MdOutlineDesignServices,
    title: "UI/UX Design",
    description:
      "Craft intuitive and beautiful interfaces to enhance user experience and engagement.",
  },
  {
    id: 2,
    icon: MdBusinessCenter,
    title: "Business Strategy",
    description:
      "Provide data-driven strategies to help businesses grow efficiently and sustainably.",
  },
  {
    id: 3,
    icon: MdOutlineShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Build scalable online stores with seamless checkout and smart inventory management.",
  },
  {
    id: 4,
    icon: MdInvertColors,
    title: "AI Automation",
    description:
      "Automate repetitive tasks using intelligent AI tools to save time and reduce errors.",
  },
  {
    id: 5,
    icon: FaServer,
    title: "Cloud & Backend",
    description:
      "Reliable cloud infrastructure and backend services for high performance and security.",
  },
  {
    id: 6,
    icon: SiMicrostrategy,
    title: "Analytics & Insights",
    description:
      "Gain valuable insights through analytics to make informed and impactful decisions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center gap-12">
        {/* Section Intro */}
        <div className="text-center flex flex-col items-center gap-4">
          <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What We Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            Discover intelligent tools and services designed to boost productivity, automate workflows, and elevate your business performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/20">
                  <Icon className="text-red-500 dark:text-red-400 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-[0.95rem] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
