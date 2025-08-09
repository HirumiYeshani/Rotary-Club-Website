import React from "react";

import hemantha from "../assets/Hemantha.jpeg";
import shenal from "../assets/shenal.jpeg";
import samath from "../assets/samath.jpeg";
import rajitha from "../assets/rajitha.jpeg";
import jude from "../assets/jude.jpeg";
import lucky from "../assets/lucky.jpeg";
import joe from "../assets/joe.jpeg";
import timothy from "../assets/timothy.jpeg";
import chandula from "../assets/chandula.jpg";
import chandana from "../assets/chandana.jpeg";
import mahinda from "../assets/mahinda.jpeg";
import dilan from "../assets/dilan.jpeg";
import avatar from "../assets/avatar.jpg";

const leaders = {
  board: [
    {
      title: "Club President",
      name: "Rtn. Hemantha Weerasinghe",
      image: hemantha,
    },
    {
      title: "Vice President",
      name: "Rtn. Dr Shenal Thalgahagoda",
      image: shenal,
    },
    {
      title: "Club Secretary",
      name: "Rtn. Prof Samath Dharmarathne",
      image: samath,
    },
    {
      title: "Immediate Past President",
      name: "PP. Dr Rajitha Samarakoon",
      image: rajitha,
    },
    {
      title: "President Elect",
      name: "Rtn. Samodha Subasinghe",
      image: avatar,
    },
    { title: "Secretary", name: "Rtn. Jude Lucian", image: jude },
    { title: "Treasurer", name: "PP. Lucky Galwaduge", image: lucky },
  ],
  advisors: [
    { title: "Club Advisor - Operations", name: "PP. Joe Paiva", image: joe },
    {
      title: "Club Advisor - Finance",
      name: "PP. Lucky Galwaduge",
      image: lucky,
    },
  ],
  chairs: [
    {
      title: "Club Administration",
      name: "PP. Timothy Paldano",
      image: timothy,
    },
    { title: "Foundation", name: "PP. Joe Paiva", image: joe },
    { title: "Membership", name: "Rtn. Jeewake Swarnasinghe", image: avatar },
    {
      title: "Public Image",
      name: "Rtn. Chandula Nanayakkara",
      image: chandula,
    },
    {
      title: "Service Project",
      name: "PP. Chandana Pathirana",
      image: chandana,
    },
  ],
  directors: [
    {
      title: "Community Service",
      name: "Rtn. Jeewake Swarnasinghe",
      image: avatar,
    },
    {
      title: "Youth Service",
      name: "PP. Dr Rajitha Samarakoon",
      image: rajitha,
    },
    {
      title: "Vocational Service",
      name: "PP. Dr Mahinda Arambepola",
      image: mahinda,
    },
    { title: "Environment", name: "Rtn. Samodha Weerasinghe", image: avatar },
    { title: "International Service", name: "PP. Joe Paiva", image: joe },
    { title: "Club Service", name: "PP. Timothy Paldano", image: timothy },
  ],
  others: [
    {
      title: "Bulletin Editor",
      name: "Rtn. Chandula Nanayakkara",
      image: chandula,
    },
    { title: "Sergeant at Arms", name: "Rtn. Dilan Dinapala", image: dilan },
  ],
};

const MemberCard = ({ title, name, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
    <div className="relative h-48 w-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: "top center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="p-4 flex-grow flex flex-col transition-all duration-300 group-hover:bg-gray-50">
      <h3 className="font-bold text-black text-center mb-1 text-md line-clamp-2">
        {name}
      </h3>
      <p className="text-blue-600 text-sm font-medium text-center mt-auto transform group-hover:translate-y-1 transition-transform">
        {title}
      </p>
    </div>
  </div>
);

const Section = ({ title, members }) => (
  <div className="mb-16">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-black inline-block relative">
        {title}
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {members.map((member, idx) => (
        <MemberCard key={idx} {...member} />
      ))}
    </div>
  </div>
);

export default function Leadership() {
  return (
    <>
      <div
        className="relative pt-[100px] h-[calc(70vh-90px)] min-h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('/rtry.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              <span className="block">The Faces of Our Mission </span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Dedicated to Service Driven by Vision
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-12 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Leadership
            </span>
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Dedicated professionals serving our community with excellence
          </p>
        </div>

        <div className="space-y-20">
          <Section title="Board of Directors" members={leaders.board} />
          <Section title="Club Advisors" members={leaders.advisors} />
          <Section title="Committee Chairs" members={leaders.chairs} />
          <Section title="Committee Directors" members={leaders.directors} />
          <Section title="Key Positions" members={leaders.others} />
        </div>
      </div>
    </>
  );
}
