interface Props {
  title: string
  children: React.ReactNode
}

export default function CardChart({title, children}: Props) {
  return (
    <div style={{padding: 20, border: 'solid 1px #222', borderRadius: 7}}>
      <h3 style={{margin: 0, marginBottom: 10, fontSize: 27, fontWeight: 500, color: '#fff'}}>
        {title}
      </h3>
      <hr style={{marginBottom: 25, opacity: 0.3, borderColor: '#111'}} />
      {children}
    </div>
  )
}
