import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "menu items",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.unshift(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    removeFavorite(state, action) {
      const itemId = action.payload;
      const selectedItem = state.favorites.find((item) => item.id === itemId);
      const index = state.favorites.indexOf(selectedItem);
      state.favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    setStoredData(state, action) {
      state.favorites = action.payload;
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
