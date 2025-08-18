import { motion as Motion } from "framer-motion";

import presidentImage from "../assets/h.png";
import logo from "../assets/logo.jpeg";

const PresidentsMessage = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-2">
            Message From Our President
          </h2>
          <p className="text-black text-lg max-w-3xl mx-auto mt-4">
            Through vision, dedication and unity, we inspire positive change
            empowering our members and uplifting communities across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-200">
          <div className="relative h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <img
              src={presidentImage}
              alt="Rotary Club President Hemantha Weerasinghe"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Hemantha Weerasinghe
                </h3>
                <p className="text-white font-medium text-sm">
                  President 2025-2026
                </p>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[320px] bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 flex flex-col">
            <div className="flex-1 prose-sm text-black space-y-4">
              <p className="leading-relaxed">
                President PHF Rtn Hemantha Weerasinghe expresses gratitude to
                Past Presidents, Directors, and fellow Rotarians for their
                dedication and legacy of service. He welcomes the newly
                appointed leaders, urging them to lead with purpose, innovation,
                and unity.
              </p>
              <p className="leading-relaxed">
                Emphasizing the Rotary motto "Service Above Self," he calls for
                renewed energy, impactful projects, and stronger community
                connections. The President looks forward to a year of
                fulfilment, unity, and shared commitment to making a difference.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-end items-end gap-3">
                <div className="text-right">
                  <p className="text-black font-medium text-sm">
                    President of Rotary Club
                  </p>
                  <p className="text-blue-700 font-bold text-lg">
                    Hemantha Weerasinghe
                  </p>
                </div>
                <div>
                  <img
                    src={logo}
                    alt="Rotary Club Logo"
                    className="h-10 object-contain opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default PresidentsMessage;
