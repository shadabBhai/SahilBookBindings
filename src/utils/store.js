import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    productForStore: ProductSlice,
  },
});

export default store;
