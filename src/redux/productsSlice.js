import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Snake Plant', price: 20, category: 'Indoor', image: 'snake-plant.jpg', quantity: 0 },
    { id: 2, name: 'Aloe Vera', price: 15, category: 'Outdoor', image: 'aloe-vera.jpg', quantity: 0 },
    { id: 3, name: 'Peace Lily', price: 25, category: 'Indoor', image: 'peace-lily.jpg', quantity: 0 },
    { id: 4, name: 'Cactus', price: 12, category: 'Outdoor', image: 'cactus.jpg', quantity: 0 },
    { id: 5, name: 'Pothos', price: 18, category: 'Indoor', image: 'pothos.jpg', quantity: 0 },
    { id: 6, name: 'Spider Plant', price: 22, category: 'Indoor', image: 'spider-plant.jpg', quantity: 0 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
    setQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, setQuantity } = productsSlice.actions;
export default productsSlice.reducer;
