import axios from 'axios'

export const gitHubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {}
})