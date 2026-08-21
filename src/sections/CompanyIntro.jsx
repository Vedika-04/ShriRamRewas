import React from "react";
// import logo from "../assets/logo.jpeg";

const CompanyIntro = () => {
  return (
    <section className="w-full bg-[#FCF8F3] py-20">
      <div className="max-w-7xl mx-auto lg:px-16 px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-themebrown font-semibold uppercase tracking-[3px] text-sm">
              About Shri Ram Welding Works
            </span>

            <h2 className="text-themedarkbrown font-bold lg:text-4xl text-3xl mt-5 leading-tight ">
              Trusted Manufacturer of
              Agricultural Implements
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg text-justify">
              Shri Ram Welding Works is a trusted name in manufacturing
              premium-quality agricultural implements. We specialize in
              cultivators, seed drills, agricultural sprayers, tractor
              trolleys and water tankers designed to improve farming
              efficiency and durability.
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Our commitment to quality craftsmanship, reliable service and
              customer satisfaction has made us a preferred choice for
              farmers across Madhya Pradesh and nearby regions.
            </p>

            <div className="mt-10 flex gap-10">

              <div>
                <h3 className="text-4xl font-bold text-themebrown">
                  10+
                </h3>

                <p className="text-gray-500 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-themebrown">
                  5000+
                </h3>

                <p className="text-gray-500 mt-2">
                  Happy Farmers
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            {/* <div className="bg-white rounded-3xl shadow-xl p-10"> */}

              {/* <img
                src={logo}
                alt="Shri Ram Welding Works"
                className="w-[360px] object-contain"
              /> */}

            {/* </div> */}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;