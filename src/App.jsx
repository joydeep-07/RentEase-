import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import ColorTest from "./pages/ColorTest";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";
import SellerDashboard from "./pages/SellerDashboard";
import Rents from "./pages/Rents";
import AddItem from "./pages/AddItem";
import Allitem from "./pages/Allitem";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import ScrollToTop from "./utils/ScrollToTop";
import SmoothScroll from "./utils/SmoothScroll ";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
    <SmoothScroll/>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="products" element={<Products />} />

          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
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
            path="add-item"
            element={
              <ProtectedRoute>
                <AddItem />
              </ProtectedRoute>
            }
          />

          <Route
            path="all-item"
            element={
              <ProtectedRoute>
                <Allitem />
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
            path="seller"
            element={
              <ProtectedRoute>
                <SellerDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="test" element={<ColorTest />} />
          <Route path="/product-detail/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
