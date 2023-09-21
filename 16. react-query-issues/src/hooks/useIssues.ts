import { useQuery } from "@tanstack/react-query"
import { gitHubApi } from "../api/githubApi"
import { Issue } from "../interfaces"

const getIssues = async():Promise<Issue[]> => {
  const {data} = await gitHubApi.get<Issue[]>('/issues')
  return data
}

function useIssues() {
  const issuesQuery = useQuery(
    ['issues'],
    getIssues
  )
  
  return {
    issuesQuery,
  }
}

export { useIssues }