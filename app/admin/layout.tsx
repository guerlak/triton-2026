"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Calendar, PlusCircle, ArrowLeft, LogOut } from "lucide-react";
import { getAuthToken, removeAuthToken } from "@/services/backendEventService";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Se estiver na tela de login, não bloqueia
    if (pathname === "/admin/login") {
      setAuthorized(true);
      return;
    }

    const token = getAuthToken();
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    removeAuthToken();
    router.push("/admin/login");
  };

  // Se for a tela de login, renderiza limpo sem menu
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!authorized) {
    return null; // ou um loader enquanto valida o token
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      <header className="border-b border-white/10 bg-[#121212] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/admin/events" className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-wider text-white">
                TRITON <span className="text-[#df1f26]">ADMIN</span>
              </span>
            </Link>

            <nav className="hidden md:flex space-x-4">
              <Link
                href="/admin/events"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                <Calendar className="w-4 h-4 text-[#df1f26]" />
                <span>Eventos</span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              target="_blank"
              className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ver Site</span>
            </Link>

            <Link
              href="/admin/events/new"
              className="flex items-center space-x-1.5 bg-[#df1f26] hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Novo Evento</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-1.5 text-xs text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg border border-red-500/20 hover:bg-red-500/10 transition"
              title="Encerrar Sessão"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        TRITON World Series &copy; {new Date().getFullYear()} — Painel Administrativo
      </footer>
    </div>
  );
}