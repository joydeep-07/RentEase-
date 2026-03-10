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

  // Check if filters are active
  const filtersActive =
    query ||
    filters.category ||
    filters.brand ||
    filters.condition ||
    filters.inStock ||
    filters.price !== 500;

  // Search filtering
  const searchFiltered = query
    ? data.filter(
        (item) =>
          item.productName.toLowerCase().includes(query) ||
          item.brand.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.keywords?.some((k) => k.toLowerCase().includes(query)),
      )
    : data;

  // Dynamic filter options
  const categories = [
    ...new Set(searchFiltered.map((item) => item.category)),
  ].sort();

  const brands = [...new Set(searchFiltered.map((item) => item.brand))].sort();

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

  // Group ALL products by category (default view)
  const groupedProducts = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // Group filtered products by category
  const groupedFilteredProducts = filteredProducts.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // Suggestion category
  const firstCategory =
    filteredProducts.length > 0
      ? filteredProducts[0].category
      : searchFiltered.length > 0
        ? searchFiltered[0].category
        : null;

  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)]">
      {/* Sidebar */}
      <aside className="hidden lg:block w-80 xl:w-96 shrink-0">
        <div className="sticky top-16">
          <Filter
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            brands={brands}
          />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1">
        <div>
          {/* Header for search */}
          {query && (
            <header>
              <h1 className="text-2xl font-heading sm:text-3xl text-[var(--text-main)]">
                Results for{" "}
                <span className="text-[var(--accent-primary)]">{query}</span>
              </h1>

              <p className="mt-2 text-[var(--text-secondary)]">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "item" : "items"} found
              </p>
            </header>
          )}

          {/* No results */}
          {query && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-[var(--text-main)]">
                No results found for "{query}"
              </h2>

              <p className="mt-4 text-[var(--text-secondary)] max-w-md mx-auto">
                Try different keywords, adjust filters, or browse all
                categories.
              </p>
            </div>
          )}

          {/* DEFAULT VIEW → Category wise */}
          {!filtersActive && (
            <div className="space-y-14 mb-6 mr-6">
              {Object.entries(groupedProducts).map(([category, items]) => (
                <section key={category}>
                  <h2 className="text-3xl font-heading mb-6 text-[var(--text-main)]">
                    Showing for <span className="text-[var(--accent-primary)] ">{category}s</span>
                  </h2>

                  <ItemCards items={items} />
                </section>
              ))}
            </div>
          )}

          {/* FILTERED VIEW */}
          {filtersActive && filteredProducts.length > 0 && (
            <div className="space-y-14 mb-6 mr-6">
              {Object.entries(groupedFilteredProducts).map(
                ([category, items]) => (
                  <section className="mt-10" key={category}>
                    <h2 className="text-2xl font-heading mb-6 text-[var(--text-main)]">
                      {category}
                    </h2>

                    <ItemCards items={items} />
                  </section>
                ),
              )}
            </div>
          )}

          {/* Suggestions */}
          <section className="border-t border-[var(--border-light)]/20 mr-6">
            <Suggestion
              category={firstCategory}
              query={query}
              currentIds={filteredProducts.map((p) => p.id)}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Products;
