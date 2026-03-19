import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const inCart = state.list.find(item => item.id === action.payload.id);

      if (inCart) {
        state.list.map(item => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
          return item;
        }, state);
        state.total += action.payload.price;
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.total += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const inCart = state.list.find(item => item.id === action.payload.id);

      if (inCart) {
        state.list.map(item => {
          if (item.id === action.payload.id && item.quantity > 1) {
            item.quantity -= 1;
          } else if (item.id === action.payload.id && item.quantity === 1) {
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
        state.total -= action.payload.price;
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
