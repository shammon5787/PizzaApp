import { configureStore } from '@reduxjs/toolkit'
import cardreducer from'./CardSlice'

export const store = configureStore({
  reducer: {
    cart: cardreducer,
  },
})

export default store