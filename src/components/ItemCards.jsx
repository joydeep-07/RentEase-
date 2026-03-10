import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { FaHeart } from "react-icons/fa";

const ItemCards = ({ items = [], limit }) => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  const visibleItems = limit ? items.slice(0, limit) : items;

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const image = card.querySelector(".card-image");
      const wishlist = card.querySelector(".wishlist-btn");

      gsap.set(wishlist, {
        x: 40,
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
      });

      card.addEventListener("mouseenter", () => {
        gsap.set(wishlist, {
          visibility: "visible",
          pointerEvents: "auto",
        });

        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(wishlist, {
          x: 0,
          opacity: 1,
          duration: 0.35,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
        });

        gsap.to(wishlist, {
          x: 40,
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            gsap.set(wishlist, {
              visibility: "hidden",
              pointerEvents: "none",
            });
          },
        });
      });
    });
  }, [visibleItems]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {visibleItems.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (cardsRef.current[index] = el)}
          onClick={() => navigate(`/product-detail/${item.id}`)}
          className="cursor-pointer group relative flex flex-col rounded-sm overflow-hidden
          border border-[var(--border-light)]
          bg-[var(--bg-secondary)]
          shadow-lg transition-all duration-300"
        >
          {/* Wishlist */}
          <button
            className="wishlist-btn absolute top-3 right-3 z-10 
            bg-[var(--text-main)]/80 backdrop-blur-md
            p-2 rounded-full border border-[var(--border-light)]/10
            hover:text-[var(--sale)] text-white transition"
          >
            <FaHeart size={16} />
          </button>

          {/* Image */}
          <div className="overflow-hidden">
            <img
              className="card-image w-full h-52 object-cover"
              src={item.image}
              alt={item.productName}
            />
          </div>

          {/* Info */}
          <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-3">
            <div className="min-w-0">
              <p className="text-[var(--text-main)] text-sm sm:text-base font-semibold truncate">
                {item.productName}
              </p>

              {/* Mobile price */}
              <p className="sm:hidden text-[var(--accent-primary)] font-semibold text-xs mt-1">
                ₹ {item.pricePerDay}
                <span className="text-[var(--text-secondary)] text-[10px]">
                  {" "}
                  / day
                </span>
              </p>

              {/* Brand + condition (hidden on mobile) */}
              <p className="hidden sm:block text-[var(--text-secondary)] text-xs mt-1">
                {item.brand} • {item.condition}
              </p>
            </div>

            {/* Desktop price */}
            <p className="hidden sm:block text-[var(--accent-primary)] font-semibold text-lg whitespace-nowrap">
              ₹ {item.pricePerDay}
              <span className="text-[var(--text-secondary)] text-xs">
                {" "}
                / day
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
