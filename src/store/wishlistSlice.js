import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const inWishlist = state.list.find(item => item.id === action.payload.id);

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      const inWishlist = state.list.find(item => item.id === action.payload.id);

      if (inWishlist) {
        state.list = state.list.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
function item(item) {
  throw new Error("Function not implemented.");
}
