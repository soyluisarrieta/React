interface Props {
  name: string
  children: React.ReactNode
}

export default function CardChart({name, children}: Props) {
  return (
    <div style={{padding: 20, border: 'solid 1px #222', borderRadius: 7}}>
      <h3 style={{margin: 0, marginBottom: 10, fontSize: 27, fontWeight: 500, color: '#fff'}}>
        {name}
      </h3>
      <hr style={{marginBottom: 25, opacity: 0.3, borderColor: '#111'}} />
      {children}
    </div>
  )
}
