import { FilterIcon } from "lucide-react";
import React from "react";

const Filter = ({ filters, setFilters, categories = [], brands = [] }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="border border-[var(--border-light)] w-72 h-[90vh] mb-6 sticky top-16 rounded-lg p-4 bg-[var(--bg-secondary)] overflow-y-auto">
      <h2 className="text-2xl flex items-center gap-2 font-heading mb-4 text-[var(--text-main)]">
      <FilterIcon size={20} className="text-[var(--accent-primary)] " />  Filters
      </h2>

      {/* Price */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Price Per Day</h3>

        <input
          type="range"
          min="0"
          max="500"
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="w-full"
        />

        <p className="text-xs mt-1 text-[var(--text-secondary)]">
          Up to ₹{filters.price}
        </p>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Category</h3>

        <label className="flex items-center gap-2 text-sm mb-1">
          <input
            type="radio"
            name="category"
            value=""
            checked={filters.category === ""}
            onChange={handleChange}
          />
          All
        </label>

        {categories.map((cat) => (
          <label key={cat} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={filters.category === cat}
              onChange={handleChange}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Brand</h3>

        <label className="flex items-center gap-2 text-sm mb-1">
          <input
            type="radio"
            name="brand"
            value=""
            checked={filters.brand === ""}
            onChange={handleChange}
          />
          All
        </label>

        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="radio"
              name="brand"
              value={brand}
              checked={filters.brand === brand}
              onChange={handleChange}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Condition */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Condition</h3>

        {["New", "Like New", "Good", "Used"].map((cond) => (
          <label key={cond} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="radio"
              name="condition"
              value={cond}
              checked={filters.condition === cond}
              onChange={handleChange}
            />
            {cond}
          </label>
        ))}
      </div>

      {/* Stock */}
      <div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="inStock"
            checked={filters.inStock}
            onChange={handleChange}
          />
          In Stock Only
        </label>
      </div>
    </div>
  );
};

export default Filter;
