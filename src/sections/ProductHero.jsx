import React from "react";

const ProductsHero = () => {
  return (
    <section className="bg-themecream text-[#F7EFE5]">
      <div
        data-aos="fade-up"
        className="
          mx-auto
          w-full
          max-w-[1480px]
          px-4
          py-6
          sm:px-6
          sm:py-8
          lg:px-10
          lg:py-12
        "
      >
        {/* Small Label */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-themedarkbrown sm:text-sm">
          Shri Ram Rewas
        </p>

        {/* Main Heading */}
        <h1
          className="
            text-[#26382C]
            text-2xl
            font-semibold
            leading-[1.05]
            tracking-[-0.025em]
            sm:text-4xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          India’s leading manufacturing company with a wide product range.
        </h1>

        {/* Full-width Introduction */}
        <p
          className="
            mt-5
            w-full
            max-w-none
            text-sm
            leading-6
            text-themedarkbrown
            sm:text-base
            sm:leading-7
            lg:text-[20px]
            lg:leading-8
            font-medium
          "
        >
         We are one of the renowned marketer, manufacturers, suppliers, importers and exporters of a wide range of Tractor Trailer Hydraulic Jacks & Accessories. Apart from this we offer Submersible Pumps, JCB Machine Parts and Agriculture Machine Parts.

        </p>
        <p className="
            mt-5
            w-full
            max-w-none
            text-sm
            leading-6
            text-themedarkbrown
            sm:text-base
            sm:leading-7
            lg:text-[20px]
            lg:leading-8
            font-medium
          ">These products are made employing cutting-edge technology and advanced equipment, at our state-of-the-art manufacturing unit. Our range is available in standard as well as custom-made forms for catering to the variegated requirements of the customers in the best possible manner.</p>

        {/* Divider */}
        {/* <div className="mt-10 h-px w-full bg-[#D9D2C9] lg:mt-12" /> */}
      </div>
    </section>
  );
};

export default ProductsHero;