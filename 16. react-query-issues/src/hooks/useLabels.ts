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
      staleTime: 1000 * 60 * 60, // <--- 1h como mínimo para hacer refetch cuando pierde el foco
      // initialData: [], // <--- Datos iniciales hasta que el staleTime realice un refetch
      placeholderData: [  // <--- Datos iniciales hasta que reciba nuevos datos de la petición
        {
          id: 717031390,
          node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
          url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
          name: "good first issue",
          color: "6ce26a",
          default: true,
        },
        {
          id: 725156255,
          node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
          url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
          name: "good first issue (taken)",
          color: "b60205",
          default: false,
        }
      ]
    }
  )

  return labelsQuery
}

export { useLabels }