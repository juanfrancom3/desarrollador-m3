import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../types';

const initialState: ProductsState = {
    products: [],
    paginatedItems: [],
    totalProducts: 0
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsList: (state, data: any) => {
            state.products = [...data.payload]
        },
        addPaginatedItems: (state, data: any) => {
            state.paginatedItems = [...data.payload]
        },
        setTotalProducts: (state, data: any) => {
            state.totalProducts = data.payload;
        }, 
    },
})

export const { setProductsList, addPaginatedItems, setTotalProducts } = productsSlice.actions

export default productsSlice.reducer;