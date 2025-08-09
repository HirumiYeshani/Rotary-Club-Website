import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

import join from "../assets/join.jpg";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    address: "",
    referral: "",
    motivation: "",
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://rotarykandymetropolitan.com/email_join.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(
          result.message ||
            "Thank you for your application! We will contact you soon."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          profession: "",
          address: "",
          referral: "",
          motivation: "",
        });
      } else {
        alert("Error: " + (result.message || "Failed to send application."));
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Submit error:", error);
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const testimonials = [
    {
      quote:
        "Joining Rotary Club Kandy was one of the best decisions I've made. The friendships I've formed and the impact we've created together is truly rewarding.",
      name: "Rtn. Hemantha Weerasinghe",
      tenure: "Member since 2015",
    },
    {
      quote:
        "Through Rotary, I've had opportunities to develop leadership skills while making a real difference in our community. It's been transformative.",
      name: "Rtn. Dr Shenal Thalgahagoda",
      tenure: "Member since 2018",
    },
    {
      quote:
        "The global network of Rotary has opened doors I never imagined. I've worked on projects locally and internationally that changed lives.",
      name: "Rtn. Prof Samath Dharmarathne",
      tenure: "Member since 2012",
    },
  ];

  const faqs = [
    {
      question: "What are the membership requirements?",
      answer:
        "We welcome professionals and community leaders who share our commitment to service. Members should be willing to participate in projects and meetings.",
    },
    {
      question: "What is the time commitment?",
      answer:
        "Typically 4-8 hours per month including meetings and service projects, but you can participate as your schedule allows.",
    },
    {
      question: "Are there membership fees?",
      answer:
        "Yes, there are modest annual dues that support our administrative costs and international Rotary Foundation.",
    },
    {
      question: "Can I visit before joining?",
      answer:
        "Absolutely! We welcome prospective members to attend up to three meetings as our guest.",
    },
    {
      question: "How does Rotary benefit my professional life?",
      answer:
        "Rotary provides networking opportunities, leadership development, and the chance to build relationships with other professionals in your community.",
    },
  ];

  const benefits = [
    {
      title: "Make a Difference",
      description:
        "Participate in meaningful service projects that create lasting change in our community and around the world.",
    },
    {
      title: "Global Network",
      description:
        "Connect with 1.4 million professionals across 200+ countries and territories who share your commitment to service.",
    },
    {
      title: "Build Relationships",
      description:
        "Develop lifelong friendships with like-minded individuals who are passionate about serving others.",
    },
    {
      title: "Leadership Development",
      description:
        "Grow personally and professionally through leadership opportunities, skill-building workshops, and mentorship.",
    },
    {
      title: "International Opportunities",
      description:
        "Access to global service projects, exchange programs, and humanitarian initiatives.",
    },
    {
      title: "Personal Fulfillment",
      description:
        "Experience the joy of giving back and making a positive impact on people's lives.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative pt-[100px] h-[calc(70vh-90px)] min-h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${join})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              <span className="block">Join the Rotary Family</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Where Service Meets Fellowship Your Journey Starts Here
            </p>
          </div>
        </div>
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        id="application"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Join
          </span>{" "}
          Rotary
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-700 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        id="application"
        className="bg-gray-100 py-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
              Become a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Member
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "firstName", label: "First Name", icon: <FiUser /> },
                { name: "lastName", label: "Last Name", icon: <FiUser /> },
                { name: "email", label: "Email Address", icon: <FiMail /> },
                { name: "phone", label: "Phone Number", icon: <FiPhone /> },
                {
                  name: "profession",
                  label: "Profession",
                  icon: <FiBriefcase />,
                },
                { name: "address", label: "Address", icon: <FiMapPin /> },
              ].map(({ name, label, icon }) => (
                <div
                  key={name}
                  className="flex items-center border-b border-gray-300 py-2"
                >
                  <span className="text-blue-600 mr-4">{icon}</span>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={label}
                    className="w-full focus:outline-none"
                    required={
                      name === "firstName" ||
                      name === "lastName" ||
                      name === "email" ||
                      name === "phone"
                    } 
                  />
                </div>
              ))}

              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Why do you want to join?"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        id="application"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">
          What Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Members
          </span>{" "}
          Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-black italic mb-6">
                "{testimonial.quote}"
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-blue-700">
                  {testimonial.name}
                </p>
                <p className="text-sm text-black">{testimonial.tenure}</p>
              </div>
            </div>
          ))}
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="bg-gray-100 py-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Questions
            </span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="font-medium text-blue-800">{faq.question}</h3>
                  <FiChevronDown
                    className={`transition-transform ${
                      activeAccordion === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-4 pb-4 text-black">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Motion.div>

      <div className="bg-blue-400 py-16 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl mb-8">
            Take the first step toward making a difference in your community and
            beyond
          </p>
          <a
            href="#application"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
