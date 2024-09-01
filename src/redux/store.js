import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice },
});
console.log("oncreate store ", store.getState());

store.subscribe(() => {
  console.log("store changed", store.getState());
});

export default store;
