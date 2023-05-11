import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './slices/movieSlice'
import { contactSlice } from './slices/contactSlice'
export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    contacts: contactSlice.reducer
  },
})