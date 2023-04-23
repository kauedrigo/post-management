import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    posts: postSlice,
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
