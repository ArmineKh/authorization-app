import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import userReducer from './slices/userSlice'
import newsReducer from './slices/newsSlice'

const reducer = combineReducers({
  userReducer,
  newsReducer,
})

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})