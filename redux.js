import { createStore, legacy_createStore } from "redux";

//reducer
const cartReduser = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

//store
const store = legacy_createStore(cartReduser);
console.log("oncreate store ", store.getState());

//subscribe
store.subscribe(() => console.log("store changed", store.getState()));

//dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 1, name: "product 1" } };
store.dispatch(action1);
