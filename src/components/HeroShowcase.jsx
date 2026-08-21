import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides } from "../data/heroSlides";

const HeroShowcase = () => {
  const autoplay = Autoplay({
    delay: 2500,
    playOnInit: true,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      duration: 28,
    },
    [autoplay],
  );
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div
      className="
      w-full
      flex
      justify-center
      items-center
      overflow-hidden
      "
    >
      <div
        ref={emblaRef}
        className="
    overflow-hidden
    w-[320px]
    sm:w-[360px]
    md:w-[400px]
    lg:w-[450px]
    xl:w-[480px]
  "
      >
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="
              flex-[0_0_100%]
              flex
              justify-center
              items-center
              "
            >
              <div
                className={`
    overflow-hidden
    
    ${selectedIndex === index ? "scale-[1.05]" : "scale-[0.95]"}
    transition-all
    duration-700
    ease-in-out
    lg:p-16
    p-2
  `}
              >
                <img
                  src={slide.image}
                  alt="Product"
                  draggable={false}
                  className="
      w-[280px]
      sm:w-[310px]
      md:w-[350px]
      lg:w-[380px]
      xl:w-[410px]
      block
      object-contain
      rounded-[16px]
    "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
