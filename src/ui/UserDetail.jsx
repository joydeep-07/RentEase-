import { User, Package, PlusSquare, LogOut, Layout } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = {
    firstName: "Joydeep",
    lastName: "Paul",
    email: "joydeeprnp8821@gmail.com",
  };

  const menuItems = [
    { label: "Profile", icon: Layout, path: "/profile" },
    { label: "Your Rents", icon: Package, path: "/rents" },
    { label: "Add Product", icon: PlusSquare, path: "/add-product" },
    { type: "divider" },
    { label: "Logout", icon: LogOut, danger: true },
  ];

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }

    if (item.label === "Logout") {
      console.log("logout logic here");
    }

    setOpen(false);
  };

  // animation
  useEffect(() => {
    if (open) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -12,
        scale: 0.95,
        duration: 0.25,
        ease: "power3.inOut",
        pointerEvents: "none",
      });
    }
  }, [open]);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="cursor-pointer border border-[var(--border-light)]/40 
        bg-[var(--bg-tertiary)]/40 backdrop-blur-md 
        p-2 rounded-full"
      >
        <User size={18} />
      </button>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className="absolute right-0 mt-3 w-64 rounded-sm 
        border border-[var(--border-light)]/30 
        bg-[var(--bg-secondary)] backdrop-blur-xl
        shadow-xl px-4 py-5 opacity-0 scale-95 pointer-events-none"
      >
        {/* User Info */}
        <div className="flex items-center gap-3 border-b border-[var(--border-light)]/30 pb-4 mb-4">
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center
            bg-[var(--accent-primary)]/15 border border-[var(--border-light)] text-[var(--accent-primary)]"
          >
            <User size={22} />
          </div>

          <div>
            <p className="font-semibold text-[var(--text-main)]">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-[var(--text-secondary)]">{user.email}</p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-2 text-sm">
          {menuItems.map((item, index) => {
            if (item.type === "divider") {
              return (
                <div
                  key={index}
                  className="border-t border-[var(--border-light)]/30 my-2"
                />
              );
            }

            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className={`flex items-center gap-3 p-2 rounded-lg transition
                ${
                  item.danger
                    ? "text-[var(--sale)] hover:text-red-700"
                    : "hover:text-[var(--accent-secondary)]"
                }`}
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
