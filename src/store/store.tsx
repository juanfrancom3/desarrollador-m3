import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart/cartSlice';
import  productsReducer from '../reducers/products/productsSlice';
import uiReducer from '../reducers/ui/uiSlice';

export const store = configureStore({
  reducer: {
      cart: cartReducer,
      products: productsReducer,
      ui: uiReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch