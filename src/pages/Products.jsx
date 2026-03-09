import React from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../utils/data";
import ItemCards from "../components/ItemCards";
import Suggestion from "../components/Suggestion";

const Products = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredProducts = query
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

  const category =
    filteredProducts.length > 0 ? filteredProducts[0].category : null;

  return (
    <div className="max-w-7xl mx-auto mt-10">
      {query && (
        <h1 className="text-xl font-semibold text-[var(--text-main)] px-6">
          Search Results for: "{query}"
        </h1>
      )}

      {/* If nothing found */}
      {query && filteredProducts.length === 0 && (
        <div className="text-center mt-16 text-[var(--text-secondary)]">
          <h2 className="text-2xl font-semibold">Not found "{query}"</h2>
          <p className="mt-2 text-sm">Try searching with different keywords.</p>
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
  );
};

export default Products;
