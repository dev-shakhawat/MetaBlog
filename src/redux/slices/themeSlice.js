import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: JSON.parse(localStorage.getItem('theme')) || 'light',
  },
  reducers: { 
    themeSwitch: (state , action) => {
      state.value = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const {  themeSwitch } = themeSlice.actions

export default themeSlice.reducer