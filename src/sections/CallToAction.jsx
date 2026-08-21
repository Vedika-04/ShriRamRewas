import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="w-full py-20 bg-[#FCF8F3]">

  <div className="max-w-6xl mx-auto px-6">

    <div className="bg-gradient-to-r from-[#8B5A2B] to-[#A06C36] rounded-3xl shadow-2xl px-10 lg:px-16 py-14">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <div>

          <p className="uppercase tracking-[4px] text-[#FFD27D] font-semibold">
            Let's Work Together
          </p>

          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Looking For Quality
            <br />
            Agricultural Implements?
          </h2>

          <p className="text-[#F5E6D2] mt-6 leading-8 text-lg">
            Whether you're a farmer, dealer or distributor,
            Shri Ram Welding Works is ready to provide durable,
            high-quality agricultural implements with trusted
            workmanship and timely delivery.
          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col lg:items-end gap-5">

          <a
            href="tel:+919131825546"
            className="bg-[#FFD27D] hover:bg-white text-themebrown font-semibold px-8 py-4 rounded-xl w-full lg:w-80 flex justify-center items-center gap-3 duration-300"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-themebrown font-semibold px-8 py-4 rounded-xl w-full lg:w-80 flex justify-center items-center gap-3 duration-300"
          >
            <FaMapMarkerAlt />
            Visit Factory
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
  );
};

export default CallToAction;