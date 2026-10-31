"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, AlertCircle } from "lucide-react";
import { loginApi } from "@/services/backendEventService";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await loginApi(email, password);
    setLoading(false);

    if (res.success) {
      router.push("/admin/events");
    } else {
      setError(res.message || "Credenciais inválidas.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <span className="font-extrabold text-2xl tracking-wider text-white">
            TRITON <span className="text-[#df1f26]">ADMIN</span>
          </span>
          <p className="text-xs text-gray-400 mt-2">
            Acesso exclusivo para administradores e colaboradores
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">E-mail</label>
            <div className="flex items-center bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-[#df1f26] transition">
              <Mail className="w-4 h-4 text-gray-500 mr-2.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@triton.com"
                className="bg-transparent text-white text-sm w-full focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Senha</label>
            <div className="flex items-center bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-[#df1f26] transition">
              <Lock className="w-4 h-4 text-gray-500 mr-2.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-transparent text-white text-sm w-full focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold py-3 rounded-xl transition flex items-center justify-center space-x-2 shadow-lg shadow-red-600/30 disabled:opacity-50 mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Entrando...</span>
              </>
            ) : (
              <span>Entrar no Painel</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}