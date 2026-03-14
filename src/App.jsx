import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
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
import Payment from "./pages/Payment";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Tailwind dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // MUI Theme
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <SmoothScroll />
      <ScrollToTop />

      {/* Toast */}
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

          <Route
            path="payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />

          {/* ADMIN */}
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
    </ThemeProvider>
  );
};

export default App;
