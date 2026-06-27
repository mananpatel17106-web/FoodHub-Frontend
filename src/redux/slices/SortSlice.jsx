import { createSlice } from "@reduxjs/toolkit";

const SortSlice = createSlice({
  name: "sort",

  initialState: {
    sort: "default",
  },

  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = SortSlice.actions;

export default SortSlice.reducer;