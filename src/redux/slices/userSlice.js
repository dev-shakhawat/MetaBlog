import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user : null,
    
  },
  reducers: { 
    userSet: (state , action) => {
      state.user = action.payload
    },

  }
})

// Action creators are generated for each case reducer function
export const {  userSet ,  } = userSlice.actions

export default userSlice.reducer