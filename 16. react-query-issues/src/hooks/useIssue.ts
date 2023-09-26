import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Issue } from '../interfaces'
import { gitHubApi } from '../api/githubApi'

export const getIssueInfo = async (issueNumber: number):Promise<Issue> => {
  const {data} = await gitHubApi.get<Issue>(`/issues/${issueNumber}`)
  return data
}

export const getIssueComments = async (issueNumber: number):Promise<Issue[]> => {
  const {data} = await gitHubApi.get<Issue[]>(`/issues/${issueNumber}/comments`)
  return data
}

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssueInfo(issueNumber)
  )
  
  const commentsQuery = useQuery(
    ['comments', issueNumber, 'comments'],
    () => getIssueComments(issueQuery.data!.number),
    {
      enabled: issueQuery.data !== undefined // <-- Espera a que issueQuery.data sea true
    }
  )

  return {issueQuery, commentsQuery}
}
