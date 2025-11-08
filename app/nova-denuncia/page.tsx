import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { ReportForm } from "@/components/report-form"

import PrivateRoute from "../../components/privateRoute";

export default function NovaDenunciaPage() {
  return (
    <PrivateRoute>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex flex-1 flex-col px-4 pb-24 pt-6">
          <h1 className="mb-6 text-2xl font-bold">Nova Denúncia</h1>
          <ReportForm />
        </main>
        <BottomNav />
      </div>
    </PrivateRoute>
  )
}
