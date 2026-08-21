import React, { useEffect } from "react";

const ProductImageModal = ({ product, isOpen, onClose }) => {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[1000]
        flex
        items-center
        justify-center
        bg-[#302017]/70
        px-4
        py-6
        backdrop-blur-sm
        sm:px-6
      "
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="
          relative
          flex
          max-h-[90vh]
          w-full
          max-w-[1200px]
          flex-col
          overflow-hidden
          rounded-2xl
          bg-[#F7F5F1]
          shadow-[0_25px_80px_rgba(48,32,23,0.30)]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[#DDD6CE]
            px-5
            py-4
            sm:px-7
            sm:py-5
          "
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C58F00] sm:text-xs">
              Product Gallery
            </p>

            <h2 className="mt-1 text-xl font-semibold text-[#302017] sm:text-2xl">
              {product.name}
            </h2>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#D8D0C7]
              bg-white
              text-lg
              text-[#302017]
              transition
              duration-200
              hover:border-[#C58F00]
              hover:bg-[#C58F00]
              hover:text-white
              sm:h-10
              sm:w-10
            "
          >
            ×
          </button>
        </div>

        {/* Images */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.images?.map((image, index) => (
              <div
                key={`${product.id}-modal-${index}`}
                className="
                  flex
                  min-h-[220px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#DDD6CE]
                  bg-white
                  p-4
                  sm:min-h-[250px]
                  sm:p-5
                "
              >
                <img
                  src={image}
                  alt={`${product.name} - view ${index + 1}`}
                  className="
                    h-full
                    max-h-[320px]
                    w-full
                    object-contain
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageModal;