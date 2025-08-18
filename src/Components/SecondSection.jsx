import communityImg from "../assets/p1.jpg";
import leadershipImg from "../assets/p3.jpg";
import fellowshipImg from "../assets/p2.jpg";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function SecondSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/join");
  };

  const cards = [
    {
      title: "Oral Health Awareness Program",
      description:
        "Led by Club President Rtn. Dr. Rajitha Samarakoon, aimed to educate both children and elders on the importance of maintaining good oral hygiene and preventive care.",
      img: communityImg,
    },
    {
      title: "23rd Installation Ceremony",
      description:
        "Hosted its 23rd Installation Ceremony, marking the beginning of a new Rotary year under the dynamic leadership of Rtn. PHF. Dr. Rajitha Samarakoon, who was installed as the President.",
      img: leadershipImg,
    },
    {
      title: "Joint Meeting",
      description:
        "Joint meeting today with the Rotary Clubs of the Central Province, including Rotary Club of Kandy, Kandy Hill Capital, Kandy Heritage, and Kandy Victoria.",
      img: fellowshipImg,
    },
  ];

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-300 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Building Meaningful Impact
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            We combine service, leadership, and fellowship to create
            transformative experiences that benefit both our members and
            communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ title, description, img }) => (
            <div
              key={title}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleClick}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </Motion.div>
  );
}
