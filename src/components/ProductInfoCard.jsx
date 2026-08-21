import React from "react";

const ProductInfoCard = ({ product }) => {
  return (
    <div
      className="
        h-full
        rounded-2xl
        border
        border-[#DDD7CF]
        bg-white
        p-6
        sm:p-7
        lg:p-8
      "
    >
      {/* Introduction */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017]">
          Introduction
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#514A44] sm:text-[15px] sm:leading-7">
          {product.introduction}
        </p>
      </div>

      {/* Features */}
      {product.features?.length > 0 && (
        <div className="mt-6 border-t border-[#E5E0D9] pt-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017]">
            Key Features
          </h3>

          <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-sm leading-6 text-[#514A44]"
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Working */}
      {product.working && (
        <div className="mt-6 border-t border-[#E5E0D9] pt-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017]">
            How It Works
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#514A44] sm:text-[15px] sm:leading-7">
            {product.working}
          </p>
        </div>
      )}

      {/* Brochure */}
      <div className="mt-6 border-t border-[#E5E0D9] pt-5">
        <button
          type="button"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#26382C]
            px-5
            py-2.5
            text-xs
            font-semibold
            text-white
            transition
            duration-300
            hover:bg-[#D4A017]
            hover:text-[#26382C]
          "
        >
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default ProductInfoCard;