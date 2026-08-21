import React from "react";
// import workshop from "../assets/workshop.jpg"; // Replace with your factory/workshop image

const CompanyStory = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto lg:px-16 px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="flex justify-center">
{/* 
            <img
              src={workshop}
              alt="Shri Ram Welding Works"
              className="rounded-3xl shadow-xl w-full max-w-[520px] object-cover"
            /> */}

          </div>

          {/* Right Content */}

          <div>

            <span className="text-themebrown uppercase tracking-[3px] font-semibold text-sm">
              Our Story
            </span>

            <h2 className="text-themedarkbrown text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Serving Farmers
              <br />
              With Trust & Quality
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-8 text-justify">
              Shri Ram Welding Works began with a simple vision—to manufacture
              durable and affordable agricultural implements that help farmers
              work more efficiently.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8 text-justify">
              Over the years, we have earned the trust of thousands of farmers
              by consistently delivering high-quality products, timely service,
              and dependable support. Every machine is crafted with precision,
              ensuring long-lasting performance in the field.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8 text-justify">
              Today, our products are widely used across Madhya Pradesh and
              nearby regions, making us a trusted partner in modern farming.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStory;