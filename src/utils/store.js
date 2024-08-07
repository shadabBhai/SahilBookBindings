import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
import ThesisSlice from "./ThisesSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    productForStore: ProductSlice,
    cart: CartSlice,
    thesis: ThesisSlice,
  },
});

export default store;
