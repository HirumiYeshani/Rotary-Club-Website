import React from "react";
import { useNavigate } from "react-router-dom";

import hero from "../assets/p3.jpg";

const RotaryHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center block"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div className="absolute inset-0 z-[5] flex items-center justify-center text-center px-4 ">
        <div className="p-6 rounded-lg w-full max-w-screen-lg mx-auto overflow-hidden">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            Welcome to Rotary Club of Kandy Metropolitan
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <button
              onClick={() => navigate("/projects1")}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:bg-none hover:text-blue-700 hover:shadow-xl"
            >
              Explore Our Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-600 hover:shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotaryHero;
