import { AxiosResponse } from 'axios'
import { api } from '../api'
import { Post } from '../../redux/postSlice'

export const createPostService = async (request: Omit<Post, 'id' | 'created_datetime'>) => {
  const { data }: AxiosResponse<Post> = await api.post(``, { ...request })

  return data
}
