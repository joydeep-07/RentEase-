import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../utils/data";
import ItemCards from "../components/ItemCards";
import Suggestion from "../components/Suggestion";
import Filter from "../components/Filter";

const Products = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const [filters, setFilters] = useState({
    price: 500,
    category: "",
    brand: "",
    condition: "",
    inStock: false,
  });

  // Search filter
  const searchFiltered = query
    ? data.filter((item) => {
        return (
          item.productName.toLowerCase().includes(query) ||
          item.brand.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.keywords.some((k) => k.toLowerCase().includes(query))
        );
      })
    : data;

  // Dynamic filter options based on searched data
  const categories = [...new Set(searchFiltered.map((item) => item.category))];
  const brands = [...new Set(searchFiltered.map((item) => item.brand))];

  // Apply sidebar filters
  const filteredProducts = searchFiltered.filter((item) => {
    return (
      item.pricePerDay <= filters.price &&
      (!filters.category || item.category === filters.category) &&
      (!filters.brand || item.brand === filters.brand) &&
      (!filters.condition || item.condition === filters.condition) &&
      (!filters.inStock || !item.isOutOfStock)
    );
  });

  const category =
    filteredProducts.length > 0 ? filteredProducts[0].category : null;

  return (
    <div className="flex mx-10 gap-8">
      {/* FILTER SIDEBAR */}
      <Filter
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        brands={brands}
      />

      {/* PRODUCTS AREA */}
      <div className="flex-1">
        {query && (
          <h1 className="text-xl font-semibold text-[var(--text-main)] px-6">
            Search Results for: "{query}"
          </h1>
        )}

        {/* Not found */}
        {query && filteredProducts.length === 0 && (
          <div className="text-center mt-16 text-[var(--text-secondary)]">
            <h2 className="text-2xl font-semibold">Not found "{query}"</h2>
            <p className="mt-2 text-sm">
              Try searching with different keywords.
            </p>
          </div>
        )}

        {/* Products */}
        {filteredProducts.length > 0 && <ItemCards items={filteredProducts} />}

        {/* Suggestions */}
        {category && (
          <Suggestion
            category={category}
            query={query}
            currentIds={filteredProducts.map((p) => p.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
