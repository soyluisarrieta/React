interface Props {
  title: string
  children: React.ReactNode
}

export default function SectionCharts({ title, children }: Props) {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-3xl mb-3 text-primary">{title}</h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  )
}
