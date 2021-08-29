import { createSlice } from "@reduxjs/toolkit";

const menuItemsSlice = createSlice({
  name: "menu items",
  initialState: {
    items: [],
  },
  reducers: {
    addMenuItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const menuItemsActions = menuItemsSlice.actions;

export default menuItemsSlice.reducer;
