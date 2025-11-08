export function Hero() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      {/* Logo Section */}
      <div className="flex h-32 w-full items-center justify-center rounded-2xl border-2 border-border bg-card">
        <h1 className="text-4xl font-bold tracking-tight text-card-foreground">Alerta Cidadão</h1>
      </div>

      {/* Description */}
      <div className="w-full rounded-xl border border-border bg-card px-6 py-4">
        <p className="text-center text-sm text-muted-foreground">canal de denúncia comunitária</p>
      </div>

      {/* Divider */}
      <div className="h-1 w-48 rounded-full bg-foreground" />
    </div>
  )
}
