import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);

  const activeStyle = "text-blue-700 font-semibold border-b-2 border-blue-700";
  const normalStyle = "text-black hover:text-blue-700";

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleMobileAboutDropdown = () => {
    setMobileAboutDropdownOpen(!mobileAboutDropdownOpen);
  };

  return (
    <NavLink
      to="/home"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-sky-100 to-white shadow-lg"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Rotary Logo"
            className="w-14 h-auto rounded-full border-2 border-white"
          />
          <div className="text-blue-700">
            <h1 className="text-lg font-semibold leading-tight">
              Rotary Club of Kandy Metropolitan
            </h1>
            <p className="text-sm text-blue-700">Chartered in 2002</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center space-x-8">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `text-lg transition-colors duration-200 pb-1 ${
                  isActive ? activeStyle : normalStyle
                }`
              }
            >
              Home
            </NavLink>

            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className={`text-lg transition-colors duration-200 pb-1 flex items-center gap-1 ${
                  window.location.pathname.startsWith("/about")
                    ? activeStyle
                    : normalStyle
                }`}
              >
                About Us
                {aboutDropdownOpen ? (
                  <FiChevronUp size={18} />
                ) : (
                  <FiChevronDown size={18} />
                )}
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <NavLink
                    to="/about/history"
                    className="block px-4 py-2 text-black hover:bg-blue-300 hover:text-blue-900"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    History
                  </NavLink>
                  <NavLink
                    to="/about/leadership"
                    className="block px-4 py-2 text-black hover:bg-blue-300 hover:text-blue-900"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Leadership
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/projects1"
              className={({ isActive }) =>
                `text-lg transition-colors duration-200 pb-1 ${
                  isActive ? activeStyle : normalStyle
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `text-lg transition-colors duration-200 pb-1 ${
                  isActive ? activeStyle : normalStyle
                }`
              }
            >
              Calendar
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg transition-colors duration-200 pb-1 ${
                  isActive ? activeStyle : normalStyle
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
          <NavLink
            to="/join"
            className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-700 hover:border font-medium transition-colors duration-200 shadow-md"
          >
            Join Us
          </NavLink>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-700 text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className=":hidden px-6 pb-4 bg-white bg-opacity-95">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `py-2 text-lg font-medium ${
                  isActive ? activeStyle : "text-blue-700 hover:text-blue-900"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <div>
              <button
                onClick={toggleMobileAboutDropdown}
                className={`py-2 text-lg font-medium flex items-center gap-2 w-full ${
                  window.location.pathname.startsWith("/about")
                    ? activeStyle
                    : "text-blue-700 hover:text-blue-700"
                }`}
              >
                About Us
                {mobileAboutDropdownOpen ? (
                  <FiChevronUp size={18} />
                ) : (
                  <FiChevronDown size={18} />
                )}
              </button>

              {mobileAboutDropdownOpen && (
                <div className="pl-4 mt-2 space-y-3">
                  <NavLink
                    to="/about/history"
                    className="block py-1 text-blue-700 hover:text-blue-900"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileAboutDropdownOpen(false);
                    }}
                  >
                    History
                  </NavLink>
                  <NavLink
                    to="/about/leadership"
                    className="block py-1 text-blue-700 hover:text-blue-900"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileAboutDropdownOpen(false);
                    }}
                  >
                    Leadership
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/projects1"
              className={({ isActive }) =>
                `py-2 text-lg font-medium ${
                  isActive ? activeStyle : "text-blue-700 hover:text-blue-900"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `py-2 text-lg font-medium ${
                  isActive ? activeStyle : "text-blue-700 hover:text-blue-900"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Calendar
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 text-lg font-medium ${
                  isActive ? activeStyle : "text-blue-700 hover:text-blue-900"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>
          <NavLink
            to="/join"
            className="mt-4 block text-center bg-blue-700 text-white px-4 py-3 rounded-full hover:bg-blue hover:text-blue-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Join Us
          </NavLink>
        </div>
      )}
    </NavLink>
  );
}

export default Navbar;
