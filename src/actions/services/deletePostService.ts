import { AxiosResponse } from 'axios'
import { api } from '../api'
import { Post } from '../../redux/postSlice'

export const deletePostService = async (id: string) => {
  const { data }: AxiosResponse<Post> = await api.delete(`/${id}/`)

  return data
}
