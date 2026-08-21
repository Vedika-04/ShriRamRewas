import React from "react";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

// import map from "../assets/mp-map.png"; // Add a simple MP map image

const districts = [
  "Ratlam",
  "Jaora",
  "Mandsaur",
  "Neemuch",
  "Ujjain",
  "Indore",
  "Dhar",
  "Shajapur",
  "Agar Malwa",
  "Nearby Regions",
];

const DeliveryAreas = () => {
  return (
    <section className="w-full bg-[#FCF8F3] py-24">

      <div className="max-w-7xl mx-auto lg:px-16 px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-themebrown font-semibold">
            Delivery Network
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-themedarkbrown mt-4">
            Areas We Serve
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            We proudly supply our agricultural implements across
            Madhya Pradesh with reliable transportation and timely
            delivery.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="flex justify-center">

            {/* <img
              src={map}
              alt="Madhya Pradesh Map"
              className="w-full max-w-[450px]"
            /> */}

          </div>

          {/* Right */}

          <div>

            <div className="flex items-center gap-3 mb-8">

              <FaMapMarkerAlt className="text-themebrown text-3xl" />

              <h3 className="text-3xl font-bold text-themedarkbrown">
                Major Service Locations
              </h3>

            </div>

            <div className="grid sm:grid-cols-2 gap-y-5">

              {districts.map((district, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-themebrown" />

                  <span className="text-gray-700 text-lg">
                    {district}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-10 bg-white rounded-2xl p-6 shadow">

              <h4 className="text-2xl font-semibold text-themedarkbrown">
                Need Delivery Outside These Areas?
              </h4>

              <p className="mt-3 text-gray-600 leading-8">
                Contact us for bulk orders or dealership enquiries.
                We are continuously expanding our delivery network.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DeliveryAreas;