import { createSlice } from "@reduxjs/toolkit";

const ThesisSlice = createSlice({
  name: "thises",
  initialState: null,
  reducers: {
    addThises: (state, action) => {
      return action.payload;
    },
  },
});

export const { addThises } = ThesisSlice.actions;
export default ThesisSlice.reducer;
