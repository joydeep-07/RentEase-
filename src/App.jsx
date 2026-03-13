import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { setTheme } from "./redux/slices/themeSlice";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import ColorTest from "./pages/ColorTest";
import Profile from "./pages/Profile";
import SellerDashboard from "./pages/SellerDashboard";
import Rents from "./pages/Rents";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";

import AddItem from "./admin/AddItem";
import Allitem from "./admin/Allitem";
import Admin from "./admin/Admin";

import ScrollToTop from "./utils/ScrollToTop";
import SmoothScroll from "./utils/SmoothScroll ";

const App = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      dispatch(setTheme(e.matches));
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);

  return (
    <>
      <SmoothScroll />
      <ScrollToTop />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        expand
        theme={darkMode ? "dark" : "light"}
        visibleToasts={4}
        duration={2000}
      />

      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />

          {/* Public Routes */}
          <Route path="auth" element={<Auth />} />
          <Route path="products" element={<Products />} />
          <Route path="test" element={<ColorTest />} />
          <Route path="product-detail/:id" element={<ProductDetails />} />

          {/* USER ROUTES */}
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="rents"
            element={
              <ProtectedRoute>
                <Rents />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ADMIN ROUTES */}
          <Route path="admin" element={<Admin />} />

          <Route
            path="seller"
            element={
              <AdminProtectedRoute>
                <SellerDashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="add-item"
            element={
              <AdminProtectedRoute>
                <AddItem />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="all-item"
            element={
              <AdminProtectedRoute>
                <Allitem />
              </AdminProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
