import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const ProductModal = ({ isOpen, onClose, category }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !category) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen flex items-center justify-center p-3 sm:p-5">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}

          <div className="sticky top-0 z-20 bg-white border-b px-5 md:px-8 py-5 flex justify-between items-start gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-themebrown">
                {category.title}
              </h2>

              <p className="text-gray-600 mt-2 text-sm md:text-base max-w-3xl">
                {category.description}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-600 shrink-0"
            >
              <FaTimes />
            </button>
          </div>

          {/* Products */}

          <div className="p-4 md:p-8 max-h-[75vh] overflow-y-auto">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {category.images.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FCF8F3] rounded-2xl shadow-md hover:shadow-xl duration-300 overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-56 sm:h-64 object-cover hover:scale-105 duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-center font-semibold text-lg text-themedarkbrown">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
