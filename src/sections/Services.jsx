import React, { useEffect } from "react";
import tractor from "../assets/tractor.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div
  id="services"
  className="w-full lg:px-20 px-5 py-[60px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10"
>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img
          src={tractor}
          alt="Tractor"
          className="mb-[12px] w-[80px] h-[80px]"
        />
        <h1 className="text-xl text-black font-semibold text-center">
          Quality Manufacturing
        </h1>
        <p className="text-[17px] text-gray-500 text-center leading-7 max-w-[230px]">
          Built with premium materials for long lasting performance.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img
          src={tractor}
          alt="Tractor"
          className="mb-[12px] w-[80px] h-[80px]"
        />
        <h1 className="text-xl text-black font-semibold text-center">
          Quality Manufacturing
        </h1>
        <p className="text-[17px] text-gray-500 text-center leading-7 max-w-[230px]">
          Built with premium materials for long lasting performance.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img
          src={tractor}
          alt="Tractor"
          className="mb-[12px] w-[80px] h-[80px]"
        />
        <h1 className="text-xl text-black font-semibold text-center">
          Quality Manufacturing
        </h1>
        <p className="text-[17px] text-gray-500 text-center leading-7 max-w-[230px]">
          Built with premium materials for long lasting performance.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img
          src={tractor}
          alt="Tractor"
          className="mb-[10px] w-[100px] h-[100px]"
        />
        <h1 className="text-xl text-black font-semibold text-center">
          Quality Manufacturing
        </h1>
        <p className="text-[17px] text-gray-500 text-center leading-7 max-w-[230px]">
          Built with premium materials for long lasting performance.
        </p>
        
      </div>
    </div>
  );
};

export default Services;
