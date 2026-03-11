import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { FaTrash, FaSearch } from "react-icons/fa";
import { EllipsisVertical, Search } from "lucide-react";

const AdminItemCards = ({ items = [], limit }) => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  const [localItems, setLocalItems] = useState(items);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  /* ---------------- SEARCH FILTER ---------------- */

  const filteredItems = localItems.filter((item) => {
    const term = search.toLowerCase();

    return (
      item.productName.toLowerCase().includes(term) ||
      item.itemType.toLowerCase().includes(term) ||
      item.brand.toLowerCase().includes(term) ||
      item.keywords.some((k) => k.toLowerCase().includes(term))
    );
  });

  const visibleItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  /* ---------------- STOCK TOGGLE ---------------- */

  const handleOutOfStockToggle = (itemId, checked) => {
    setLocalItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOutOfStock: checked } : item,
      ),
    );
  };

  /* ---------------- DELETE ---------------- */

  const handleDelete = (itemId) => {
    if (window.confirm("Delete this item?")) {
      setLocalItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId),
      );
    }
  };

  /* ---------------- GSAP HOVER ---------------- */

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const image = card.querySelector(".card-image");
      const menuBtn = card.querySelector(".menu-btn");

      gsap.set(menuBtn, {
        x: 40,
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
      });

      card.addEventListener("mouseenter", () => {
        gsap.set(menuBtn, {
          visibility: "visible",
          pointerEvents: "auto",
        });

        gsap.to(image, {
          scale: 1.08,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(menuBtn, {
          x: 0,
          opacity: 1,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.45,
        });

        gsap.to(menuBtn, {
          x: 40,
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            gsap.set(menuBtn, {
              visibility: "hidden",
              pointerEvents: "none",
            });
          },
        });
      });
    });
  }, [visibleItems]);

  return (
    <div className="flex flex-col gap-6">
      {/* SEARCH BAR */}
      <div
        className="flex items-center gap-3 w-full max-w-xl px-4 py-3 rounded-full
  border border-[var(--border-light)]
  bg-[var(--bg-secondary)]
  text-[var(--text-main)]
  shadow-sm transition-all duration-200
 "
      >
        <Search size={18} className="text-[var(--text-secondary)] shrink-0" />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none
    text-sm placeholder:text-[var(--text-secondary)]"
        />
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="cursor-pointer group relative flex flex-col rounded-md overflow-hidden
            border border-[var(--border-light)]
            bg-[var(--bg-secondary)]
            shadow-md transition-all duration-300 hover:shadow-xl"
            onClick={() =>
              !item.isOutOfStock && navigate(`/product-detail/${item.id}`)
            }
          >
            {/* OUT OF STOCK BADGE */}
            {item.isOutOfStock && (
              <div className="absolute top-0 left-0 z-20 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-br-lg shadow-lg">
                OUT OF STOCK
              </div>
            )}

            {/* MENU */}
            <div className="absolute top-3 right-3 z-30">
              <button
                className="menu-btn bg-[var(--bg-tertiary)]/80 backdrop-blur-md
                p-2 rounded-full border border-[var(--border-light)]/10
                hover:text-[var(--accent-primary)] text-white transition"
                onClick={(e) => e.stopPropagation()}
              >
                <EllipsisVertical size={16} />
              </button>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden relative">
              <img
                className={`card-image w-full h-52 object-cover transition-all duration-300 ${
                  item.isOutOfStock ? "opacity-50" : ""
                }`}
                src={item.image}
                alt={item.productName}
              />

              {item.isOutOfStock && (
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <span className="text-white font-bold text-lg transform -rotate-45 opacity-80">
                    SOLD OUT
                  </span>
                </div>
              )}
            </div>

            {/* INFO */}
            <div className="p-4 flex flex-col gap-3 flex-grow">
              {/* NAME + PRICE */}
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-[var(--text-main)] text-sm sm:text-base font-semibold leading-snug line-clamp-2">
                  {item.productName}
                </h3>

                <div className="text-right shrink-0">
                  <p className="text-[var(--accent-primary)] font-semibold text-lg leading-none">
                    ₹{item.pricePerDay}
                  </p>
                  <span className="text-[var(--text-secondary)] text-xs">
                    /day
                  </span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-[var(--border-light)]"></div>

              {/* ADMIN CONTROLS */}
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                  className="flex items-center gap-2 text-xs px-2 py-1.5 rounded-md
                  text-red-500 hover:bg-red-500/10 transition"
                >
                  <FaTrash size={14} />
                  Delete
                </button>

                <label
                  className="flex items-center gap-2 text-xs text-[var(--text-secondary)] cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={item.isOutOfStock || false}
                    onChange={(e) =>
                      handleOutOfStockToggle(item.id, e.target.checked)
                    }
                    className="w-4 h-4 accent-red-500 cursor-pointer"
                  />
                  Out of Stock
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminItemCards;
