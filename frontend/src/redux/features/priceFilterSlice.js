import { createSlice } from '@reduxjs/toolkit'


const priceFilterSlice = createSlice({
    name: 'priceFilter',
    initialState: {
      minPrice: 0,
      maxPrice: 0,
    },
    reducers: {
        setMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        },
    },
});

// Actions
export const {setMinPrice} = priceFilterSlice.actions
export const {setMaxPrice} = priceFilterSlice.actions

// Selectors
export const selectMinPrice = state => state.minPrice
export const selectMaxPrice = state => state.maxPrice

export default priceFilterSlice.reducer