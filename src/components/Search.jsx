import { Mic, Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { data } from "../utils/data";
import { getSuggestions } from "../utils/searchUtils";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const suggestions = getSuggestions(data, query);

  const handleSearch = (value) => {
    const q = value || query;
    if (!q) return;

    navigate(`/products?q=${q}`);
    setQuery("");
  };

  return (
    <div className="relative w-full md:w-xl max-w-xl">
      {/* SEARCH BAR */}
      <div className="flex items-center border pr-3 gap-2 bg-[var(--bg-secondary)] border-[var(--border-light)]/50 h-[46px] rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full h-full pl-4 pr-2 outline-none text-sm"
        />

        <button onClick={() => handleSearch()}>
          <SearchIcon size={18} />
        </button>

        <div className="h-6 w-px bg-[var(--border-light)]/50"></div>

        <Mic size={18} />
      </div>

      {/* SUGGESTIONS */}
      {query && suggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl shadow-lg z-50">
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSearch(item)}
              className="px-4 py-2 cursor-pointer hover:bg-[var(--bg-main)] text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
