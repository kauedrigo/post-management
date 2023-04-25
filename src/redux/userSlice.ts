import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

type UserState = {
  username: string
}

const initialState: UserState = {
  username: '',
}

export const userSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload
      localStorage.setItem('username', action.payload)
    },
    logout: (state) => {
      state.username = ''
      localStorage.removeItem('username')
      window.location.href = '/'
    },
  },
})

export const { login, logout } = userSlice.actions

export const selectPost = (state: RootState) => state.posts

export default userSlice.reducer
