import React, { useEffect } from "react";
import SliderImport from "react-slick";
const Slider = SliderImport && (SliderImport.default || SliderImport);

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { reviews } from "../export.js";
import { useLanguage } from "../context/LanguageContext";
import { reviewsTranslations } from "../translations/reviews";

const Reviews = () => {
  const { language } = useLanguage();

  const t = reviewsTranslations[language];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <div
      id="reviews"
      className="
        w-full
        lg:px-20
        px-5
        py-[60px]
        bg-gray-100
        flex
        flex-col
        justify-center
        items-center
        gap-4
      "
    >
      {/* =========================
          SECTION LABEL
      ========================= */}

      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="
          text-themebrown
          text-xl
          font-semibold
          capitalize
          text-center
        "
      >
        {t.happyCustomers}
      </h1>

      {/* =========================
          SECTION HEADING
      ========================= */}

      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="
          text-black
          font-semibold
          text-[42px]
          leading-[50px]
          text-center
          capitalize
        "
      >
        {t.title}
      </h1>

      {/* =========================
          REVIEWS SLIDER
      ========================= */}

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full mt-4"
      >
        <Slider className="w-full" {...settings}>
          {reviews.map((item, index) => (
            <div key={index}>
              <div
                className="
                  w-full
                  flex
                  flex-col
                  justify-center
                  items-center
                  gap-4
                  lg:p-10
                  p-3
                "
              >
                {/* Customer Image */}

                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-full w-[100px] m-auto"
                />

                {/* Stars */}

                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-themebrown" />
                  <FaStar className="text-themebrown" />
                  <FaStar className="text-themebrown" />
                  <FaStar className="text-themebrown" />
                  <FaStar className="text-themebrown" />
                </div>

                {/* Review Text */}

                <p className="text-center text-gray-500 text-lg">
                  "{t[`review${index + 1}`] || item.para}"
                </p>

                {/* Customer Information */}

                <div className="flex justify-center items-center gap-5">
                  <FaQuoteLeft className="fill-themebrown size-16" />

                  <div className="w-full flex flex-col justify-center items-start">
                    <h1
                      className="
                        text-black
                        text-xl
                        capitalize
                        font-semibold
                      "
                    >
                      {item.name}
                    </h1>

                    <h1 className="text-gray-500 capitalize">
                      {t.farmer} • {item.post.split("•")[1]?.trim() || ""}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;