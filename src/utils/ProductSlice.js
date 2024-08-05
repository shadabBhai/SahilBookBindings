import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "productsForstore",
  initialState: null,
  reducers: {
    addProductToStore: (state, action) => {
      return action.payload;
    },
  },
});

export const { addProductToStore } = ProductSlice.actions;

export default ProductSlice.reducer;
