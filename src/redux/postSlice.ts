import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { GetAllPostsResponse } from '../actions/services/getAllPostsService'

export type Post = {
  id: string
  username: string
  created_datetime: Date
  title: string
  content: string
}

type PostState = {
  posts: Post[]
  next: string
}

const initialState: PostState = {
  posts: [],
  next: '',
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    populatePosts: (state, action: PayloadAction<GetAllPostsResponse>) => {
      if (action.payload.previous === null) {
        state.posts = action.payload.results
      } else {
        const uniquePosts = action.payload.results.filter(
          (post) => !state.posts.find((elem) => elem.id === post.id)
        )
        state.posts.push(...uniquePosts)
      }
      state.next = action.payload.next
    },
    createPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const postIndex = state.posts.findIndex((post) => post.id === action.payload)
      state.posts.splice(postIndex, 1)
    },
    updatePost: (state, action: PayloadAction<Omit<Post, 'created_datetime' | 'username'>>) => {
      const newPostInfo = action.payload
      const postIndex = state.posts.findIndex((post) => post.id === newPostInfo.id)
      const currentPost = state.posts[postIndex]
      state.posts[postIndex] = { ...currentPost, ...newPostInfo }
    },
  },
})

export const { populatePosts, createPost, deletePost, updatePost } = postSlice.actions

export const selectPost = (state: RootState) => state.posts

export default postSlice.reducer
