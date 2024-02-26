import { configureStore } from '@reduxjs/toolkit'
import  loginReducers  from '../reducers/LoginReducer'
import  ExploreReducers  from '../reducers/ExploreReducer'

export const store = configureStore({
  reducer: {
    explore:ExploreReducers,
    login: loginReducers,
  },
})

