"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  PlusCircle,
  Trash2,
  Edit2,
  ExternalLink,
  Search,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { getEventsFromApi, deleteEventApi } from "@/services/backendEventService";
import { EventData } from "@/eventdata";

export default function AdminEventsListPage() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getEventsFromApi();
      setEvents(data);
    } catch (err: any) {
      setError("Não foi possível carregar os eventos da API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (event: EventData) => {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja excluir o evento "${event.title}" (${event.slug})? Esta ação é irreversível no banco de dados.`
    );
    if (!confirmDelete) return;

    setDeletingId(event.id);
    const result = await deleteEventApi(event.id);
    setDeletingId(null);

    if (result.success) {
      setEvents((prev) => prev.filter((e) => e.id !== event.id));
    } else {
      alert(result.message || "Erro ao excluir o evento.");
    }
  };

  const filteredEvents = events.filter((ev) => {
    const q = searchTerm.toLowerCase();
    return (
      ev.title.toLowerCase().includes(q) ||
      ev.location.toLowerCase().includes(q) ||
      ev.slug.toLowerCase().includes(q) ||
      ev.country.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Banner & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center space-x-2">
            <span>Gerenciamento de Eventos</span>
            <span className="text-xs bg-[#df1f26]/20 text-[#df1f26] border border-[#df1f26]/30 px-2.5 py-0.5 rounded-full font-semibold">
              PostgreSQL
            </span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Cadastre, visualize e gerencie as etapas oficiais do TRITON World Series.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={loadEvents}
            disabled={loading}
            className="p-2.5 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition disabled:opacity-50"
            title="Recarregar eventos"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#df1f26]" : ""}`} />
          </button>

          <Link
            href="/admin/events/new"
            className="flex items-center space-x-2 bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-lg shadow-red-600/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Cadastrar Novo Evento</span>
          </Link>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="flex items-center bg-[#171717] border border-white/10 rounded-xl px-4 py-2.5 focus-within:border-[#df1f26] transition">
        <Search className="w-4 h-4 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Buscar evento por título, cidade, país ou slug..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none w-full"
        />
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 flex items-center space-x-3 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Loading state */}
      {loading ? (
        <div className="py-20 text-center">
          <RefreshCw className="w-8 h-8 text-[#df1f26] animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-400">Consultando eventos no PostgreSQL...</p>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl bg-[#121212]/50">
          <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-white">Nenhum evento encontrado</h3>
          <p className="text-sm text-gray-400 max-w-sm mx-auto mt-1 mb-5">
            {searchTerm
              ? "Nenhum resultado corresponde à sua pesquisa."
              : "Não há eventos cadastrados no banco de dados ainda."}
          </p>
          <Link
            href="/admin/events/new"
            className="inline-flex items-center space-x-2 bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Criar Primeiro Evento</span>
          </Link>
        </div>
      ) : (
        /* Event Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map((event) => {
            const heroBg =
              typeof event.hero?.backgroundImage === "string"
                ? event.hero.backgroundImage
                : "";

            return (
              <div
                key={event.id}
                className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition flex flex-col group"
              >
                {/* Hero Preview */}
                <div className="relative h-44 bg-gradient-to-t from-[#141414] to-black/60 overflow-hidden">
                  {heroBg ? (
                    <img
                      src={heroBg}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700 text-xs">
                      Sem imagem de capa
                    </div>
                  )}

                  {/* Badges on Top */}
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className="bg-[#df1f26] text-white text-[11px] font-black uppercase px-2 py-0.5 rounded shadow">
                      {event.eventFormat}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded shadow backdrop-blur-md ${
                        event.status === "Confirmed"
                          ? "bg-emerald-500/80 text-white"
                          : event.status === "Completed"
                          ? "bg-blue-500/80 text-white"
                          : "bg-amber-500/80 text-white"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 text-lg drop-shadow">
                    {event.flag}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-2 left-3 right-3">
                    <h3 className="text-lg font-black text-white drop-shadow">
                      {event.title}
                    </h3>
                    <p className="text-xs text-gray-300 drop-shadow line-clamp-1">
                      {event.subtitle || event.venue || event.location}
                    </p>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-xs text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-[#df1f26]" />
                      <span className="text-gray-200">{event.fullDateText || event.dateText} ({event.year})</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{event.location}, {event.country}</span>
                    </div>

                    <div className="text-[11px] text-zinc-500 font-mono">
                      slug: {event.slug}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/events/${event.eventFormat}/${event.slug}`}
                      target="_blank"
                      className="text-xs text-gray-400 hover:text-white flex items-center space-x-1.5 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Ver página</span>
                    </Link>

                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/admin/events/${event.slug}/edit`}
                        className="text-xs text-blue-400 hover:text-blue-300 flex items-center space-x-1 p-1.5 rounded hover:bg-blue-500/10 transition"
                        title="Editar evento"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Editar</span>
                      </Link>

                      <button
                        onClick={() => handleDelete(event)}
                        disabled={deletingId === event.id}
                        className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1 p-1.5 rounded hover:bg-red-500/10 transition disabled:opacity-50"
                        title="Excluir evento"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{deletingId === event.id ? "Excluindo..." : "Excluir"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

