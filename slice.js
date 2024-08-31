import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("oncreate store ", store.getState());

store.subscribe(() => console.log("store changed", store.getState()));

store.dispatch(cartSlice.actions.addToCart({ id: 1, name: "product 1" }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, name: "product 2" }));
