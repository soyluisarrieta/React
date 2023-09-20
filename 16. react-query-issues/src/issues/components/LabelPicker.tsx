import { useQuery } from "@tanstack/react-query"
import { gitHubApi } from "../../api/githubApi";

const getLabels = async () => {
  const {data} = await gitHubApi('/labels');
  console.log(data);
  
  return data
}

export const LabelPicker = () => {

  const labelsQuery = useQuery(
    ['labels'],
    getLabels
  )

  return (
    <div>
        <span 
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
        >
            Primary
        </span>
        
    </div>
  )
}
