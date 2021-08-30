import { createSlice } from "@reduxjs/toolkit";

const itemCategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "entrees",
  },
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const itemCategoryActions = itemCategorySlice.actions;

export default itemCategorySlice.reducer;
