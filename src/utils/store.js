import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    productForStore: ProductSlice,
    cart: CartSlice,
  },
});

export default store;
