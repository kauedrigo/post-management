import { AxiosResponse } from 'axios'
import { api } from '../api'
import { Post } from '../../redux/postSlice'

type GetAllPostsResponse = {
  count: number
  next: string
  previous: string
  results: Post[]
}

export const getAllPostsService = async () => {
  const { data }: AxiosResponse<GetAllPostsResponse> = await api.get(``)

  return data
}
