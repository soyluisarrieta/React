interface Props {
  name: string
  children: React.ReactNode
}

export default function CardChart({name, children}: Props) {
  return (
    <div className="p-5 bg-card rounded-lg">
      <h3 className="mb-4 text-2xl text-muted-foreground font-medium">
        {name}
      </h3>
      <hr style={{marginBottom: 25, opacity: 0.3}} />
      {children}
    </div>
  )
}
