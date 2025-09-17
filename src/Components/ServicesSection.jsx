import { useState, useEffect } from "react";
import {
  FaHandsHelping,
  FaGlobe,
  FaUserFriends,
  FaGraduationCap,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion as Motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Community Service",
      description:
        "Drives the core mission of Rotary by delivering impactful projects that uplift and empower communities, addressing local needs through sustainable solutions.",
      icon: <FaHandsHelping className="text-4xl" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      hover: "hover:bg-blue-100",
      border: "border-blue-200",
    },
    {
      title: "International Service",
      description:
        "Fosters global goodwill and humanitarian cooperation through international partnerships, supporting peace, health, education and sustainable development worldwide.",
      icon: <FaGlobe className="text-4xl" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      hover: "hover:bg-indigo-100",
      border: "border-indigo-200",
    },
    {
      title: "Youth Service",
      description:
        "Cultivates leadership, responsibility and civic engagement among youth by providing platforms for learning, service and global connection through Rotary programs.",
      icon: <FaUserFriends className="text-4xl" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      hover: "hover:bg-blue-100",
      border: "border-blue-200",
    },
    {
      title: "Vocational Service",
      description:
        "Advances professional excellence and ethical standards by empowering individuals to use their skills in service, mentorship and capacity-building within the community.",
      icon: <FaGraduationCap className="text-4xl" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      hover: "hover:bg-indigo-100",
      border: "border-indigo-200",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === null || prev === services.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-2">
          Our Services
        </h2>
        <p className="text-black text-lg max-w-3xl mx-auto mt-4">
          Explore a variety of impactful community and professional services
          that help you grow and contribute to society.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`
                rounded-2xl p-6 border-2 transition-all duration-500 
                ${service.border} ${service.bg} ${service.hover}
                transform hover:scale-105
                ${
                  activeIndex === idx
                    ? "ring-4 ring-opacity-50 ring-blue-400"
                    : ""
                }
                relative overflow-hidden
              `}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div
                className={`w-20 h-20 ${service.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <div
                  className={`${service.color} transition-transform duration-500 group-hover:scale-110`}
                >
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-black text-sm mb-5">{service.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={ref}
          className="mt-20 bg-gradient-to-r from-blue-700 to-sky-500 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {inView && <CountUp end={1164} duration={3} />}+
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {inView && <CountUp end={24} duration={3} />}+
              </div>
              <div className="text-xs sm:text-sm opacity-80">Members</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {inView && <CountUp end={5} duration={3} />}+
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                Countries Reached
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {inView && (
                  <CountUp end={75000000} duration={3} separator="," />
                )}
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                Value of projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default ServicesSection;
