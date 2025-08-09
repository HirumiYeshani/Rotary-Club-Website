import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const RotarySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Meet the Heart of Rotary",
      content:
        "Rotary members are volunteers who work locally, regionally and internationally to combat hunger, improve health and sanitation, provide education and job training, promote peace and eradicate polio under the motto 'Service Above Self'.",
    },
    {
      title: "Our Purpose in Action",
      content:
        "Rotary connects 1.4 million members from more than 46,000 clubs worldwide. Their service projects address pressing challenges such as disease prevention, water and sanitation, maternal and child health, basic education and economic development.",
    },
    {
      title: "Join the Movement",
      content:
        "Become part of a global network of professionals and community leaders dedicated to making a difference. Rotary offers opportunities to develop leadership skills, expand your professional network and create lasting change in communities worldwide.",
    },
  ];

  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount:0.1 }}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Get to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600">
            Know
          </span>{" "}
          Us
        </h2>
        <p className="text-lg text-black max-w-3xl mx-auto">
          Rotary is a global network of community volunteers committed to making
          lasting change through service, fellowship and integrity.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12">
        <div
          className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-cover bg-center rounded-xl shadow-lg overflow-hidden border border-blue-200"
          style={{ backgroundImage: `url('/rtry.png')` }}
        ></div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-4 mb-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left text-lg font-semibold px-4 py-3 rounded-md transition-all duration-300 border ${
                  activeTab === index
                    ? "bg-blue-700 text-white border-blue-700 shadow-md"
                    : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-white border border-blue-100 rounded-xl shadow p-6 md:p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              {tabs[activeTab].title}
            </h3>

            <p className="text-black text-lg leading-relaxed mb-6">
              {tabs[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default RotarySection;
