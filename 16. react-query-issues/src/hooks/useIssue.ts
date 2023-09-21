import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Issue } from '../interfaces'
import { gitHubApi } from '../api/githubApi'

const getIssueInfo = async (issueNumber: number):Promise<Issue> => {
  const {data} = await gitHubApi.get<Issue>(`/issues/${issueNumber}`)
  return data
}

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssueInfo(issueNumber)
  )
  
  return {issueQuery}
}
