import { createSlice } from '@reduxjs/toolkit'


const compareSlice = createSlice({
    name: 'carsToCompare',
    initialState: {
      carsToCompare: [],
    },
    reducers: {
      setCarsToCompare: (state, action) => {
          state.carsToCompare.push(action.payload)
      },
      setRemoveCarFromCompare: (state, action) => {
          state.carsToCompare.splice(state.carsToCompare.findIndex((car) => car.id === action.payload.id), 1)
      }
    },
});

// Actions
export const {setCarsToCompare} = compareSlice.actions
export const {setRemoveCarFromCompare} = compareSlice.actions

// Selectors
export const selectCarsToCompare = state => state.carsToCompare

export default compareSlice.reducer
