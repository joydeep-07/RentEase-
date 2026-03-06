import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import Search from "../components/Search";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="w-full h-16 px-8 flex items-center justify-between
    bg-[var(--bg-main)] backdrop-blur-md
    border-b border-[var(--border-light)]/10
    sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide select-none">
        <span className="text-[var(--text-main)]">Rent</span>
        <span className="text-[var(--accent-primary)]">Ease</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <Search />

        {/* Cart */}
        <Link to="/cart"
          className="relative flex items-center text-[var(--text-secondary)] gap-2 p-2"
        >
          <ShoppingCart size={19} />

       

          {/* Cart Badge */}
          <span
            className="absolute -top-1 -right-1
          bg-[var(--sale)]
          text-white text-xs
          px-1.5 py-[1px]
          rounded-full"
          >
            2
          </span>
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
