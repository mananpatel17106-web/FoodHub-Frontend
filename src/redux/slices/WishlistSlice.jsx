import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlist: [],
  },

  reducers: {
    toggleWishlist: (state, action) => {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishlist.push(action.payload);
      }
    },

    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },

    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const {
  toggleWishlist,
  removeWishlist,
  clearWishlist,
} = WishlistSlice.actions;

export default WishlistSlice.reducer;