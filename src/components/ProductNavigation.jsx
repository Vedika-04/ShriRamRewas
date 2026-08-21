import React, { useEffect, useState } from "react";
import { productsData } from "../data/productsData";

const ProductNavigation = () => {
  const [activeProduct, setActiveProduct] = useState(productsData[0]?.id);

  useEffect(() => {
    const sections = productsData
      .map((product) => document.getElementById(product.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleSections.length > 0) {
          setActiveProduct(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleProductClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="
        fixed
        bottom-4
        sm:bottom-5
        left-1/2
        -translate-x-1/2
        z-[998]
        w-[calc(100%-24px)]
        sm:w-[calc(100%-40px)]
        lg:w-auto
        max-w-[95vw]
        bg-[#3B2418]/95
        backdrop-blur-xl
        border
        border-[#D4A017]/30
        rounded-2xl
        sm:rounded-full
        shadow-[0_10px_40px_rgba(59,36,24,0.28)]
      "
    >
      <div
        className="
          overflow-x-auto
          scrollbar-hide
          max-w-full
          px-2
          sm:px-3
        "
      >
        <div
          className="
            flex
            items-center
            justify-start
            lg:justify-center
            gap-1
            sm:gap-1.5
            min-w-max
            py-2
          "
        >
          {productsData.map((product) => {
            const isActive = activeProduct === product.id;

            return (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className={`
                  relative
                  whitespace-nowrap
                  px-3
                  sm:px-4
                  lg:px-5
                  py-2
                  sm:py-2.5
                  rounded-full
                  text-[11px]
                  sm:text-[12px]
                  lg:text-[13px]
                  font-semibold
                  transition-all
                  duration-300
                  flex-shrink-0
                  ${
                    isActive
                      ? "bg-[#D4A017] text-[#3B2418] shadow-md"
                      : "text-[#F8F6F2] hover:bg-[#D4A017]/20 hover:text-[#D4A017]"
                  }
                `}
              >
                {product.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ProductNavigation;