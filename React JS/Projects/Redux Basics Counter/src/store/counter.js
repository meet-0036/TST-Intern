import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // Every methods default gets latest States.
    increment(state) {
      state.counter++;
    },
    // Will handle the action type `'counter/decrement'`
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // action.payload - payload is default parameter for taking args pass when dispatched.
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
