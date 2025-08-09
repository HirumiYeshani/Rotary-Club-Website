import React from "react";
import { motion as Motion } from "framer-motion";

import history from "../assets/history.jpeg";
import hemantha from "../assets/hemantha.jpeg";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative pt-[100px] h-[calc(70vh-90px)] min-h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${history})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              <span className="block">Our Journey Through Time</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              A Legacy of Service Built Over Time
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600">
                  Founding
                </span>{" "}
                And Charter
              </h2>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Official Charter
                    </h3>
                    <p className="text-black mb-4">
                      The Rotary Club of Kandy Metropolitan was officially
                      chartered in the year 2002 under the esteemed Rotary
                      International District 3220, and was designated with the
                      Club ID 59365.
                    </p>
                    <p className="text-black">
                      This significant milestone marked the formal establishment
                      of a dynamic platform committed to fostering service,
                      fellowship, and leadership.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-6 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Our Mission
                    </h3>
                    <p className="text-black">
                      Since its inception, the club has played an active role in
                      addressing community needs while aligning with Rotary's
                      global mission to create lasting positive change in the
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>

        <div className="mb-16">
          <Motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600">
                  Founder
                </span>
              </h2>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="h-48 w-48 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={hemantha}
                      alt="Rtn. Joe Paiva"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Rtn. Hemantha Weerasinghe
                  </h3>
                  <p className="text-black mb-4">
                    Originally a Rotarian from the Rotary Club of Kandy in 1984,
                    Rtn. Joe Paiva is regarded as the founder and pillar of the
                    Kandy Metropolitan Club.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-black  mb-2">
                      "Rotarian Rtn. Hemantha Weerasinghe, initially Secretary
                      of Rotary Club of Kandy,emerged as the driving force
                      behind the establishment of the Metropolitan club."
                    </p>
                    <p className="text-black">
                      He later served as Club President and continues as an
                      influential Assistant District Governor for District 3220.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>

        <div className="mb-16">
          <Motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600">
                  Key
                </span>{" "}
                Milestones
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-400 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    1993 Immunization Campaign
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-black">
                    As part of the mother club, Rotarians including Joe Paiva
                    collaborated with Past RI President Ravindran to deliver a
                    major immunization drive.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-400 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    Post-2002 Community Growth
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-black">
                    Since its charter, the club has been active in health,
                    education, environment, and children's welfare.
                  </p>
                  <p className="text-black">
                    Highlighted by initiatives like donations to special-needs
                    schools and various community development projects.
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>

        <div>
          <Motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600">
                  Rotary
                </span>{" "}
                Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Service",
                  description:
                    "We put the needs of others above our own and work to improve lives in our community.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ),
                },
                {
                  title: "Fellowship",
                  description:
                    "We build lasting relationships through shared experiences and common goals.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Leadership",
                  description:
                    "We develop leaders who inspire others to take action and create positive change.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-black">{item.description}</p>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
