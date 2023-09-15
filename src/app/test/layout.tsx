export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <p>this is test</p>
      {children}
    </>
  )
}
