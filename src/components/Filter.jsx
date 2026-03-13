import { FilterIcon, ChevronDown, RotateCcw } from "lucide-react";
import React, { useState, useRef } from "react";
import gsap from "gsap";

const Filter = ({ filters, setFilters, categories = [], brands = [] }) => {
  const [openSection, setOpenSection] = useState("price");

  const sectionsRef = {
    price: useRef(null),
    category: useRef(null),
    brand: useRef(null),
    condition: useRef(null),
  };

  const toggleSection = (section) => {
    if (openSection === section) return;

    // close current
    if (sectionsRef[openSection]?.current) {
      gsap.to(sectionsRef[openSection].current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    // open new
    if (sectionsRef[section]?.current) {
      gsap.fromTo(
        sectionsRef[section].current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
      );
    }

    setOpenSection(section);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      price: 500,
      category: "",
      brand: "",
      condition: "",
      inStock: false,
    });
  };

  return (
    <div
      className="
    w-full
    lg:w-90 lg:min-w-[320px]
    lg:min-h-screen
    overflow-y-auto
    scrollbar-thin scrollbar-thumb-[var(--accent-primary)]/40
    scrollbar-track-transparent

    p-4 sm:p-5 lg:p-6

    lg:sticky lg:top-20
    transition-all duration-300

    mb-10 lg:mb-16
  "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FilterIcon size={22} className="text-[var(--accent-primary)]" />
          <h2 className="text-xl tracking-wider font-medium text-[var(--text-main)]">
            Filters
          </h2>
        </div>

        <button
          onClick={resetFilters}
          className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      <div className="space-y-5">
        {/* Price */}
        <div className="bg-black/5 dark:bg-white/5 rounded-sm p-5 border border-white/5">
          <button
            onClick={() => toggleSection("price")}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-sm font-medium text-[var(--text-main)]">
              Price Per Day
            </h3>
            <ChevronDown
              size={18}
              className={`text-[var(--text-secondary)] transition-transform ${
                openSection === "price" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            ref={sectionsRef.price}
            className={`overflow-hidden ${
              openSection !== "price" && "h-0 opacity-0"
            }`}
          >
            <div className="mt-5 space-y-4">
              <input
                type="range"
                min="0"
                max="500"
                step="10"
                name="price"
                value={filters.price}
                onChange={handleChange}
                className="
                  w-full h-1.5 bg-gradient-to-r from-[var(--accent-primary)]/30 to-[var(--accent-primary)]
                  rounded-full appearance-none cursor-pointer
                "
              />

              <div className="flex justify-between text-xs font-medium">
                <span className="text-[var(--text-secondary)]">₹0</span>
                <span className="text-[var(--accent-primary)] font-semibold">
                  Up to ₹{filters.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="bg-black/5 dark:bg-white/5 rounded-sm p-5 border border-white/5">
          <button
            onClick={() => toggleSection("category")}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-sm font-medium text-[var(--text-main)]">
              Category
            </h3>
            <ChevronDown
              size={18}
              className={`text-[var(--text-secondary)] transition-transform ${
                openSection === "category" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            ref={sectionsRef.category}
            className={`overflow-hidden ${
              openSection !== "category" && "h-0 opacity-0"
            }`}
          >
            <div className="mt-4 space-y-2.5">
              <label className="flex items-center gap-3 text-sm cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={filters.category === ""}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[var(--accent-primary)]"
                />
                <span className="group-hover:text-[var(--accent-primary)] transition-colors">
                  All Categories
                </span>
              </label>

              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 text-sm cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={filters.category === cat}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[var(--accent-primary)]"
                  />
                  <span className="group-hover:text-[var(--accent-primary)] transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="bg-black/5 dark:bg-white/5 rounded-sm p-5 border border-white/5">
          <button
            onClick={() => toggleSection("brand")}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-sm font-medium text-[var(--text-main)]">
              Brand
            </h3>
            <ChevronDown
              size={18}
              className={`text-[var(--text-secondary)] transition-transform ${
                openSection === "brand" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            ref={sectionsRef.brand}
            className={`overflow-hidden ${
              openSection !== "brand" && "h-0 opacity-0"
            }`}
          >
            <div className="mt-4 space-y-2.5">
              <label className="flex items-center gap-3 text-sm cursor-pointer group">
                <input
                  type="radio"
                  name="brand"
                  value=""
                  checked={filters.brand === ""}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[var(--accent-primary)]"
                />
                <span className="group-hover:text-[var(--accent-primary)] transition-colors">
                  All Brands
                </span>
              </label>

              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 text-sm cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={filters.brand === brand}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[var(--accent-primary)]"
                  />
                  <span className="group-hover:text-[var(--accent-primary)] transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Condition */}
        <div className="bg-black/5 dark:bg-white/5 rounded-sm p-5 border border-white/5">
          <button
            onClick={() => toggleSection("condition")}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-sm font-medium text-[var(--text-main)]">
              Condition
            </h3>
            <ChevronDown
              size={18}
              className={`text-[var(--text-secondary)] transition-transform ${
                openSection === "condition" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            ref={sectionsRef.condition}
            className={`overflow-hidden ${
              openSection !== "condition" && "h-0 opacity-0"
            }`}
          >
            <div className="mt-4 space-y-2.5">
              {["New", "Like New", "Good", "Used"].map((cond) => (
                <label
                  key={cond}
                  className="flex items-center gap-3 text-sm cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="condition"
                    value={cond}
                    checked={filters.condition === cond}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[var(--accent-primary)]"
                  />
                  <span className="group-hover:text-[var(--accent-primary)] transition-colors">
                    {cond}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Stock */}
        <div className="bg-black/5 dark:bg-white/5 rounded-sm p-5 border border-white/5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="inStock"
              checked={filters.inStock}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
              In Stock Only
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
