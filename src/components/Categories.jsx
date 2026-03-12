import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../utils/data";
import categoryHero from "../assets/images/category.jpg";
import { FaHeart } from "react-icons/fa";
import { gsap } from "gsap";

const Categories = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  const categories = [...new Set(data.map((item) => item.itemType))];

  const sampleItems = categories.map((cat) =>
    data.find((item) => item.itemType === cat),
  );

  const handleCategoryClick = (category) => {
    navigate(`/products?q=${category}`);
  };

  // NEW: Handler for clicking a product card
  const handleProductClick = (id) => {
    navigate(`/product-detail/${id}`);
  };

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
        gsap.set(wishlist, { visibility: "visible", pointerEvents: "auto" });
        gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power3.out" });
        gsap.to(wishlist, { x: 0, opacity: 1, duration: 0.35 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.5 });
        gsap.to(wishlist, {
          x: 40,
          opacity: 0,
          duration: 0.25,
          onComplete: () =>
            gsap.set(wishlist, { visibility: "hidden", pointerEvents: "none" }),
        });
      });
    });
  }, [sampleItems]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 md:pt-16 pt-4 pb-10">
      <div className="max-w-8xl md:px-15 mx-auto flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium font-main leading-tight">
          Check out all our{" "}
          <span className="text-[var(--accent-primary)]">categories</span>
        </h2>
        <p className="text-sm md:text-base opacity-70 max-w-xl mb-4">
          Discover cameras, electronics, furniture and more from people around
          you. Renting saves money, space, and the planet.
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className="relative overflow-hidden px-8 sm:px-10 md:px-7 py-3 sm:py-3.5 md:py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-blue)]/20 shadow-sm transition-all duration-500 ease-out group w-full sm:w-auto"
            >
              <span className="flex items-center uppercase text-sm justify-center gap-2">
                {cat}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full h-120 grid grid-cols-3 gap-4 overflow-hidden">
            {sampleItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => handleProductClick(item.id)}
                className="cursor-pointer group relative flex flex-col rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
              >

                <div className="overflow-hidden">
                  <img
                    className="card-image w-full object-cover"
                    src={item.image}
                    alt={item.itemType}
                  />
                </div>

                <div className="p-3 flex flex-col items-center gap-1">
                  <p className="text-[var(--text-main)] text-sm font-semibold truncate text-center">
                    {item.itemType} • {item.brand}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-120 min-w-97 flex items-start justify-end">
            <img
              className="h-full object-contain"
              src={categoryHero}
              alt="Categories Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
