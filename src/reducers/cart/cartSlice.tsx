import { createSlice } from '@reduxjs/toolkit';
import { CartItems, CartState } from '../../types';

const items = localStorage.getItem('yourCart');
const cart = items !== null ? JSON.parse(items) : [];

const initialState: CartState = {
  products: cart,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, data: any) => {
      const itemExist = state.products.find((item: CartItems) => item.product.id === data.payload.id);
      if(itemExist) {
        state.products = state.products.map( (item: CartItems) => item.product.id === data.payload.id ? {...item, quantity: item.quantity + 1} : item);
      } else {
        state.products = [...state.products, {quantity: 1, product: data.payload}];
      }
    },
    removeFromCart: (state, data: any) => {
      const itemExist = state.products.find((item: CartItems) => item.product.id === data.payload.id);
      if(itemExist && itemExist.quantity > 1) {
        state.products = state.products.map( (item: CartItems) => item.product.id === data.payload.id ? {...item, quantity: item.quantity - 1} : item);
      } else if(itemExist && itemExist.quantity === 1) {
        state.products = state.products.filter( (item: CartItems) => item.product.id !== data.payload.id);
      }
    },
    clearCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer