import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user : null,
    postsloaded : false
  },
  reducers: { 
    userSet: (state , action) => {
      state.user = action.payload
    },
    loadpost: (state , action) => {
      state.postsloaded = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {  userSet , loadpost } = userSlice.actions

export default userSlice.reducer