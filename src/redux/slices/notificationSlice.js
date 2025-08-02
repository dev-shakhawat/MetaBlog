import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
  name: 'notify',
  initialState: {
    isPosting:  false,
    status: null
  },
  reducers: { 
    poststatus: (state , action) => {
      state.isPosting = action.payload
    },
    hasStatus: (state , action) => {
      state.status = action.payload
    }, 
  }
})

// Action creators are generated for each case reducer function
export const {  poststatus , hasStatus } = notificationSlice.actions

export default notificationSlice.reducer