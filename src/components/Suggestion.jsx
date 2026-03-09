import React from "react";
import { data } from "../utils/data";
import ItemCards from "./ItemCards";

const Suggestion = ({ category, query, currentIds = [] }) => {
  const q = query?.toLowerCase() || "";

  const suggestions = data
    .filter((item) => !currentIds.includes(item.id)) // avoid duplicates
    .filter((item) => {
      return (
        item.category === category ||
        item.productName.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
      );
    })
    .slice(0, 8);

  if (suggestions.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-[var(--text-main)] px-6 mb-4">
        You may also like
      </h2>

      <ItemCards items={suggestions} />
    </div>
  );
};

export default Suggestion;
