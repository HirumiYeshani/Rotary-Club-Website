import React, { useState } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com";
import contact from "../assets/contact.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_cfznokg",
        "template_od9fyj7",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "dYAl2mDt-K6ONW1jA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative pt-[100px] h-[calc(70vh-90px)] min-h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              <span className="block">Connect and Create a Lasting Impact</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Reach out to our Rotary Club to join our mission of service above
              self
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
            Contact Our Rotary Club
          </h2>
          <p className="mt-6 text-lg text-black max-w-2xl mx-auto">
            Have questions or want to get involved? Reach out to us through any
            of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                      placeholder="Your Email Address"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                {status === "success" && (
                  <p className="text-green-600 font-semibold">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-semibold">
                    Failed to send message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <FiSend className="mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                  Our Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-700">
                      <FiMapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-black">
                        Our Location
                      </h4>
                      <p className="mt-1 text-black">
                        Hotel Topaz, Kandy, Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-700">
                      <FiMail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-black">
                        Email Us
                      </h4>
                      <p className="mt-1 text-black">
                        <a
                          href="mailto:rckmpresident2015@yahoo.com"
                          className="hover:text-blue-700 transition"
                        >
                          rckmpresident2015@yahoo.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-700">
                      <FiPhone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-black">
                        Call Us
                      </h4>
                      <p className="mt-1 text-black">
                        <a
                          href="tel:+94776722709"
                          className="hover:text-blue-700 transition"
                        >
                          +94 77 672 2709
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-black mb-4">
                    Connect With Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=100064414492650"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/rc_kandy_metropolitan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white p-3 rounded-full transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-80 w-full">
                <iframe
                  title="Rotary Club Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.715417989534!2d80.6359153153266!3d7.268394994753988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTYnMDYuMiJOIDgwwrAzOCcxOS4xIkU!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-b-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
