import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import qr from "../assets/image.png";

const Socialmedia = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-[#FFFDF8] via-[#F8F6F2] to-[#F3EEE5] py-20 lg:px-20 px-5"
    >
      {/* Heading */}

      <div className="text-center mb-14">
        <h3
          data-aos="fade-up"
          className="text-themebrown text-2xl font-semibold"
        >
          Stay Connected
        </h3>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-themedarkbrown font-bold lg:text-5xl text-4xl mt-3"
        >
          Connect With Us
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 leading-8"
        >
          Follow us for the latest agricultural products, manufacturing
          updates and farming solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* ================= MAP ================= */}

        <div
          data-aos="zoom-in"
          className="rounded-3xl overflow-hidden shadow-xl border border-[#E6D8C6]"
        >
          <iframe
            title="Factory Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.12182854945!2d75.18977869999999!3d23.564067599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640f061cfd87a1%3A0xd17d6c686674edd7!2sShri%20Ram%20Welding%20Works%20Rewas!5e0!3m2!1sen!2sin!4v1785622965182!5m2!1sen!2sin"
            referrerpolicy="strict-origin-when-cross-origin"
            width="100%"
            height="380"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>

        {/* ================= INFO SECTION ================= */}

        <div
          data-aos="fade-up"
          className="bg-white rounded-b-3xl border border-t-0 border-[#E6D8C6] shadow-xl grid lg:grid-cols-3 gap-10 p-10"
        >

          {/* ADDRESS */}

          <div>

            <div className="flex items-start gap-4">

              <div className="w-14 h-14 rounded-full bg-themebrown text-white flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-themebrown">
                  Shri Ram Welding Works
                </h2>

                <p className="text-gray-600 mt-3 leading-8">
                  Gram Rewas, Jaora
                  <br />
                  District Ratlam (M.P.)
                </p>

              </div>

            </div>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-themebrown" />
                +91 XXXXX XXXXX
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-themebrown" />
                your@email.com
              </div>

            </div>

            <a
              href="https://maps.app.goo.gl/tuiqmo5wVGi98JWF9?g_st=aw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-themebrown hover:bg-themegold hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Get Directions

              <FaArrowRight />
            </a>

          </div>

          {/* QR */}

          <div className="flex flex-col items-center justify-center border-y lg:border-y-0 lg:border-x border-[#EFE2CF] py-6">

            <img
              src={qr}
              alt="QR"
              className="w-44 h-44 rounded-2xl bg-white shadow-lg border p-3"
            />

            <h3 className="mt-5 text-lg font-semibold text-themebrown">
              Scan to Visit Factory
            </h3>

            <p className="text-gray-500 mt-2 text-center">
              Open Google Maps instantly
            </p>

          </div>

          {/* SOCIAL */}

          <div>

            <h2 className="text-2xl font-bold text-themebrown mb-7">
              Follow Us
            </h2>

            <div className="flex gap-5">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-[#F8F4EC] hover:bg-themebrown hover:text-white text-themebrown shadow-md flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-[#F8F4EC] hover:bg-themebrown hover:text-white text-themebrown shadow-md flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-[#F8F4EC] hover:bg-themebrown hover:text-white text-themebrown shadow-md flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaYoutube />
              </a>

            </div>

            <div className="mt-8 space-y-4 text-gray-600">

              <p>
                Follow us for latest agricultural products.
              </p>

              <p>
                Watch manufacturing and machine demos.
              </p>

              <p>
                Stay updated with new launches.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Socialmedia;