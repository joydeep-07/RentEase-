import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../utils/data";
import ItemCards from "../components/ItemCards";
import Suggestion from "../components/Suggestion";
import Filter from "../components/Filter";
import NotFound from "../components/NotFound";
import { ArrowDownUp, ShoppingCart, SlidersHorizontal, X } from "lucide-react";
import { gsap } from "gsap";

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

  /* ---------------- MOBILE FILTER STATE ---------------- */

const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
const drawerRef = useRef(null);
const overlayRef = useRef(null);

const openMobileFilter = () => {
  setMobileFilterOpen(true);

  requestAnimationFrame(() => {
    gsap.fromTo(
      drawerRef.current,
      { x: "-100%" },
      { x: "0%", duration: 0.4, ease: "power2.inOut" },
    );

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.inOut" },
    );
  });
};

const closeMobileFilter = () => {
  gsap.to(drawerRef.current, {
    x: "-100%",
    duration: 0.4,
    ease: "power3.inOut",
  });

  gsap.to(overlayRef.current, {
    opacity: 0,
    duration: 0.4,
    ease: "power3.inOut",
    onComplete: () => setMobileFilterOpen(false),
  });
};

  /* ---------------------------------------------------- */

  const filtersActive =
    query ||
    filters.category ||
    filters.brand ||
    filters.condition ||
    filters.inStock ||
    filters.price !== 500;

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

  const categories = [
    ...new Set(searchFiltered.map((item) => item.category)),
  ].sort();

  const brands = [...new Set(searchFiltered.map((item) => item.brand))].sort();

  const filteredProducts = searchFiltered.filter((item) => {
    return (
      item.pricePerDay <= filters.price &&
      (!filters.category || item.category === filters.category) &&
      (!filters.brand || item.brand === filters.brand) &&
      (!filters.condition || item.condition === filters.condition) &&
      (!filters.inStock || !item.isOutOfStock)
    );
  });

  const groupedProducts = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const groupedFilteredProducts = filteredProducts.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const firstCategory =
    filteredProducts.length > 0
      ? filteredProducts[0].category
      : searchFiltered.length > 0
        ? searchFiltered[0].category
        : null;

  return (
    <div className="flex bg-[var(--bg-primary)]">
      {/* Desktop Sidebar (UNCHANGED) */}
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

      {/* MOBILE FILTER DRAWER */}
      {mobileFilterOpen && (
        <>
          {/* overlay */}
          <div
            ref={overlayRef}
            onClick={closeMobileFilter}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          />

          {/* drawer */}
          <div
            ref={drawerRef}
            className="fixed left-0 h-full w-[80vw] bg-[var(--bg-main)] z-50 shadow-2xl lg:hidden overflow-y-auto"
          >
            {/* <div className="flex items-center justify-between p-4 border-b border-[var(--border-light)]">
              <h2 className="font-heading text-xl text-[var(--text-main)]">
                Filters
              </h2>

              <button
                onClick={closeMobileFilter}
                className="p-2 rounded-lg hover:bg-[var(--bg-secondary)]"
              >
                <X size={20} />
              </button>
            </div> */}

            {/* CENTERED FILTER */}
            <div className="flex justify-center px-4 py-6">
              <div className="w-full max-w-md">
                <Filter
                  filters={filters}
                  setFilters={setFilters}
                  categories={categories}
                  brands={brands}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main */}
      <main className="flex-1">
        <div>
          {/* MOBILE FILTER BUTTON */}
          <div className="lg:hidden border border-[var(--border-light)]/40 bg-[var(--bg-secondary)]/50 flex justify-center mb-6">
            <button
              onClick={openMobileFilter}
              className="flex items-center gap-2 px-5 py-2 w-1/2 border-r border-[var(--border-light)]/90 justify-center text-[var(--text-secondary)] shadow-md"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>

            <button
              onClick={openMobileFilter}
              className="flex items-center gap-2 px-5 py-2 w-1/2 justify-center text-[var(--text-secondary)] shadow-md"
            >
              <ArrowDownUp size={18} />
              Short
            </button>
          </div>

          {/* header */}
          {query && filteredProducts.length > 0 && (
            <header className="px-4 md:px-0">
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

          {query && filteredProducts.length === 0 && (
            <NotFound
              heading={
                <h1 className="text-3xl font-heading sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2">
                  Nothing Matched{" "}
                  <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                    {query}
                  </span>
                </h1>
              }
              msg={
                "Our little cat searched everywhere but found nothing. Try another keyword or relax the filters."
              }
            />
          )}

          {!filtersActive && (
            <div className="space-y-14 px-4 md:px-0 mb-6 md:mr-6">
              {Object.entries(groupedProducts).map(([category, items]) => (
                <section key={category}>
                  <h2 className="text-3xl font-heading mb-6 text-[var(--text-main)]">
                    Showing for{" "}
                    <span className="text-[var(--accent-primary)]">
                      {category}s
                    </span>
                  </h2>

                  <ItemCards items={items} />
                </section>
              ))}
            </div>
          )}

          {filtersActive && filteredProducts.length > 0 && (
            <div className="space-y-14 px-4 md:px-0 mb-6 md:mr-6">
              {Object.entries(groupedFilteredProducts).map(
                ([category, items]) => (
                  <section className="mt-10" key={category}>
                    <ItemCards items={items} />
                  </section>
                ),
              )}
            </div>
          )}

          <section className="px-4 md:px-0 md:mr-6">
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
