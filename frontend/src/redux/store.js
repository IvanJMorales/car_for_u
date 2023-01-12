import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import compareReducer from './features/compareSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    carsToCompare: compareReducer,
  },
})