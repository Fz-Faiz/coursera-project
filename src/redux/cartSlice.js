import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [], // Ensure cart is initialized as an empty array
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload.id);
    },
    setQuantity: (state, action) => {
      const item = state.cart.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
