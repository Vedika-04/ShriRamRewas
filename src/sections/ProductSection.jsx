import React, { useState } from "react";
import ProductInfoCard from "../components/ProductInfoCard";
import ProductGallery from "../components/ProductGallery";
import ProductImageModal from "../components/ProductImageModal";

const ProductSection = ({ product, index }) => {
  if (!product) return null;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section
      id={product.id}
      className="scroll-mt-24 border-b border-[#DDD7CF] bg-[#F7F5F1]"
    >
      <div className="mx-auto w-full max-w-[1480px] px-6 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-14">
        {/* Product Number */}
        <div data-aos="fade-up" className="mb-6 flex items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4A017]">
            Product {String(index + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-82 bg-[#D4A017]" />
        </div>

        {/* Product Name */}
        <div data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#26382C] sm:text-4xl lg:text-5xl">
            {product.name}
          </h2>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-[#756D65] sm:text-sm">
            {product.category}
          </p>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1.35fr] lg:gap-10">
          {/* LEFT — Main Product Image */}
          <div
            data-aos="fade-right"
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-[#DDD7CF]
              bg-white
              p-4
              sm:min-h-[360px]
              sm:p-6
              lg:min-h-[400px]
            "
          >
            <img
              src={product.mainImage}
              alt={product.name}
              className="h-full max-h-[440px] w-full object-contain"
            />
          </div>

          {/* RIGHT — Product Details */}
          <ProductInfoCard product={product} index={index} />
        </div>

        {/* Gallery */}
        <div data-aos="fade-up" className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold uppercase tracking-[0.18em] text-[#26382C]">
              Product Gallery
            </h3>

            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="
    text-[16px]
    font-semibold
    uppercase
    text-themedarkbrown
    underline
    underline-offset-4
    transition
    duration-200
    hover:text-[#C58F00]
  "
            >
              Explore {product.name}
            </button>
          </div>

          <ProductGallery
            images={product.images}
            direction="right"
            productName={product.name}
          />
        </div>
      </div>
      <ProductImageModal
        product={product}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
};

export default ProductSection;
