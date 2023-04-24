import { AxiosResponse } from 'axios'
import { api } from '../api'
import { Post } from '../../redux/postSlice'

type EditRequest = {
  title: string
  content: string
}

export const editPostService = async (id: string, request: EditRequest) => {
  const { data }: AxiosResponse<Post> = await api.patch(`/${id}/`, { ...request })

  return data
}
