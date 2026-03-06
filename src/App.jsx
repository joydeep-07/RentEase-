import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import FurnitureDetail from "./pages/FurnitureDetail";
import ColorTest from "./pages/ColorTest";
import ProtectedRoute from "./routes/ProtectedRoute";

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
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="test" element={<ColorTest />} />
        <Route path="furniture" element={<FurnitureDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
