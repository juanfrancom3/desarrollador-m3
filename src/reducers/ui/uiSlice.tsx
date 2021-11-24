import { createSlice } from '@reduxjs/toolkit';
import { Ui } from '../../types';

const themeStoraged = localStorage.getItem('isLightMode');
const initialTheme = themeStoraged !== null ? JSON.parse(themeStoraged) : true;

const initialState: Ui = {
    isModalOpen: false,
    isCartOpen: false,
    sortBy: ['asc', 'price'],
    colorFilter: [],
    sizeFilter: [],
    priceRange: [],
    theme: 'light',
    isLightMode: initialTheme
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsModalOpen: (state, data: any) => {
            state.isModalOpen = data.payload;
        },
        setIsCartOpen: (state, data: any) => {
            state.isCartOpen = data.payload;
        },
        setSortyByFilters: (state, data: any) => {
            state.sortBy = data.payload;
        },
        setColorFilters: (state, data: any) => {
            state.colorFilter = data.payload;
        },
        setSizeFilters: (state, data: any) => {
            state.sizeFilter = data.payload;
        },
        setPriceRange: (state, data: any) => {
            state.priceRange = data.payload;
        },
        setTheme: (state, data: any) => {
            if(state.theme === data.payload) {
                return;
            }
            state.theme = data.payload;
        },
        setIsLightMode: (state, data: any) => {
            state.isLightMode = data.payload;
        },
    },
})

export const { setIsModalOpen, setIsCartOpen, setSortyByFilters, setColorFilters, setPriceRange, setTheme, setIsLightMode, setSizeFilters } = uiSlice.actions

export default uiSlice.reducer