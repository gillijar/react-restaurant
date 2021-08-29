import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-items";
import menuItemsSlice from "./menu-items";

const store = configureStore({
  reducer: { cart: cartSlice, menuItems: menuItemsSlice },
});

export default store;
