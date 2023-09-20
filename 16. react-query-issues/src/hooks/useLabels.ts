import { Label } from '../interfaces/label';
import { gitHubApi } from '../api/githubApi';
import { useQuery } from '@tanstack/react-query';

const getLabels = async ():Promise<Label[]> => {
  const {data} = await gitHubApi.get<Label[]>('/labels');
  return data
}

function useLabels() {
  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      staleTime: 1000 * 60 * 60, // <--- 1h
    }
  )

  return labelsQuery
}

export default useLabels