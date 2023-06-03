import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
    decrement(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem.count !== 0) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
  },
});

export const selectCart = (state) => state.cart;

export const { addItem, removeItem, clearItems, decrement } = cartSlice.actions;
export default cartSlice.reducer;
