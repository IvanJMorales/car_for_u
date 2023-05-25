import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import compareReducer from './features/compareSlice'
import priceReducer from './features/priceFilterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    carsToCompare: compareReducer,
    minPrice: priceReducer,
    maxPrice: priceReducer,
  },
})