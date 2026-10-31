import Link from "next/link";
import { Calendar, PlusCircle, ArrowLeft } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      {/* Top Header */}
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
              <span>Ver Site Público</span>
            </Link>

            <Link
              href="/admin/events/new"
              className="flex items-center space-x-1.5 bg-[#df1f26] hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow-md shadow-red-600/20"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Novo Evento</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        TRITON World Series &copy; {new Date().getFullYear()} — Painel Administrativo
      </footer>
    </div>
  );
}

