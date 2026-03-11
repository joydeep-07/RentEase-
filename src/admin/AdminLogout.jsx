import React from "react";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/admin");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-sm text-sm font-medium bg-[var(--accent-primary)] text-white hover:opacity-90 transition"
    >
      Logout
    </button>
  );
};

export default AdminLogout;
