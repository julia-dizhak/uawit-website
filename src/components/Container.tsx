export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl px-6">
      {children}
    </div>
  )
}
