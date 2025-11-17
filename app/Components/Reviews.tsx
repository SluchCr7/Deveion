"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Review } from "../utils/Types";

// === Data ===
const reviews: Review[] = [
  { id: 1, name: "Jasica Doe", img: "/u1.jpg", review: "Amazing product! Highly recommend it.", rating: 4.5 },
  { id: 2, name: "John Smith", img: "/u2.jpg", review: "Very useful and easy to use.", rating: 4 },
  { id: 3, name: "Alice Johnson", img: "/u3.jpg", review: "Good value for money.", rating: 4.2 },
  { id: 4, name: "Robert Brown", img: "/u4.jpg", review: "Could be improved in some areas.", rating: 3.5 },
];

// === Stars Renderer ===
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400 text-lg" />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-lg" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400 text-lg" />);
  }
  return <div className="flex gap-1">{stars}</div>;
};

// === Review Card ===
const ReviewCard = ({ name, img, review, rating }: Review) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group p-8 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 
               shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-md mb-4">
        <Image src={img} alt={name} width={80} height={80} className="object-cover w-full h-full" />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>

      {/* Rating */}
      <div className="mt-2"><RatingStars rating={rating} /></div>

      {/* Review Text */}
      <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-sm">
        “{review}”
      </p>
    </div>
  </motion.div>
);

// === Main Component ===
const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-950">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Loved by Thousands of Users
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl"
        >
          Real experiences shared by people who use our platform every day.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-16">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} {...rev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
