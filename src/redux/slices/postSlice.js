import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    selectall: false,
    seledtedItems: [],
    postsloaded : false
  },
  reducers: { 
    isSelectedAll: (state , action) => {
      state.selectall = action.payload
    },
    addtoSelectedItems: (state , action) => {
      state.seledtedItems = action.payload
    },
    loadpost: (state) => {
      state.postsloaded = !state.postsloaded
    }
  }
})

// Action creators are generated for each case reducer function
export const {  isSelectedAll , addtoSelectedItems , loadpost } = postSlice.actions

export default postSlice.reducer