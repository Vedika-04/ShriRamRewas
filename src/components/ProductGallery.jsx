import React, { useEffect, useRef, useState } from "react";

const ProductGallery = ({
  images = [],
  direction = "left",
  productName = "Product",
}) => {
  const firstSetRef = useRef(null);
  const [setWidth, setSetWidth] = useState(0);

  if (!images || images.length === 0) return null;

  // ============================================
  // MEASURE ONE COMPLETE IMAGE SET
  // ============================================

  useEffect(() => {
    const measureWidth = () => {
      if (firstSetRef.current) {
        setSetWidth(firstSetRef.current.offsetWidth);
      }
    };

    measureWidth();

    const resizeObserver = new ResizeObserver(measureWidth);

    if (firstSetRef.current) {
      resizeObserver.observe(firstSetRef.current);
    }

    window.addEventListener("resize", measureWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureWidth);
    };
  }, [images]);

  // ============================================
  // SPEED
  // ============================================

  const duration = Math.max(6, images.length * 1.1);

  // ============================================
  // ONE COMPLETE IMAGE SET
  // ============================================

  const renderImageSet = (setIndex) => (
    <div
      ref={setIndex === 0 ? firstSetRef : null}
      className="
        flex
        shrink-0
        items-center
        gap-2
        pr-4
        sm:gap-6
        sm:pr-6
        lg:gap-4
        lg:pr-8
      "
    >
      {images.map((image, index) => (
        <div
          key={`set-${setIndex}-image-${index}`}
          className="
            flex
            h-[280px]
            w-[220px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-[#DED6CC]
            bg-themecream
            p-4
            shadow-[0_8px_30px_rgba(48,32,23,0.06)]
            sm:h-[300px]
            sm:w-[220px]
            sm:p-2
            lg:h-[360px]
            lg:w-[300px]
            lg:p-4
            mb-4
          "
        >
          <img
            src={image}
            alt={
              setIndex === 0
                ? `${productName} - image ${index + 1}`
                : ""
            }
            aria-hidden={setIndex !== 0}
            className="h-full w-full object-contain"
            loading="lazy"
            draggable="false"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">

      <div
        className="product-gallery-track flex w-max items-center"
        style={{
          "--gallery-distance": `${setWidth}px`,

          animationName:
            direction === "right"
              ? "product-gallery-right"
              : "product-gallery-left",

          animationDuration: `${duration}s`,
        }}
      >

        {/* =========================================
            FOUR IDENTICAL SETS
            ========================================= */}

        {renderImageSet(0)}
        {renderImageSet(1)}
        {renderImageSet(2)}
        {renderImageSet(3)}

      </div>

      {/* =========================================
          LEFT FADE
          ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-6
          bg-gradient-to-r
          from-[#F7F5F1]
          to-transparent
          sm:w-8
          lg:w-16
        "
      />

      {/* =========================================
          RIGHT FADE
          ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-6
          bg-gradient-to-l
          from-[#F7F5F1]
          to-transparent
          sm:w-8
          lg:w-16
        "
      />

    </div>
  );
};

export default ProductGallery;