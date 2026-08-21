import React from "react";

import img1 from '../assets/agriculturesprayer/agsprayer1.png';

import img2 from '../assets/cultivator/cultivator2.jpeg';
import img3 from '../assets/seeddrill/seeddrill5.jpeg';
import img4 from '../assets/tractortrolley/tractortrolley2.jpeg';
import img5 from '../assets/watertanker/watertanker4.jpeg';

const FactoryGallery = () => {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto lg:px-16 px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-themebrown font-semibold">
            Our Gallery
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-themedarkbrown mt-4">
            Inside Shri Ram Welding Works
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            A glimpse of our manufacturing process, quality workmanship,
            agricultural implements and commitment to excellence.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid lg:grid-cols-4 gap-5">

          {/* Large */}

          <div className="lg:col-span-2 lg:row-span-2 overflow-hidden rounded-3xl">

            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover hover:scale-110 duration-500"
            />

          </div>

          <div className="overflow-hidden rounded-3xl">

            <img
              src={img2}
              alt=""
              className="w-full h-[260px] object-cover hover:scale-110 duration-500"
            />

          </div>

          <div className="overflow-hidden rounded-3xl">

            <img
              src={img3}
              alt=""
              className="w-full h-[260px] object-cover hover:scale-110 duration-500"
            />

          </div>

          <div className="overflow-hidden rounded-3xl">

            <img
              src={img4}
              alt=""
              className="w-full h-[260px] object-cover hover:scale-110 duration-500"
            />

          </div>

          <div className="overflow-hidden rounded-3xl">

            <img
              src={img5}
              alt=""
              className="w-full h-[260px] object-cover hover:scale-110 duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default FactoryGallery;