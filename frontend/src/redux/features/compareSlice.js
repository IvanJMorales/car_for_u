import { createSlice } from '@reduxjs/toolkit'


const compareSlice = createSlice({
    name: 'carsToCompare',
    initialState: {
      carsToCompare: [],
    },
    reducers: {
      setCarsToCompare: (state, action) => {
          if (!state.carsToCompare.includes(action.payload) && state.carsToCompare.length < 2) {
              state.carsToCompare.push(action.payload) // Push selected car into carsToComapre array
          }
      },
      setRemoveCarFromCompare: (state, action) => {
          state.carsToCompare.splice(state.carsToCompare.findIndex((car) => car.id === action.payload.id), 1) // Finds index of selected car and removes it from carsToCompare array
      }
    },
});

// Actions
export const {setCarsToCompare} = compareSlice.actions
export const {setRemoveCarFromCompare} = compareSlice.actions

// Selectors
export const selectCarsToCompare = state => state.carsToCompare

export default compareSlice.reducer
