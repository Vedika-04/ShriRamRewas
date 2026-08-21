import React from "react";
import { heroSlides } from "../data/heroSlides";

const ProductMarquee = () => {
  // Duplicate images for seamless infinite loop
  const slides = [...heroSlides, ...heroSlides];

  return (
    <div className="w-full flex flex-col gap-4 mt-6 mb-6">
      {/* ================= TOP ROW ================= */}

      <div className="marquee-container">
        <div className="marquee-track marquee-left">
          {slides.map((item, index) => (
            <div
              key={`top-${index}`}
              className="
                flex-shrink-0
                rounded-2xl
                overflow-hidden
              "
            >
              <img
                src={item.image}
                alt="Product"
                className=" w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] object-contain transition-all duration-500 hover:scale-105"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM ROW ================= */}

      <div className="marquee-container">
        <div className="marquee-track marquee-right">
          {slides.map((item, index) => (
            <div
              key={`bottom-${index}`}
              className="
                flex-shrink-0
                rounded-2xl
                overflow-hidden
              "
            >
              <img
                src={item.image}
                alt="Product"
                className=" w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]object-contain transition-all duration-500 hover:scale-105 "
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMarquee;
