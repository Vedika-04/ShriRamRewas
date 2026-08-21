import React, { useEffect } from "react";
import HeroShowcase from "../components/HeroShowcase";
import backcover from "../assets/background.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../context/LanguageContext";
import { heroTranslations } from "../translations/hero";

const Hero = () => {
  const { language } = useLanguage();
  const t = heroTranslations[language];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 50);
  }, [language]);

  return (
    <div
      id="home"
      className="
      w-full
      lg:px-16
      md:px-10
      px-5
      lg:h-[650px]
      min-h-[620px]
      flex
      flex-col-reverse
      lg:flex-row
      items-center
      justify-center
      gap-10
      bg-cover
      bg-center
      py-10
      lg:py-16
      "
      style={{ backgroundImage: `url(${backcover})` }}
    >
      {/* LEFT CONTENT */}

      <div
        className={`
          flex-1
          text-center
          lg:text-left
          lg:pl-32
          xl:pl-36
          ${
            language === "hi"
              ? "font-hindi"
              : "font-poppins"
          }
        `}
      >
        {/* Badge */}

        <h1
          data-aos="zoom-in"
          data-aos-delay="50"
          className={`
            inline-block
            border-2
            border-[#8B5E34]
            text-[#8B5E34]
            rounded-xl
            font-semibold

            ${
              language === "hi"
                ? `
                  text-[18px]
                  sm:text-[20px]
                  lg:text-[24px]
                  px-5
                  py-2
                `
                : `
                  text-[14px]
                  sm:text-[16px]
                  lg:text-[20px]
                  px-5
                  py-2
                `
            }
          `}
        >
          {t.badge}
        </h1>

        {/* Title */}

        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className={`
            text-themedarkbrown
            

            ${
              language === "hi"
                ? `
                  font-semibold
                  text-[40px]
                  sm:text-[52px]
                  lg:text-[58px]
                  leading-[1.35]
                  tracking-wide
                  mt-2
                `
                : `
                  font-semibold
                  text-[34px]
                  sm:text-[44px]
                  lg:text-[48px]
                  leading-tight
                  mt-4
                `
            }
          `}
        >
          {t.title}
        </h1>

        {/* Location */}

        <h3
          data-aos="zoom-in"
          data-aos-delay="150"
          className={`
            text-[#A56A1F]
            

            ${
              language === "hi"
                ? `
                  font-semibold
                  text-[22px]
                  sm:text-[26px]
                  lg:text-[34px]
                  leading-[1.5]
                  mt-1
                `
                : `
                  font-semibold
                  text-[20px]
                  sm:text-[24px]
                  lg:text-[28px]
                  mt-3
                `
            }
          `}
        >
          {t.location}
        </h3>

        {/* Subtitle */}

        <h4
          data-aos="zoom-in"
          data-aos-delay="180"
          className={`
            text-themedarkbrown
            

            ${
              language === "hi"
                ? `
                  font-semibold
                  text-[20px]
                  sm:text-[24px]
                  lg:text-[30px]
                  leading-[1.6]
                  mt-1
                `
                : `
                  font-semibold
                  text-[18px]
                  sm:text-[22px]
                  lg:text-[24px]
                  leading-snug
                  mt-3
                `
            }
          `}
        >
          {t.subtitle}
        </h4>
                {/* Description */}

        <p
          data-aos="zoom-in"
          data-aos-delay="220"
          className={`
            
            max-w-xl
            text-[#6B5B4D]
            text-justify

            ${
              language === "hi"
                ? `
                  font-normal
                  text-[17px]
                  sm:text-[19px]
                  lg:text-[21px]
                  leading-[2]
                  mt-2
                `
                : `
                  font-normal
                  text-[16px]
                  sm:text-[17px]
                  lg:text-[18px]
                  leading-8
                  mt-5
                `
            }
          `}
        >
          {t.description}
        </p>

        {/* Buttons */}

        <div
          data-aos="zoom-in"
          data-aos-delay="250"
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            lg:items-start
            justify-center
            lg:justify-start
            gap-4
            mt-8
          "
        >
          <button
            className={`
              bg-yellow-500
              hover:bg-yellow-600
              text-[#3B2418]
              rounded-lg
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              w-full
              sm:w-auto

              ${
                language === "hi"
                  ? `
                    text-[18px]
                    px-10
                    py-3
                  `
                  : `
                    text-[17px]
                    px-8
                    py-3
                  `
              }
            `}
          >
            {t.explore}
          </button>

          <button
            className={`
              border-2
              border-themebrown
              text-themebrown
              hover:bg-themebrown
              hover:text-white
              rounded-lg
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              w-full
              sm:w-auto

              ${
                language === "hi"
                  ? `
                    text-[18px]
                    px-10
                    py-3
                  `
                  : `
                    text-[17px]
                    px-8
                    py-3
                  `
              }
            `}
          >
            {t.contact}
          </button>
        </div>

      </div>
            {/* Right Hero Showcase */}

      <div
        data-aos="fade-left"
        className="
          w-full
          lg:w-[42%]
          flex
          justify-center
          items-center
          lg:pr-28
          mb-4
          lg:mb-6
          lg:mt-6
        "
      >
        <HeroShowcase />
      </div>
    </div>
  );
};

export default Hero;