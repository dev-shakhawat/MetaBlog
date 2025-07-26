import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'
import authSlice from './slices/authSlice'

export default configureStore({
  reducer: {
    theme: themeSlice,
    auth : authSlice
  }
})