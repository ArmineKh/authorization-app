import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    userToken: JSON.parse(localStorage.getItem('userToken')) || null
  },
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload
    },
    removeUser: (state) => {
        state.user = null
    },
    setUserToken: (state, {payload}) => {
      state.userToken = payload
    },
    removeUserToken: (state) => {
        state.userToken = null
    },
  },
})

export const { setUser, removeUser, setUserToken, removeUserToken } = userSlice.actions

export default userSlice.reducer