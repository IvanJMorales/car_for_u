import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  carsToCompare: [localStorage.getItem('user')] || []
}

const compareSlice = createSlice({
  name: 'carsToCompare',
  initialState,
  reducers: {
    setCarsToCompare: (state, action)=>{
      state.carsToCompare = action.payload.carsToCompare
    },
    /*setRemoveCarToCompare: state => {
      state.user = null
    }*/
  },
});

export const {setCarsToCompare} = compareSlice.actions

export const selectCarsToCompare = state => state.carsToCompare.carsToCompare
//export const selectUserName = state => state.user.userName
//export const selectUserEmail = state => state.user.userEmail

export default compareSlice.reducer
