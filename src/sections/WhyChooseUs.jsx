import React from "react";
import {
  FaAward,
  FaTools,
  FaTruck,
  FaUsers,
  FaLeaf,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "Manufactured using high-grade raw materials for maximum strength and durability.",
  },
  {
    icon: <FaTools />,
    title: "Modern Manufacturing",
    desc: "Precision fabrication with advanced machinery and skilled craftsmanship.",
  },
  {
    icon: <FaTruck />,
    title: "Timely Delivery",
    desc: "Fast and reliable delivery across Madhya Pradesh and nearby regions.",
  },
  {
    icon: <FaUsers />,
    title: "Trusted by Farmers",
    desc: "Thousands of satisfied farmers rely on our products every season.",
  },
  {
    icon: <FaLeaf />,
    title: "Agriculture Focused",
    desc: "Designed specifically to improve productivity and reduce farming effort.",
  },
  {
    icon: <FaHandshake />,
    title: "Customer Support",
    desc: "Friendly after-sales assistance and long-term customer relationships.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto lg:px-16 px-6">
        {/* Heading */}

        <div className="text-center mb-14">
          <h3 className="text-themebrown uppercase tracking-[3px] font-semibold">
            Why Choose Us
          </h3>

          <h2 className="text-themedarkbrown text-4xl lg:text-5xl font-bold mt-4">
            Why Farmers Trust
            <span className="text-themebrown"> Shri Ram Welding Works</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            We combine quality manufacturing, years of experience and customer
            satisfaction to provide agricultural implements that farmers can
            depend on.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#FCF8F3] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F2E7D8] hover:-translate-y-2 text-center flex flex-col items-center"
            >
              {/* Icon */}

              <div className="w-20 h-20 rounded-full bg-[#F8E7C8] text-themebrown text-3xl flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-themedarkbrown mb-4">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 leading-8 text-[16px] max-w-[280px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
