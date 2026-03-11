import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { Bell, CopyPlus, LayoutDashboard } from "lucide-react";

const links = [
  {
    name: "Orders",
    path: "/seller",
    icon: Bell,
  },
  {
    name: "Add Item",
    path: "/add-item",
    icon: CopyPlus,
  },
  {
    name: "View All Items",
    path: "/all-item",
    icon: LayoutDashboard,
  },
];
const AdminNav = () => {
  return (
    <div className="bg-[var(--bg-main)] px-15 pt-10">
      <div>
        <nav className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Heading */}
          <Heading
            small="Seller Panel"
            heading={
              <h1 className="text-3xl md:text-4xl font-heading text-[var(--text-main)]">
                Become a
                <span className="text-[var(--accent-secondary)]"> Seller</span>
              </h1>
            }
          />

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            {links.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className="uppercase flex items-center justify-center gap-2 font-medium text-xs text-[var(--text-secondary)]/90 hover:text-[var(--accent-secondary)] transition"
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminNav;
