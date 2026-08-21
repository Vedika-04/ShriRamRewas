import React from "react";
import { FaEye, FaBullseye, FaSeedling } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="w-full bg-[#F8F6F2] py-20">
      <div className="max-w-7xl mx-auto lg:px-16 px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h3 className="text-themebrown font-semibold uppercase tracking-[3px]">
            Our Foundation
          </h3>

          <h2 className="text-themedarkbrown text-4xl lg:text-5xl font-bold mt-4">
            Vision • Mission • Goal
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Our commitment is to deliver durable agricultural solutions
            that help farmers achieve higher productivity while building
            long-term trust through quality, innovation and service.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

          {/* Vision */}

          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">

            <div className="w-20 h-20 rounded-full bg-[#F7E8CF] flex items-center justify-center mx-auto mb-6">

              <FaEye className="text-themebrown text-4xl" />

            </div>

            <h3 className="text-2xl font-bold text-themedarkbrown">
              Vision
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              To become one of India's most trusted manufacturers of
              agricultural implements by continuously delivering
              innovative, durable and farmer-friendly solutions.
            </p>

          </div>

          {/* Mission */}

          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">

            <div className="w-20 h-20 rounded-full bg-[#F7E8CF] flex items-center justify-center mx-auto mb-6">

              <FaBullseye className="text-themebrown text-4xl" />

            </div>

            <h3 className="text-2xl font-bold text-themedarkbrown">
              Mission
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              To manufacture premium-quality agricultural equipment
              using reliable materials, modern techniques and excellent
              customer support for every farmer.
            </p>

          </div>

          {/* Goal */}

          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">

            <div className="w-20 h-20 rounded-full bg-[#F7E8CF] flex items-center justify-center mx-auto mb-6">

              <FaSeedling className="text-themebrown text-4xl" />

            </div>

            <h3 className="text-2xl font-bold text-themedarkbrown">
              Goal
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              To empower farmers with dependable machinery that improves
              productivity, reduces effort and contributes to sustainable
              agricultural growth.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;