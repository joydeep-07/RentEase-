import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ColorTest from "./components/ColorTest";

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
      <ColorTest/>
    </>
  );
};

export default App;
