import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductMarque from "../components/ProductMarque";
import { useLanguage } from "../context/LanguageContext";

const Products = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F8F6F2] py-20 lg:py-28"
    >
      {/* Heading */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[3px] text-themebrown font-semibold text-sm"
        >
          {language === "hi" ? "हमारे उत्पाद" : "OUR PRODUCTS"}
        </motion.p>

        <motion.h2  initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mt-4 text-themedarkbrown font-bold text-4xl lg:text-6xl"
        >
          {language === "hi"
            ? "कृषि उपकरणों की विस्तृत श्रृंखला"
            : "Premium Agricultural Implements"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-[#6B5B4D] leading-8 text-lg"
        >
          {language === "hi"
            ? "हम किसानों के लिए उच्च गुणवत्ता वाले कृषि उपकरणों का निर्माण करते हैं।"
            : "Discover our premium range of agricultural implements engineered for durability, superior performance and trusted by farmers across the region."}
        </motion.p>

      </div>

      {/* Marquee */}

      <div
        className="relative mt-12 group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Marquee */}

        <div>
  <ProductMarque paused={hovered} />
</div>

        {/* Overlay */}

       <AnimatePresence>
  {hovered && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 z-30 flex items-center justify-center"
    >
      {/* Very light white overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Clickable Text */}
      <motion.p
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        exit={{ y: 15 }}
        transition={{ duration: 0.25 }}
        onClick={() => navigate("/products")}
        className="
          relative
          cursor-pointer
          text-4xl
          lg:text-5xl
          font-bold
          text-themebrown
          hover:text-[#8A5A2A]
          transition-all
          duration-300
          select-none
          text-center
        "
      >
        {language === "hi"
          ? "सभी उत्पाद देखें "
          : "View"}
          <br/>
          {language === "hi"
          ? " "
          : "All Products"}
      </motion.p>
    </motion.div>
  )}
</AnimatePresence>

      </div>

    </section>
  );
};

export default Products;