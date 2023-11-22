import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, fetchCount } from "./orderAPI";

const initialState = {
  orders: [],
  status: "idle",
};

export const createOrdeAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrdeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrdeAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.push(action.payload);
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
