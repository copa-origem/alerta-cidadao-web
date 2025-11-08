import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ActionButtons } from "@/components/action-buttons"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-6">
        <Hero />
        <ActionButtons />
      </main>
      <BottomNav />
    </div>
  )
}
