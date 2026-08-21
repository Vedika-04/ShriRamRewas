import React, { useEffect } from "react";
import agsprayer1 from "../assets/agriculturesprayer/agsprayer1.png";

import cultivator from "../assets/cultivator/cultivator2.jpeg";
import seedDrill from "../assets/seeddrill/seeddrill5.jpeg";
import tractorTrolley from "../assets/tractortrolley/tractortrolley2.jpeg";
import waterTanker from "../assets/watertanker/watertanker4.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import ProductModal from "../components/ProductModal";
import { categoryData } from "../data/categoryData";

const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 500, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should happen only once
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openCategory = (key) => {
  console.log(key);
  console.log(categoryData[key]);
  setSelectedCategory(categoryData[key]);
};

  const closeCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <>
    <div
      id="category"
      className="w-full bg-[#F8F6F2] lg:px-20 px-5 pt-[100px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]"
      >
        <h1 className="text-themebrown font-semibold text-[22px] leading-[20px] text-center">
          Favourite Products
        </h1>
        <h1 className="text-black font-semibold text-[40px] leading-[50px] lg:text-start text-center">
          Popular Category
        </h1>
        <button className="bg-themebrown hover:bg-themegold text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[40px]">
          View All
        </button>
      </div>
      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 gap-x-8 gap-y-10">
        {/* Sprayers */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img
            src={agsprayer1}
            alt="Sprayers"
            onClick={() => openCategory("sprayers")}
            className="w-[180px] h-[180px] lg:w-[190px] lg:h-[190px] rounded-full object-cover cursor-pointer transition duration-300 hover:scale-105"
          />

          <h1
            onClick={() => openCategory("sprayers")}
            className="text-black text-[22px] font-semibold text-center leading-7 w-[180px] hover:text-themebrown transition cursor-pointer"
          >
            Sprayers
          </h1>
        </div>

        {/* Seed Drills */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img
            src={seedDrill}
            alt="Seed Drills"
            onClick={() => openCategory("seedDrills")}
            className="w-[180px] h-[180px] lg:w-[190px] lg:h-[190px] rounded-full object-cover cursor-pointer transition duration-300 hover:scale-105"
          />

          <h1
            onClick={() => openCategory("seedDrills")}
            className="text-black text-[22px] font-semibold text-center leading-7 w-[180px] hover:text-themebrown transition cursor-pointer"
          >
            Seed Drills
          </h1>
        </div>

        {/* Cultivators */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img
            src={cultivator}
            alt="Cultivators"
            onClick={() => openCategory("cultivators")}
            className="w-[180px] h-[180px] lg:w-[190px] lg:h-[190px] rounded-full object-cover cursor-pointer transition duration-300 hover:scale-105"
          />

          <h1
            onClick={() => openCategory("cultivators")}
            className="text-black text-[22px] font-semibold text-center leading-7 w-[180px] hover:text-themebrown transition cursor-pointer"
          >
            Cultivators
          </h1>
        </div>

        {/* Tractor Trolleys */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img
            src={tractorTrolley}
            alt="Tractor Trolleys"
            onClick={() => openCategory("tractorTrolleys")}
            className="w-[180px] h-[180px] lg:w-[190px] lg:h-[190px] rounded-full object-cover cursor-pointer transition duration-300 hover:scale-105"
          />

          <h1
            onClick={() => openCategory("tractorTrolleys")}
            className="text-black text-[22px] font-semibold text-center leading-7 w-[180px] hover:text-themebrown transition cursor-pointer"
          >
            Tractor Trolleys
          </h1>
        </div>

        {/* Water Tankers */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img
            src={waterTanker}
            alt="Water Tankers"
            onClick={() => openCategory("waterTankers")}
            className="w-[180px] h-[180px] lg:w-[190px] lg:h-[190px] rounded-full object-cover cursor-pointer transition duration-300 hover:scale-105"
          />

          <h1
            onClick={() => openCategory("waterTankers")}
            className="text-black text-[22px] font-semibold text-center leading-7 w-[180px] hover:text-themebrown transition cursor-pointer"
          >
            Water Tankers
          </h1>
        </div>
        
      </div>
      
    </div>
    <ProductModal
      isOpen={selectedCategory !== null}
      category={selectedCategory}
      onClose={closeCategory}
    />
    </>
  );
};

export default Category;
