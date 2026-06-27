import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/CartSlice";
import categoryReducer from "./slices/CategorySlice";
import searchReducer from "./slices/SearchSlice";
import wishlistReducer from "./slices/WishlistSlice";
import modalReducer from "./slices/ModalSlice";
import sortReducer from "./slices/SortSlice";

const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

const loadWishlist = () => {
  try {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  } catch {
    return [];
  }
};

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
    wishlist: wishlistReducer,
    modal: modalReducer,
    sort: sortReducer,
  },

  preloadedState: {
    cart: {
      cart: loadCart(),
    },

    wishlist: {
      wishlist: loadWishlist(),
    },
  },
});

Store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(Store.getState().cart.cart)
  );

  localStorage.setItem(
    "wishlist",
    JSON.stringify(Store.getState().wishlist.wishlist)
  );
});

export default Store;