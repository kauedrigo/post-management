import axios from 'axios'

const url = 'https://dev.codeleap.co.uk/careers/'

const api = axios.create({
  baseURL: url,
})

export { api }
