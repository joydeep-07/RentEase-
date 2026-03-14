import React, { useState, useRef, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Search from "../components/Search";
import { ShoppingCart, Search as SearchIcon, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDetail from "../ui/UserDetail";
import SelectCity from "../ui/SelectCity";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [openSearch, setOpenSearch] = useState(false);
  const drawerRef = useRef(null);
  const navigate = useNavigate();


  const openDrawer = () => setOpenSearch(true);

  const closeDrawer = () => {
    gsap.to(drawerRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => setOpenSearch(false),
    });
  };

  useEffect(() => {
    if (openSearch) {
      gsap.fromTo(
        drawerRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.4, ease: "power3.out" },
      );
    }
  }, [openSearch]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="w-full h-16 px-4 md:px-8 flex items-center justify-between
        bg-[var(--bg-main)] backdrop-blur-md
        border-b border-[var(--border-light)]/10
        sticky top-0 z-50"
      >
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xl md:text-2xl font-fuzzy font-semibold tracking-wide select-none"
          >
            <span className="text-[var(--accent-primary)]">Rent</span>
            <span className="text-[var(--text-main)]">Ease</span>
          </Link>

          <div className="hidden sm:block">
            <SelectCity />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Search />
          </div>

          <button
            onClick={openDrawer}
            className="md:hidden text-[var(--text-main)]"
          >
            <SearchIcon size={20} />
          </button>


          {isLogin && <UserDetail />}

          {!isLogin && (
            <button
              onClick={() => navigate("/auth")}
              className=" relative overflow-hidden px-8 sm:px-10 md:px-7 py-3 sm:py-3.5 md:py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-blue)]/20 shadow-sm transition-all duration-500 ease-out group w-full sm:w-auto"
            >
              <span className="flex items-center uppercase text-sm justify-center gap-2">
                Login
              </span>
            </button>
          )}

          {/* <ThemeToggle /> */}
        </div>
      </nav>

      {/* MOBILE SEARCH DRAWER */}
      {openSearch && (
        <div
          ref={drawerRef}
          className="fixed inset-0 z-[100] bg-[var(--bg-main)] p-6 md:hidden flex flex-col justify-between"
        >
          {/* Search */}
          <div>
            <Search onSearch={closeDrawer} />
          </div>

          {/* Bottom Close Button */}
          <div className="flex justify-center pb-6">
            <button
              onClick={closeDrawer}
              className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-light)]"
            >
              <ChevronUp size={26} className="text-[var(--text-main)]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
