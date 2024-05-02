function Card({
  title,
  children,
  detailsDescription,
  details,
  actions
}: {
  title: string
  children?: React.ReactNode
  detailsDescription?: string
  details?: string[]
  actions?: React.ReactNode
}) {
  return (
    <>
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {children}
          <div className="text-sm">
            {detailsDescription}
            <ul className="text-xs text-gray-500 leading-6">
              {details?.map((detail: string, index: number) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions justify-start">{actions}</div>
        </div>
      </div>
    </>
  )
}

export default Card
