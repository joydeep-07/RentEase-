import { ArrowUpRight, Mic, Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { data } from "../utils/data";
import { getSuggestions } from "../utils/searchUtils";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const suggestions = getSuggestions(data, query);

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(`/products?q=${query}`);
    if (onSearch) onSearch();
    setQuery(""); 
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/products?q=${suggestion}`);
    if (onSearch) onSearch();
    setQuery(""); 
  };

  return (
    <div className="relative w-full max-w-xl">
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full h-11
        bg-[var(--bg-secondary)] md:w-xl
        border border-[var(--border-light)]"
      >
        <SearchIcon size={18} className="text-[var(--text-secondary)]" />

        <input
          type="text"
          placeholder="Search furniture, appliances..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // prevent any form-like behaviour
              handleSearch();
            }
          }}
          className="flex-1 bg-transparent outline-none
          text-[var(--text-main)]"
        />

        <Mic
          size={18}
          className="text-[var(--text-secondary)] cursor-pointer"
        />
      </div>

      {/* Suggestions */}
      {query && suggestions.length > 0 && (
        <div
          className="absolute left-0 top-full mt-2 w-full
          bg-[var(--bg-main)]
          border border-[var(--border-light)]/30
          rounded-md shadow-lg
          z-[200]"
        >
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer
              hover:bg-[var(--bg-secondary)] flex items-center gap-2"
              onClick={() => handleSuggestionClick(item)}
            >
            <ArrowUpRight size={15} /> {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
