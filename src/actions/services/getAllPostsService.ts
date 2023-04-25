import { AxiosResponse } from 'axios'
import { api } from '../api'
import { Post } from '../../redux/postSlice'

export type GetAllPostsResponse = {
  count: number
  next: string
  previous: string
  results: Post[]
}

export const getAllPostsService = async (filter?: string) => {
  const { data }: AxiosResponse<GetAllPostsResponse> = await (filter ? api.get(`/${filter}`) : api.get(``))

  return data
}
