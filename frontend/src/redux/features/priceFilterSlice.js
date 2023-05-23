import { createSlice } from '@reduxjs/toolkit'


const priceFilterSlice = createSlice({
    name: 'priceFilter',
    initialState: {
      maxPrice: '',
    },
    reducers: {
      setMaxPrice: (state, action) => {
            state.maxPrice = action.payload
      },
    },
});

// Actions
export const {setMaxPrice} = priceFilterSlice.actions

// Selectors
export const selectMaxPrice = state => state.maxPrice

export default priceFilterSlice.reducer