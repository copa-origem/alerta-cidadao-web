"use client"

import { useEffect, useRef } from "react"
import { BottomNav } from "@/components/bottom-nav"

export default function ExplorarPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // TODO: Initialize map with API
    console.log("[v0] Map container ready for API integration")
  }, [])

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-1 relative">
        <div ref={mapContainerRef} className="absolute inset-0 bg-muted">
          <div className="flex h-full items-center justify-center">
            <div className="text-center space-y-2">
              <p className="text-lg font-medium text-muted-foreground">Mapa será carregado aqui</p>
              <p className="text-sm text-muted-foreground">Integração com API de mapas</p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
