import axios from 'axios'

export const gitHubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer '+import.meta.env.VITE_GITHUB_API_KEY
  }
})