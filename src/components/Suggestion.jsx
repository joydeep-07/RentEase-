import React from "react";
import { data } from "../utils/data";
import ItemCards from "./ItemCards";

const Suggestion = ({ category }) => {
  const suggestions = data.filter((item) => item.category === category);

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-[var(--text-main)] px-6 mb-4">
        More in {category}
      </h2>

      <ItemCards items={suggestions} limit={8} />
    </div>
  );
};

export default Suggestion;
