import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getSuggestions } from "../utils/searchUtils";

const SearchBar = ({ data, onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const results = getSuggestions(data, value);
    setSuggestions(results);
  };

  const handleSuggestionClick = (text) => {
    setQuery(text);
    setSuggestions([]);
    onSelect(text); // send search to parent
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Input */}
      <FaSearch className="absolute left-3 top-3 text-[var(--text-secondary)] text-sm" />

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search items..."
        className="w-full pl-9 pr-4 py-2 rounded-md
        border border-[var(--border-light)]
        bg-[var(--bg-secondary)]
        text-[var(--text-main)]
        focus:outline-none focus:border-[var(--accent-primary)]"
      />

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div
          className="absolute top-full left-0 w-full mt-1
          bg-[var(--bg-secondary)]
          border border-[var(--border-light)]
          rounded-md shadow-lg z-50"
        >
          {suggestions.map((s, i) => (
            <div
              key={i}
              onClick={() => handleSuggestionClick(s)}
              className="px-4 py-2 text-sm cursor-pointer
              hover:bg-[var(--accent-primary)] hover:text-white transition"
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
