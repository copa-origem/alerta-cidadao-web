"use client"

import { Home, Search, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-lg">
      <div className="flex h-16 items-center justify-around">
        <Link href="/" className="flex-1">
          <Button
            variant="ghost"
            className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-none hover:bg-primary/10"
          >
            <Home className={`h-5 w-5 ${isActive("/") ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs ${isActive("/") ? "font-semibold text-primary" : "text-muted-foreground"}`}>
              Home
            </span>
          </Button>
        </Link>

        <Link href="/explorar" className="flex-1">
          <Button
            variant="ghost"
            className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-none hover:bg-primary/10"
          >
            <Search className={`h-5 w-5 ${isActive("/explorar") ? "text-primary" : "text-muted-foreground"}`} />
            <span
              className={`text-xs ${isActive("/explorar") ? "font-semibold text-primary" : "text-muted-foreground"}`}
            >
              Explorar
            </span>
          </Button>
        </Link>

        <Link href="/minhas-ocorrencias" className="flex-1">
          <Button
            variant="ghost"
            className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-none hover:bg-primary/10"
          >
            <FileText
              className={`h-5 w-5 ${isActive("/minhas-ocorrencias") ? "text-primary" : "text-muted-foreground"}`}
            />
            <span
              className={`text-xs ${isActive("/minhas-ocorrencias") ? "font-semibold text-primary" : "text-muted-foreground"}`}
            >
              Minhas Ocorrências
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
