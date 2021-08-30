import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-items";
import menuItemsSlice from "./menu-items";
import itemCategorySlice from "./item-category";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    menuItems: menuItemsSlice,
    category: itemCategorySlice,
  },
});

export default store;
