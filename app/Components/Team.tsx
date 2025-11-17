import React from "react";
import Intro from "./Intro";
import Image from "next/image";
import { TeamMember } from "../utils/Types";



const team: TeamMember[] = [
  {
    id: 1,
    name: "Jessica Doe",
    img: "/t1.jpg",
    job: "CEO & Founder",
    description: "Passionate leader with a vision to drive innovation and growth in every project.",
  },
  {
    id: 2,
    name: "John Smith",
    img: "/t2.jpg",
    job: "Lead Developer",
    description: "Expert in full-stack development, creating scalable and efficient solutions.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    img: "/t3.jpg",
    job: "UI/UX Designer",
    description: "Crafting intuitive and beautiful interfaces that delight users and enhance experiences.",
  },
  {
    id: 4,
    name: "Robert Brown",
    img: "/t4.jpg",
    job: "Marketing Specialist",
    description: "Focused on growth strategies and connecting brands with their audience effectively.",
  },
];

const TeamCard = ({ name, img, job, description }: TeamMember) => (
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
    <Image
        width={100}
        height={100}
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
    />
    <h3 className="font-semibold text-xl mb-1 text-black">{name}</h3>
    <p className="text-blue-500 font-bold mb-2">{job}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

// المكون الرئيسي للفريق
const Team = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center py-16 px-4">
      {/* العنوان والفقرة */}
      <Intro
        heading="Meet Our Expert Team"
        para="Our talented team members are dedicated to delivering the best results and creating innovative solutions for our clients."
      />

      {/* شبكة الفريق */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mt-12">
        {team.map((member) => (
          <TeamCard
            key={member.id}
            id={member.id}
            name={member.name}
            img={member.img}
            job={member.job}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
