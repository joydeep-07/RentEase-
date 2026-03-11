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
import Admin from "./pages/Admin";

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
      <SmoothScroll />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="products" element={<Products />} />
          <Route path="test" element={<ColorTest />} />
          <Route path="/product-detail/:id" element={<ProductDetails />} />
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
          ============= FOR ADMIN ===========
          <Route path="admin" element={<Admin />} />
          <Route path="seller" element={<SellerDashboard />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="all-item" element={<Allitem />} />
          ============= FOR ADMIN ===========
        </Route>
      </Routes>
    </>
  );
};

export default App;
