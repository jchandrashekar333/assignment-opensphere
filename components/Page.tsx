type PageProps = {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <div
      style={{
        width: "816px",
        height: "1056px",
        background: "white",
        margin: "0 auto 32px",
        padding: "96px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  )
}
