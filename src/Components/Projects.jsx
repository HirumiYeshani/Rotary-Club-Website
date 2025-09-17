import React from "react";
import { motion as Motion } from "framer-motion";

import project from "../assets/project.jpeg";
import color from "../assets/color.jpeg";
import lmsv from "../assets/LMSV.jpg";
import dry from "../assets/dry.jpg";
import ceremony from "../assets/p3.jpg";
import oral from "../assets/p1.jpg";
import join from "../assets/p2.jpg";
import tree from "../assets/tree1.jpg";
import dalada from "../assets/dalada.jpg";
import green from "../assets/green.jpg";
import elders from "../assets/elders.jpg";
import laptop from "../assets/laptop.jpg";
import wheel from "../assets/wheel.jpg";
import vocational from "../assets/vocational.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Lamagaraya Colour Washing Project",
      description:
        "French volunteers, alongside RCKM Rotaractors will colour wash the Lamagaraya Day Care Centre in Kandy. RCKM plans to sponsor cartoon-style artwork inside the centre to create a more child-friendly environment.",
      tags: ["Child Care", "Community"],
      year: "2025",
      image: color,
    },
    {
      title: "Dry Rations Distribution",
      description:
        "This humanitarian initiative supported families facing economic hardship by distributing essential dry rations. Special care was given to elderly individuals to ensure they received the support and supplies they needed during this challenging period.",
      tags: ["Poverty Relief", "Elderly Care"],
      year: "2025",
      image: dry,
    },
    {
      title: "Oral Health Awareness Program",
      description:
        "Successfully conducted an Oral Health Awareness Program at Elagolla Village in Heerassagala, Kandy. This impactful event provided dental checkups and education to underserved communities.",
      tags: ["Healthcare", "Education"],
      year: "2025",
      image: oral,
    },
    {
      title: "23rd Installation Ceremony",
      description:
        "The Rotary Club of Kandy Metropolitan proudly hosted its 23rd Installation Ceremony, marking the beginning of a new Rotary year under the dynamic leadership of Rtn. PHF. Dr. Rajitha Samarakoon, who was installed as the President for 2024/25.",
      tags: ["Education", "Infrastructure"],
      year: "2024",
      image: ceremony,
    },
    {
      title: "Joint Meeting",
      description:
        "Had a fantastic joint meeting today with the Rotary Clubs of the Central Province, including Rotary Club of Kandy, Kandy Hill Capital, Kandy Heritage, and Kandy Victoria. A special thanks to the presidents of these clubs for joining us and making this gathering truly special.",
      tags: ["Emergency", "Relief"],
      year: "2024",
      image: join,
    },
    {
      title: "Angel Tree Prisoners AID",
      description:
        "This project provided school stationery, books, and educational materials to children of incarcerated parents. Refreshments were also given to create a supportive environment for their learning and growth.",
      tags: ["Women", "Empowerment"],
      year: "2023",
      image: tree,
    },
    {
      title: "Dalada Senehasa",
      description:
        "Volunteers distributed nourishing meals and bottled water to homeless people, daily laborers, and street vendors, offering both physical nourishment and emotional comfort during difficult times.",
      tags: ["Health", "Infrastructure"],
      year: "2023",
      image: dalada,
    },
    {
      title: "LMSV Student Awareness",
      description:
        "This program raised awareness among students on important educational and social topics. Refreshments were provided to ensure a welcoming atmosphere and full engagement.",
      tags: ["Education", "Youth"],
      year: "2022",
      image: lmsv,
    },
    {
      title: "Green Metro",
      description:
        "A sustainable environmental initiative that organized tree planting and clean-up drives, with full support in plant logistics and labor, to promote urban greenery and eco-conscious living.",
      tags: ["Healthcare", "Children"],
      year: "2022",
      image: green,
    },
    {
      title: "Elders Day",
      description:
        "A special event celebrating senior citizens with entertainment, meals, gift packs, and meaningful interactions to honor their contributions and foster respect and care.",
      tags: ["Education", "Technology"],
      year: "2021",
      image: elders,
    },
    {
      title: "Laptop Handing Over",
      description:
        "Laptops were provided to deserving students to bridge the digital divide, enhancing their access to education and digital literacy for a brighter future.",
      tags: ["Health", "Children"],
      year: "2021",
      image: laptop,
    },
    {
      title: "Wheel Chair Donation",
      description:
        "Wheelchairs were donated to individuals with physical disabilities to improve their mobility, independence, and quality of life within the community.",
      tags: ["Healthcare", "Community"],
      year: "2020",
      image: wheel,
    },
    {
      title: "Vocational Training AID",
      description:
        "A cement tank was donated to support hands-on vocational training programs, empowering individuals with practical skills for better employment opportunities.",
      tags: ["Healthcare", "Community"],
      year: "2020",
      image: vocational,
    },
  ];

  const timelineEvents = [
    {
      date: "March 20, 2025",
      title: "Kandy Metro Website Launch",
      description:
        "At Hotel Topaz, the Rotary Club of Kandy Metro proudly launched its official website. This initiative included securing the domain and hosting services, marking a significant step toward enhancing the club's digital presence. The website aims to increase community engagement, promote ongoing projects, and provide a centralized platform for communication, updates, and member collaboration.",
      category: "Digital Transformation",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
    },
    {
      date: "September 19, 2024",
      title: "World Children's and Elders' Day Celebrations",
      description:
        "Held in Elagolla Village in Heerassagala, this heartwarming event celebrated both children and elders through acts of care and compassion. The Rotary Club distributed stationery items, dental hygiene kits, and nutritious food packs, fostering joy, health, and intergenerational respect within the community.",
      category: "Community Service",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
    },
    {
      date: "May 31, 2024",
      title: "Donation of Industrial Sewing and Cutting Machines",
      description:
        "As part of our Economic and Community Development efforts, the Rotary Club donated an industrial sewing machine and a cutting machine to the World Vision Office in Rideeyagama on May 31, 2024. This initiative aims to empower local communities by enhancing vocational skills and creating sustainable livelihood opportunities.",
      category: "Economic Development",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          ></path>
        </svg>
      ),
    },
    {
      date: "April 11, 2024",
      title: "Erode Rotary Solid Waste Incineration Project",
      description:
        "Launched under a Global Grant, this water and sanitation initiative in Erode, India, aims to manage solid waste efficiently through incineration. The project began on April 11, 2024, supporting cleaner environments and improved public health.",
      category: "Environmental",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
      ),
    },
    {
      date: "November 6, 2023",
      title: "Polio Eradication Digital Awareness Campaign",
      description:
        "As part of our commitment to disease prevention and treatment, the Rotary Club launched a Digital Booster Campaign on November 6, 2023, to raise awareness about polio eradication. Through targeted online outreach and educational content, we aimed to inform communities about the importance of vaccination and the global efforts to eliminate polio. This initiative reflects our ongoing dedication to creating a polio-free world by leveraging the power of digital platforms for public health advocacy.",
      category: "Health",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
    {
      date: "May 30, 2024",
      title: "Water and Sanitation Global Grant Project",
      description:
        "As part of our Economic and Community Development efforts, the Rotary Club donated an industrial sewing machine and a cutting machine to the World Vision Office in Rideeyagama on May 31, 2024. This initiative aims to empower local communities by enhancing vocational skills and creating sustainable livelihood opportunities.",
      category: "Economic",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
    {
      date: "April 1, 2024",
      title: "Denuwara Education Zone School Water & Sanitation Project",
      description:
        "A Global Grant project launched in Kadugannawa on April 1, 2024, aimed at enhancing water and sanitation facilities in schools across the Denuwara Education Zone, supported by global contributions to ensure healthier learning environments.",
      category: "Health ",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
    {
      date: "October 6, 2023",
      title: "Empowering University Students",
      description:
        "As part of our commitment to Basic Education and Literacy, the Rotary Club organized a financial support initiative at Uva University on October 6, 2023. This project aimed to empower underprivileged university students by easing their financial challenges and supporting their academic journey. By investing in their education, we hope to nurture future leaders and promote equal opportunities in higher learning.",
      category: "Health ",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Thalassemia Education and Screening Program",
      description:
        "As part of our Disease Prevention and Treatment initiatives, the Rotary Club conducted a Thalassemia education and screening program at Kahawaththa Kanishta Vidyalaya, Doluwa, Gampola on August 8, 2023. The program focused on raising awareness among students and parents about Thalassemia, with free blood sample testing provided. Transportation and lunch were arranged to ensure full participation and comfort for attendees.",
      category: "Health ",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
    {
      date: "July 7, 2023",
      title: "Distribution of Dry Rations",
      description:
        "In support of Economic and Community Development, the Rotary Club carried out a dry rations distribution program at Hotel Thilanka on July 7, 2023. This initiative aimed to assist families facing economic hardship, with special care extended to elderly individuals to ensure their nutritional needs were met during challenging times.",
      category: "Community",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative pt-[100px] h-[calc(70vh-90px)] min-h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${project})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              <span className="block">Building A Better Tomorrow</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Hands United to Create Meaningful Change
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Transforming communities through impactful service initiatives
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 group`}
            >
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-200 transition-colors duration-300">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-black mb-6 group-hover:text-gray-800 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-white px-3 py-1 rounded-full text-sm font-medium bg-blue-500 shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Past projects
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Journey of service and community transformation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 h-full w-1 bg-gradient-to-b from-blue-100 to-indigo-100 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-16 md:pl-0 group">
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg md:left-1/2 md:-translate-x-1/2 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {event.icon}
                  </div>
                  <div
                    className={`bg-white p-8 rounded-xl shadow-md border border-gray-100 md:w-8/12 ${
                      index % 2 === 0
                        ? "md:ml-auto md:mr-4"
                        : "md:mr-auto md:ml-4"
                    } transition-all duration-300 group-hover:shadow-lg group-hover:border-blue-200`}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-black mb-4 group-hover:text-black transition-colors duration-300">
                      {event.description}
                    </p>
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                          event.category === "Digital Transformation"
                            ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                            : event.category === "Community Service"
                            ? "bg-green-50 text-blue-600 group-hover:bg-blue-100"
                            : event.category === "Economic Development"
                            ? "bg-purple-50 text-blue-600 group-hover:bg-blue-100"
                            : event.category === "Environmental"
                            ? "bg-teal-50 text-blue-600 group-hover:bg-blue-100"
                            : "bg-orange-50 text-blue-600 group-hover:bg-blue-100"
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
