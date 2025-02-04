import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  priceHistory: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      state.price = action.payload;
      state.priceHistory.push(action.payload);
      if (state.priceHistory.length > 50) {
        state.priceHistory.shift(); // Keep last 50 points
      }
    },
  },
});

export const { updatePrice } = cryptoSlice.actions;
export default cryptoSlice.reducer;
