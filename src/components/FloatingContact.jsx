import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";
import ReactCurvedText from "react-curved-text";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  const phone = "919131825546";

  const whatsapp = `https://wa.me/${phone}`;
  const call = `tel:+${phone}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-3 sm:gap-4">
      {/* WhatsApp */}

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 sm:translate-y-6 pointer-events-none"
        }`}
      >
        <span className="hidden sm:inline-block bg-white rounded-full px-4 py-2 shadow-lg font-medium text-sm">
          WhatsApp
        </span>

        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition">
          <FaWhatsapp size={22} />
        </div>
      </a>

      {/* Call */}

      <a
        href={call}
        className={`flex items-center gap-3 transition-all duration-300 delay-100 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 sm:translate-y-6 pointer-events-none"
        }`}
      >
        <span className="hidden sm:inline-block bg-white rounded-full px-4 py-2 shadow-lg font-medium text-sm">
          Call Us
        </span>

        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-themebrown text-white flex items-center justify-center shadow-xl hover:scale-110 transition">
          <FaPhoneAlt size={20} />
        </div>
      </a>

      {/* Floating Button */}

      <div className="relative w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] flex items-center justify-center">
        {/* Rotating Text */}

        <div className="absolute animate-spin-slow scale-90 sm:scale-100">
          <ReactCurvedText
            width={110}
            height={110}
            cx={55}
            cy={55}
            rx={45}
            ry={45}
            startOffset={0}
            reversed={false}
            text="CONTACT • CONTACT • CONTACT • CONTACT • "
            textProps={{
              style: {
                fill: "#25D366",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "2px",
              },
            }}
          />
        </div>

        {/* Main Button */}

        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition z-10"
        >
          {open ? <FaTimes size={20} /> : <FaPhoneAlt size={20} />}
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;
