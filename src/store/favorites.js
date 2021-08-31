import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "menu items",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },

    removeFavorite(state, action) {
      const itemId = action.payload;
      const selectedItem = state.favorites.find((item) => item.id === itemId);
      const index = state.favorites.indexOf(selectedItem);
      state.favorites.splice(index, 1);
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
