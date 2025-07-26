import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: "signup",
  },
  reducers: { 
    switchAuth: (state , action) => {
      state.auth = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const {  switchAuth } = authSlice.actions

export default authSlice.reducer