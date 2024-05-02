export function SmallView({
  children,
  noGap = false
}: {
  children: React.ReactNode
  noGap?: boolean
}) {
  return (
    <div
      className={`w-11/12 md:w-3/4 lg:w-1/2 mx-auto flex flex-col mb-32 ${
        noGap ? 'gap-0' : 'gap-32'
      }`}>
      {children}
    </div>
  )
}

export function BigView({
  children,
  noGap = false
}: {
  children: React.ReactNode
  noGap?: boolean
}) {
  return (
    <section
      className={`w-11/12 md:w-9/12 lg:w-10/12 mx-auto flex flex-col mb-32 ${
        noGap ? 'gap-0' : 'gap-32'
      }`}>
      {children}
    </section>
  )
}
