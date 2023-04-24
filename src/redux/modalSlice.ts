/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Post } from './postSlice'

type ModalState = {
  isOpen: boolean
  variant: 'edit' | 'delete'
  post: Post | null
}

const initialState: ModalState = {
  isOpen: false,
  variant: 'edit',
  post: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalState>) => {
      state.isOpen = action.payload.isOpen
      state.variant = action.payload.variant
      state.post = action.payload.post
    },
  },
})

export const { setModal } = modalSlice.actions

export const selectModal = (state: RootState) => state.modal

export default modalSlice.reducer
