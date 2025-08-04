import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    selectall: false,
    seledtedItems: []
  },
  reducers: { 
    isSelectedAll: (state , action) => {
      state.selectall = action.payload
    },
    addtoSelectedItems: (state , action) => {
      state.seledtedItems = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {  isSelectedAll , addtoSelectedItems } = postSlice.actions

export default postSlice.reducer