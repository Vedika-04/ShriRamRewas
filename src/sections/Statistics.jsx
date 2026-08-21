import React from "react";
import {
  FaUsers,
  FaIndustry,
  FaTruckMoving,
  FaMapMarkedAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaIndustry />,
    number: "10+",
    title: "Years Experience",
    desc: "Serving the agricultural industry with quality manufacturing.",
  },
  {
    icon: <FaUsers />,
    number: "5000+",
    title: "Happy Farmers",
    desc: "Thousands of satisfied customers trust our products.",
  },
  {
    icon: <FaTruckMoving />,
    number: "12000+",
    title: "Products Delivered",
    desc: "Agricultural implements delivered across various regions.",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "20+",
    title: "Districts Served",
    desc: "Expanding our reach throughout Madhya Pradesh and beyond.",
  },
];

const Statistics = () => {
  return (
    <section className="w-full bg-themebrown py-20">

      <div className="max-w-7xl mx-auto lg:px-16 px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h3 className="text-[#FFD27D] uppercase tracking-[3px] font-semibold">
            Company Statistics
          </h3>

          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-4">
            Our Journey in Numbers
          </h2>

          <p className="text-[#F4E6D5] mt-5 max-w-3xl mx-auto leading-8">
            Every number reflects our dedication to quality, customer
            satisfaction and continuous growth in agricultural manufacturing.
          </p>

        </div>

        {/* Stats */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-18 h-18 mx-auto rounded-full bg-[#F8E7C8] flex items-center justify-center text-themebrown text-3xl mb-6">

                {item.icon}

              </div>

              <h2 className="text-5xl font-bold text-themebrown">

                {item.number}

              </h2>

              <h3 className="text-2xl font-semibold text-themedarkbrown mt-4">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-7">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Statistics;