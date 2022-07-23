import { createSlice } from '@reduxjs/toolkit'

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
  },
  reducers: {
    getNews: (state, {payload}) => {
      state.news = payload
    },
  },
})

export const { getNews } = newsSlice.actions

export default newsSlice.reducer