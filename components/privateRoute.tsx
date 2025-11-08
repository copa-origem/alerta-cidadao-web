"use client";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase";
import { ReactNode, useEffect } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/entrar"); // redireciona se não estiver logado
    }
  }, [user, loading, router]);

  if (loading) return <p>Carregando...</p>;

  if (!user) return null; // evita piscar conteúdo não autorizado

  return <>{children}</>;
}
