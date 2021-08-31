import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-items";
import menuItemsSlice from "./menu-items";
import itemCategorySlice from "./item-category";
import favoritesSlice from "./favorites";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    menuItems: menuItemsSlice,
    category: itemCategorySlice,
    favorites: favoritesSlice,
  },
});

export default store;
