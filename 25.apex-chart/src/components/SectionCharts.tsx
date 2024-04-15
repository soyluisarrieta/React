interface Props {
  title: string
  children: React.ReactNode
}

export default function SectionCharts({ title, children }: Props) {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: '#fff', fontSize: 40 }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, max(500px, 1fr))', gap: '20px' }}>
        {children}
      </div>
    </div>
  )
}
