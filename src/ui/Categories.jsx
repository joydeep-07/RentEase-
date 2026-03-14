import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../utils/data";
import categoryHero from "../assets/images/category.jpg";
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

  const handleProductClick = (id) => {
    navigate(`/product-detail/${id}`);
  };

 useEffect(() => {
   cardsRef.current.forEach((card) => {
     if (!card) return;

     const image = card.querySelector(".card-image");
     const wishlist = card.querySelector(".wishlist-btn");

     if (wishlist) {
       gsap.set(wishlist, {
         x: 40,
         opacity: 0,
         visibility: "hidden",
         pointerEvents: "none",
       });
     }

     card.addEventListener("mouseenter", () => {
       if (image) {
         gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power3.out" });
       }

       if (wishlist) {
         gsap.set(wishlist, { visibility: "visible", pointerEvents: "auto" });
         gsap.to(wishlist, { x: 0, opacity: 1, duration: 0.35 });
       }
     });

     card.addEventListener("mouseleave", () => {
       if (image) {
         gsap.to(image, { scale: 1, duration: 0.5 });
       }

       if (wishlist) {
         gsap.to(wishlist, {
           x: 40,
           opacity: 0,
           duration: 0.25,
           onComplete: () =>
             gsap.set(wishlist, {
               visibility: "hidden",
               pointerEvents: "none",
             }),
         });
       }
     });
   });
 }, [sampleItems]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 md:pt-16 pt-4 pb-10">
      <div className="max-w-8xl md:px-15 mx-auto flex flex-col gap-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-medium font-main leading-tight">
          Check out all our{" "}
          <span className="text-[var(--accent-primary)]">categories</span>
        </h2>

        <p className="text-sm sm:text-base md:text-base opacity-70 max-w-full sm:max-w-xl mb-4">
          Discover cameras, electronics, furniture and more from people around
          you. Renting saves money, space, and the planet.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-6 justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className="relative overflow-hidden px-6 sm:px-8 md:px-7 py-2 sm:py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-blue)]/20 shadow-sm transition-all duration-500 ease-out group"
            >
              <span className="flex items-center uppercase text-sm justify-center gap-2">
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Product Cards + Hero Image */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Product Grid */}
          <div className="w-full lg:flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sampleItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => handleProductClick(item.id)}
                className="cursor-pointer group relative flex flex-col rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    className="card-image w-full h-48 sm:h-52 md:h-60 object-cover transition-transform duration-500"
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

          {/* Hero Image */}
          <div className="w-full lg:w-96 h-60 sm:h-80 lg:h-auto relative flex justify-end md:flex hidden">
            <img
              className="w-full h-full object-contain object-top"
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
