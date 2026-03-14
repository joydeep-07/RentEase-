// src/store/slices/checkoutSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null, // the selected product
  duration: 1, // rental duration in months
  totalRent: 0,
  totalAmount: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutProduct: (state, action) => {
      // payload should contain product, duration, totalRent, totalAmount
      const { product, duration, totalRent, totalAmount } = action.payload;
      state.product = product;
      state.duration = duration;
      state.totalRent = totalRent;
      state.totalAmount = totalAmount;
    },
    clearCheckout: (state) => {
      state.product = null;
      state.duration = 1;
      state.totalRent = 0;
      state.totalAmount = 0;
    },
  },
});

export const { setCheckoutProduct, clearCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
