import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  rating: number;
};

interface PizzaSliceState {
  items: PizzaItem[];
  status: "loading" | "succes" | "error";
}

const initialState: PizzaSliceState = {
  items: [],
  status: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async ({ currentPage, category, sortBy, orderBy }, thunkApi) => {
    const { data } = await axios.get(
      `https://646c8c187b42c06c3b2b7bcd.mockapi.io/items?limit=4&page=${currentPage}&${category}&sortby=${sortBy}&order=${orderBy}`
    );

    if (data.length === 0)
      return thunkApi.rejectWithValue(`we'd not recived items`);

    return thunkApi.fulfillWithValue(data);
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
