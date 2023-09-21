import axios from 'axios'

export const gitHubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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'
  }
})