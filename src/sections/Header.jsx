import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import { FaSearch, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { IoPerson, IoClose } from "react-icons/io5";
import { FaBars, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import logo from "../assets/logo.jpeg";
import { useLanguage } from "../context/LanguageContext";
import { headerTranslations } from "../translations/header";
import { productsData } from "../data/productsData";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  const t = headerTranslations[language];

  /* =========================
     SCROLL
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  /* =========================
     NAVIGATION ITEMS
  ========================= */

  const navItems = [
    {
      name: t.home,
      type: "page",
      route: "/",
    },
    {
      name: t.about,
      type: "page",
      route: "/about",
    },
    {
      name: t.services,
      type: "section",
      id: "services",
    },
    {
      name: t.products,
      type: "page",
      route: "/products",
    },
    {
      name: t.reviews,
      type: "section",
      id: "reviews",
    },
    {
      name: t.contact,
      type: "section",
      id: "contact",
    },
  ];

  /* =========================
     NORMAL NAVIGATION
  ========================= */

  const handleNavigation = (item) => {
    closeMenu();

    if (item.type === "page") {
      navigate(item.route);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(item.id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 250);

      return;
    }

    const section = document.getElementById(item.id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================
     PRODUCT NAVIGATION
  ========================= */

  const handleProductClick = (id) => {
    closeMenu();

    navigate(`/products#${id}`);
  };

  /* =========================
     RETURN
  ========================= */

  return (
    <>
      {/* =====================================
          FIXED HEADER
      ===================================== */}

      <header className="fixed top-0 left-0 w-full z-[999]">
        {/* =====================================
            TOP BAR
        ===================================== */}

        <motion.div
          initial={false}
          animate={{
            height: isScrolled ? 0 : 42,
            opacity: isScrolled ? 0 : 1,
            y: isScrolled ? -42 : 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            hidden
            lg:flex
            overflow-hidden
            bg-themebrown
            text-[#F7EFE5]
          "
        >
          <div className="w-full px-16 flex justify-between items-center">
            {/* Phone */}

            <div className="flex items-center gap-2 text-sm font-medium">
              <FaPhoneVolume />
              
              <span>+91 91318 25546</span>
            </div>

            {/* Location */}

            <div className="flex items-center gap-2 text-sm font-medium">
              <FaMapMarkerAlt />
              <span>Gram Rewas, Jaora, District Ratlam (M.P.)</span>
            </div>

            {/* Email */}

            <div className="flex items-center gap-2 text-sm font-medium">
              <MdEmail />
              <span>shriramrewas@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* =====================================
            MAIN NAVBAR
        ===================================== */}

        <motion.nav
          animate={{
            height: isScrolled ? 74 : 82,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            bg-[#F8F6F2]/95
            backdrop-blur-xl
            border-b
            border-[#ECE5DB]
            shadow-sm
          "
        >
          <div className="h-full lg:px-16 px-6 flex justify-between items-center">
            {/* =================================
                LOGO
            ================================= */}

            <div
              onClick={() => navigate("/")}
              className="
                flex
                items-center
                gap-3
                cursor-pointer
                select-none
              "
            >
              <img
                src={logo}
                alt="Shri Ram"
                className="
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12
                  object-contain
                "
              />

              <div>
                <h1
                  className="
                    text-themebrown
                    font-bold
                    text-[18px]
                    sm:text-[20px]
                    leading-5
                  "
                >
                  Shri Ram
                </h1>

                <p
                  className="
                    uppercase
                    tracking-[2px]
                    sm:tracking-[3px]
                    text-[9px]
                    sm:text-[11px]
                    text-gray-600
                    font-semibold
                  "
                >
                  Welding Works
                </p>
              </div>
            </div>

            {/* =================================
                DESKTOP NAVIGATION
            ================================= */}

            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                /* =============================
                   PRODUCTS DROPDOWN
                ============================= */

                if (item.name === t.products) {
                  return (
                    <li
                      key={item.name}
                      className="
                        relative
                        h-full
                        flex
                        items-center
                        group
                      "
                    >
                      {/* Products Button */}

                      <button
                        onClick={() => navigate("/products")}
                        className="
                          relative
                          flex
                          items-center
                          gap-1
                          py-6
                          text-[15px]
                          font-semibold
                          text-themedarkbrown
                          hover:text-themebrown
                          transition-all
                          duration-300
                        "
                      >
                        {item.name}

                        {/* Arrow */}

                        <span
                          className="
                            text-xs
                            transition-transform
                            duration-300
                            group-hover:rotate-180
                          "
                        >
                          ▾
                        </span>

                        {/* Underline */}

                        <span
                          className="
                            absolute
                            left-0
                            bottom-1
                            h-[2px]
                            w-0
                            bg-themebrown
                            transition-all
                            duration-300
                            group-hover:w-full
                          "
                        />
                      </button>

                      {/* =========================
                          DESKTOP DROPDOWN
                      ========================= */}

                      <div
                        className="
                          absolute
                          top-[calc(100%-4px)]
                          left-1/2
                          -translate-x-1/2
                          w-[190px]

                          bg-[#F8F6F2]
                          border
                          border-[#E5D9CB]
                          rounded-xl

                          shadow-[0_15px_35px_rgba(59,36,24,0.15)]

                          opacity-0
                          invisible
                          translate-y-2

                          group-hover:opacity-100
                          group-hover:visible
                          group-hover:translate-y-0

                          transition-all
                          duration-200

                          overflow-hidden
                          z-[1000]
                        "
                      >
                        {/* Dropdown Header */}

                        {/* Product List */}

                        <div
                          className="
                            py-2
                            max-h-[400px]
                            overflow-y-auto
                          "
                        >
                          {productsData.map((product) => (
                            <button
                              key={product.id}
                              onClick={() => handleProductClick(product.id)}
                              className="
                                w-full
                                flex
                                justify-between
                                items-center

                                px-5
                                py-3

                                text-left
                                text-sm
                                font-medium

                                text-[#3B2418]

                                hover:bg-[#EEE3D6]
                                hover:text-[#A56A1F]

                                transition-colors
                                duration-200
                              "
                            >
                              <span>{product.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                /* =============================
                   NORMAL NAVIGATION
                ============================= */

                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item)}
                      className="
                        relative
                        text-[15px]
                        font-semibold
                        text-themedarkbrown
                        hover:text-themebrown
                        transition-all
                        duration-300

                        after:absolute
                        after:left-0
                        after:-bottom-1
                        after:h-[2px]
                        after:w-0
                        after:bg-themebrown
                        after:transition-all
                        after:duration-300

                        hover:after:w-full
                      "
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* =================================
                DESKTOP RIGHT SIDE
            ================================= */}

            <div className="hidden lg:flex items-center gap-4">
              {/* Language */}

              <button
                onClick={() =>
                  setLanguage((prev) => (prev === "hi" ? "en" : "hi"))
                }
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-themebrown
                  text-themebrown
                  font-semibold
                  hover:bg-themebrown
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                {t.switchLanguage}
              </button>

              {/* Search */}

              <FaSearch
                className="
                  text-xl
                  cursor-pointer
                  hover:text-themebrown
                  transition
                  duration-300
                "
              />

              {/* Person */}

              <IoPerson
                className="
                  text-xl
                  cursor-pointer
                  hover:text-themebrown
                  transition
                  duration-300
                "
              />

              {/* Heart */}

              <FaHeart
                className="
                  text-xl
                  cursor-pointer
                  hover:text-themebrown
                  transition
                  duration-300
                "
              />
            </div>

            {/* =================================
                MOBILE RIGHT SIDE
            ================================= */}

            <div className="lg:hidden flex items-center gap-3">
              {/* Language Toggle */}

              <button
                onClick={() =>
                  setLanguage((prev) => (prev === "hi" ? "en" : "hi"))
                }
                className="
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-themebrown
                  text-themebrown
                  text-sm
                  font-semibold
                  hover:bg-themebrown
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                {t.switchLanguage}
              </button>

              {/* Hamburger */}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-3xl text-themebrown"
              >
                {isMenuOpen ? <IoClose /> : <FaBars />}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Drawer */}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="
        lg:hidden
        bg-themebrown
        shadow-xl
        max-h-[calc(100vh-82px)]
        overflow-y-auto
      "
            >
              <div className="flex flex-col">
                {navItems.map((item) => {
                  {
                    /* ==============================
              PRODUCTS
          ============================== */
                  }

                  if (item.route === "/products") {
                    return (
                      <div key={item.name} className="border-b border-white/10">
                        {/* Products Heading */}

                        <div className="relative">
                          {/* Products text */}

                          <button
                            onClick={() => {
                              closeMenu();
                              navigate("/products");

                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                            className="
                      w-full
                      py-4
                      text-center
                      text-white
                      font-semibold
                      text-[15px]
                      hover:bg-themegold
                      hover:text-black
                      transition-all
                    "
                          >
                            {item.name}
                          </button>

                          {/* Arrow */}

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsProductsOpen((prev) => !prev);
                            }}
                            className="
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2

                      w-8
                      h-8

                      flex
                      items-center
                      justify-center

                      rounded-full

                      text-white

                      hover:bg-white/10

                      transition-all
                    "
                            aria-label="Toggle products"
                          >
                            <span
                              className={`
                        text-sm
                        transition-transform
                        duration-300
                        ${isProductsOpen ? "rotate-180" : ""}
                      `}
                            >
                              ▼
                            </span>
                          </button>
                        </div>

                        {/* ==============================
                    PRODUCT LIST
                ============================== */}

                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                              }}
                              className="
                        overflow-hidden
                        bg-[#F4EDE5]
                        border-t
                        border-[#E3D7CA]
                      "
                            >
                              {productsData.map((product) => (
                                <button
                                  key={product.id}
                                  onClick={() => {
                                    closeMenu();
                                    navigate("/products");

                                    setTimeout(() => {
                                      const section = document.getElementById(
                                        product.id,
                                      );

                                      if (section) {
                                        section.scrollIntoView({
                                          behavior: "smooth",
                                          block: "start",
                                        });
                                      }
                                    }, 300);
                                  }}
                                  className="
                            w-full

                            flex
                            items-center
                            justify-between

                            px-7
                            py-3

                            text-left

                            text-[13px]
                            font-medium

                            text-[#5A4030]

                            border-b
                            border-[#E3D7CA]

                            hover:bg-[#E8DCCF]
                            hover:text-[#A56A1F]

                            transition-all
                          "
                                >
                                  <span>{product.name}</span>

                                  <span
                                    className="
                              text-[#C38A12]
                              text-sm
                              ml-3
                            "
                                  >
                                    →
                                  </span>
                                </button>
                              ))}

                      

                              
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  {
                    /* ==============================
              OTHER MENU ITEMS
          ============================== */
                  }

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item)}
                      className="
                w-full
                py-4

                border-b
                border-white/10

                text-center

                text-white
                font-semibold
                text-[15px]

                hover:bg-themegold
                hover:text-black

                transition-all
              "
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =====================================
          HEADER SPACER
      ===================================== */}

      <div className="lg:h-[124px] h-[82px]" />
    </>
  );
};

export default Header;
