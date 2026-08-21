import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";
import { footerTranslations } from "../translations/footer";

const Footer = () => {
  const { language } = useLanguage();

  const t = footerTranslations[language];

  return (
    <footer className="w-full bg-[#85542B] text-white">

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="w-full mx-auto lg:px-8 px-5 py-10">

        <div className="grid lg:grid-cols-[1.4fr_0.9fr_1fr_1.1fr] md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">

          {/* =========================
              ABOUT
          ========================= */}

          <div>

            <h2 className="text-[32px] font-semibold underline text-[#FFD77A] leading-tight">
              Shri Ram
              <br />
              Welding Works
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-[#F7EFE5] max-w-[320px]">
              {t.description}
            </p>

            {/* Social */}

            <div className="flex gap-3 mt-7">

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#F6E8D4] text-[#85542B] hover:bg-[#FFD77A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/shriram_rewas?igsi=anJueDJodGJlcmI2"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#F6E8D4] text-[#85542B] hover:bg-[#FFD77A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@ShriRamRewas"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#F6E8D4] text-[#85542B] hover:bg-[#FFD77A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#F6E8D4] text-[#85542B] hover:bg-[#FFD77A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* =========================
              QUICK LINKS
          ========================= */}

          <div>

            <h3 className="text-xl font-semibold text-[#FFD77A] mb-5">
              {t.quickLinks}
            </h3>

            <ul className="space-y-3 text-[14px] text-[#F7EFE5]">

              <li>
                <a
                  href="#home"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {t.home}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {t.aboutUs}
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {t.products}
                </a>
              </li>

              <li>
                <a
                  href="#category"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {t.categories}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {t.contactUs}
                </a>
              </li>

            </ul>

          </div>

          {/* =========================
              PRODUCTS
          ========================= */}

          <div>

            <h3 className="text-xl font-semibold text-[#FFD77A] mb-5">
              {t.ourProducts}
            </h3>

            <ul className="space-y-3 text-[14px] text-[#F7EFE5]">

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                {t.cultivators}
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                {t.seedDrills}
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                {t.agriculturalSprayers}
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                {t.tractorTrolleys}
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                {t.waterTankers}
              </li>

            </ul>

          </div>

          {/* =========================
              CONTACT
          ========================= */}

          <div>

            <h3 className="text-xl font-semibold text-[#FFD77A] mb-5">
              {t.contactInfo}
            </h3>

            <div className="space-y-4 text-[14px] text-[#F7EFE5]">

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-[#FFD77A] mt-1 text-lg shrink-0" />

                <p className="leading-7">
                  Gram Rewas, Jaora,
                  <br />
                  District Ratlam (M.P.)
                </p>

              </div>

              <div className="flex items-center gap-3">

                <FaPhoneAlt className="text-[#FFD77A] text-base shrink-0" />

                <p>+91 91318 25546</p>

              </div>

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-[#FFD77A] text-base shrink-0" />

                <a
                  href="mailto:shriramrewas@gmail.com"
                  className="break-all text-[#F7EFE5] hover:text-[#FFD77A] transition"
                >
                  shriramrewas@gmail.com
                </a>

              </div>

              <div className="flex items-start gap-3">

                <FaClock className="text-[#FFD77A] mt-1 text-base shrink-0" />

                <p>
                  {t.mondaySaturday}
                  <br />
                  {t.timing}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          BOTTOM
      ========================= */}

      <div className="border-t border-[#A97548]">

        <div className="w-full mx-auto px-5 py-4 flex lg:flex-row flex-col justify-between items-center gap-3">

          <p className="text-[14px] text-[#F7EFE5] text-center">
            {t.rightsReserved}
          </p>

          <p className="text-[14px] text-[#F7EFE5] text-center">
            {t.designedDeveloped}{" "}
            <span className="font-semibold text-[#FFD77A]">
              Your Company
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;