import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ProductHero from "../sections/ProductHero";
import ProductSection from "../sections/ProductSection";
import ProductNavigation from "../components/ProductNavigation";

import { productsData } from "../data/productsData";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F5F1] text-[#302017]">
      {/* Common website header */}
      <Header />

      {/* Products page introduction */}
      <ProductHero />

      {/* Product sections */}
      <div>
        {productsData.map((product, index) => (
          <ProductSection
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>

      {/* Sticky bottom product navigation */}
      <ProductNavigation />

      {/* Common website footer */}
      <Footer />
    </main>
  );
};

export default Products;

