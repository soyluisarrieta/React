import { FC } from "react";
import useLabels from "../../hooks/useLabels"
import { LoadingIcon } from "../../shared/components/LoadingIcon"

interface Props {
  selectedLabel: string[];
  onChange: (labelName: string)=>void;
}

export const LabelPicker: FC<Props> = ({selectedLabel, onChange}) => {
  const {
    data,
    isLoading,
  } = useLabels()

  if (isLoading) {
    return (<LoadingIcon />)
  }

  return (
    <>
      {data?.map(label => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${selectedLabel.includes(label.name) ? 'label-active' : ''}`}
          style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          onClick={()=>onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  )
}
