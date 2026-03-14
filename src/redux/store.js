import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import adminReducer from "./slices/adminSlice";
import checkoutReducer from "./slices/checkoutSlice"; 

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    admin: adminReducer,
    checkout: checkoutReducer, 
  },
});
