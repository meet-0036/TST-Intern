import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// import {createStore } from "@react-redux/toolkit"
// const counterReducer = (state = initialCounterState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "increase") {
//     console.log(action);
//     console.log(action.amount);
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   // return unchanged state
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

// npm install redux react-redux
// counterReducer(prevState, action)

// similar as combineReducers
// configureStore - it able to configure multiple reducer/Slicer.

// counterSlice.reducer - it takes automatically reducers atities.
