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

const Footer = () => {
  return (
    <footer className="w-full bg-[#85542B] text-white">

      {/* Main Footer */}

      <div className="w-full mx-auto lg:px-8 px-5 py-10">

        <div className="grid lg:grid-cols-[1.4fr_0.9fr_1fr_1.1fr] md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">

          {/* About */}

          <div>

            <h2 className="text-[32px] font-semibold underline text-[#FFD77A] leading-tight">
              Shri Ram
              Welding Works
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-[#F7EFE5] max-w-[320px]">
              Manufacturers of premium agricultural implements including
              cultivators, seed drills, agricultural sprayers, tractor
              trolleys and water tankers with trusted quality and
              durability.
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
                href="#"
                className="w-9 h-9 rounded-full bg-[#F6E8D4] text-[#85542B] hover:bg-[#FFD77A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
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

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-[#FFD77A] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[14px] text-[#F7EFE5]">

              <li>
                <a
                  href="#home"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="#category"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FFD77A] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-xl font-semibold text-[#FFD77A] mb-5">
              Our Products
            </h3>

            <ul className="space-y-3 text-[14px] text-[#F7EFE5]">

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                Cultivators
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                Seed Drills
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                Agricultural Sprayers
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                Tractor Trolleys
              </li>

              <li className="hover:text-[#FFD77A] cursor-pointer transition">
                Water Tankers
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-[#FFD77A] mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-[14px] text-[#F7EFE5]">

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-[#FFD77A] mt-1 text-lg shrink-0" />

                <p className="leading-7">
                  Gram Rewas,Jaora,
                  <br />
                  District Ratlam (M.P.)
                </p>

              </div>

              <div className="flex items-center gap-3">

                <FaPhoneAlt className="text-[#FFD77A] text-base shrink-0" />

                <p>+91 XXXXX XXXXX</p>

              </div>

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-[#FFD77A] text-base shrink-0" />

                <p className="break-all">
                  info@shriramweldingworks.com
                </p>

              </div>

              <div className="flex items-start gap-3">

                <FaClock className="text-[#FFD77A] mt-1 text-base shrink-0" />

                <p>
                  Mon – Sat
                  <br />
                  9:00 AM – 7:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#A97548]">

        <div className="w-full mx-auto px-5 py-4 flex lg:flex-row flex-col justify-between items-center gap-3">

          <p className="text-[14px] text-[#F7EFE5] text-center">
            © 2026 Shri Ram Welding Works. All Rights Reserved.
          </p>

          <p className="text-[14px] text-[#F7EFE5] text-center">
            Designed & Developed by{" "}
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