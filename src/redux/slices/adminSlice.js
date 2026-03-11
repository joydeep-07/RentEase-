import { createSlice } from "@reduxjs/toolkit";
const savedAdminAuth = localStorage.getItem("adminAuth");

const initialState = {
  isAdminAuthenticated: savedAdminAuth ? JSON.parse(savedAdminAuth) : false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginAdmin: (state) => {
      state.isAdminAuthenticated = true;
      localStorage.setItem("adminAuth", JSON.stringify(true));
    },
    logoutAdmin: (state) => {
      state.isAdminAuthenticated = false;
      localStorage.setItem("adminAuth", JSON.stringify(false));
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminSlice.actions;

export default adminSlice.reducer;
