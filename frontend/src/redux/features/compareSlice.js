import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  carsToCompareArray: JSON.parse(localStorage.getItem('carsToCompare')) || [],
}

const compareSlice = createSlice({
  name: 'carsToCompare',
  initialState: JSON.parse(localStorage.getItem('carsToCompare')) || [],
  reducers: {
    setCarsToCompare: (state, action) => {
        state.push(action.payload)
    },
    /*setRemoveCarToCompare: state => {
      state.user = null
    }*/
  },
});

export const {setCarsToCompare} = compareSlice.actions

export const selectCarsToCompare = state => state.carsToCompare

export default compareSlice.reducer
