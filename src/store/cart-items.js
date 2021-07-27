import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCartPrice: 0,
    ordered: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalCartPrice = state.totalCartPrice + newItem.price;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemId);
      selectedItem.quantity--;
      selectedItem.totalPrice -= selectedItem.price;
      state.totalQuantity--;
      state.totalCartPrice -= selectedItem.price;
      if (selectedItem.quantity === 0) {
        const index = state.items.indexOf(selectedItem);
        state.items.splice(index, 1);
      }
    },
    confirmOrder(state) {
      state.ordered = true;
    },
    resetState(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalCartPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
