import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-items";

const store = configureStore({
  reducer: { cart: cartSlice },
});

export default store;
