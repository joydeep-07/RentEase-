import { FilterIcon, ChevronDown, RotateCcw } from "lucide-react";
import React, { useState } from "react";

const Filter = ({ filters, setFilters, categories = [], brands = [] }) => {
  const [openSections, setOpenSections] = useState({
    price: true,
    category: true,
    brand: true,
    condition: true,
    stock: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
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
      className={`
        w-90 min-w-[320px] h-[calc(100vh-5rem)] 
        overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--accent-primary)]/40
        scrollbar-track-transparent p-6 sticky top-20
        transition-all duration-300 border border-[var(--border-light)]/20 bg-[var(--bg-tertiary)]/20
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="">
            <FilterIcon size={22} className="text-[var(--accent-primary)]" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-main)]">
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

      {/* Sections */}
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
              className={`text-[var(--text-secondary)] transition-transform ${openSections.price ? "rotate-180" : ""}`}
            />
          </button>

          {openSections.price && (
            <div className="mt-5 space-y-4 animate-fadeIn">
              <input
                type="range"
                min="0"
                max="500"
                step="10"
                name="price"
                value={filters.price}
                onChange={handleChange}
                className={`
                  w-full h-1.5 bg-gradient-to-r from-[var(--accent-primary)]/30 to-[var(--accent-primary)] 
                  rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 
                  [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[var(--accent-primary)]
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
                  [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5
                  [&::-moz-range-thumb]:bg-[var(--accent-primary)] [&::-moz-range-thumb]:rounded-full
                `}
              />
              <div className="flex justify-between text-xs font-medium">
                <span className="text-[var(--text-secondary)]">₹0</span>
                <span className="text-[var(--accent-primary)] font-semibold">
                  Up to ₹{filters.price}
                </span>
              </div>
            </div>
          )}
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
              className={`text-[var(--text-secondary)] transition-transform ${openSections.category ? "rotate-180" : ""}`}
            />
          </button>

          {openSections.category && (
            <div className="mt-4 space-y-2.5 animate-fadeIn">
              <label className="flex items-center gap-3 text-sm cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={filters.category === ""}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[var(--accent-primary)]"
                />
                <span className="text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
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
                  <span className="text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          )}
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
              className={`text-[var(--text-secondary)] transition-transform ${openSections.brand ? "rotate-180" : ""}`}
            />
          </button>

          {openSections.brand && (
            <div className="mt-4 space-y-2.5 animate-fadeIn">
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
          )}
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
              className={`text-[var(--text-secondary)] transition-transform ${openSections.condition ? "rotate-180" : ""}`}
            />
          </button>

          {openSections.condition && (
            <div className="mt-4 space-y-2.5 animate-fadeIn">
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
          )}
        </div>

        {/* Stock */}
        <div className="bg-black/5 dark:bg-white/5 rounded-sm p-5 border border-white/5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="inStock"
              checked={filters.inStock}
              onChange={handleChange}
              className="w-5 h-5 rounded border-gray-300 text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]/30"
            />
            <span className="text-sm font-medium text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
              In Stock Only
            </span>
          </label>
        </div>
      </div>

      {/* Apply button */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <button
          className={`
            w-full py-3.5 px-6 bg-[var(--accent-primary)] text-white 
            font-medium rounded-sm shadow-lg shadow-[var(--accent-primary)]/20
            hover:bg-[var(--accent-primary)]/90 hover:shadow-xl
            active:scale-[0.98] transition-all duration-200
          `}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
