"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
  Image as ImageIcon,
  FileText,
  Trophy,
} from "lucide-react";
import { createEventApi, uploadMediaApi } from "@/services/backendEventService";

export default function NewEventPage() {
  const router = useRouter();

  // Navigation tab
  const [activeTab, setActiveTab] = useState<"general" | "media" | "info" | "athlete">("general");

  // Loading & notification states
  const [submitting, setSubmitting] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    subtitle: "",
    eventFormat: "triton3" as "triton1" | "triton3",
    status: "Confirmed" as "Confirmed" | "Planned" | "Completed",
    language: "pt-BR" as "pt-BR" | "en",
    year: new Date().getFullYear(),
    location: "",
    venue: "",
    dateText: "",
    fullDateText: "",
    targetDate: new Date().toISOString().split("T")[0] + "T08:00:00",
    country: "Brazil",
    flag: "🇧🇷",
    registrationLink: "",
    // Media
    heroBackgroundImage: "",
    heroLogoImage: "",
    // Info
    infoTitle: "",
    infoSubtitle: "",
    infoDescription: "",
    // Scoring
    scoringTitle: "",
    scoringDescription: "",
    // Athlete Area
    liveResultsUrl: "",
    raceGuideLink: "",
    startListApiUrl: "",
    mediaPictureUrl: "",
    videoBriefingUrl: "",
  });

  // Auto-slug generator
  const handleTitleChange = (val: string) => {
    const autoSlug = val
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: prev.slug === "" || prev.slug === autoSlug.slice(0, -1) ? `${autoSlug}-${prev.year}` : prev.slug,
    }));
  };

  // Upload handler for Hero Background
  const handleHeroUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingHero(true);
    setFeedback(null);

    const folder = `events/${formData.slug || "new"}/hero`;
    const res = await uploadMediaApi(file, folder);

    setUploadingHero(false);
    if (res.success && res.data) {
      setFormData((prev) => ({ ...prev, heroBackgroundImage: res.data!.url }));
      setFeedback({ type: "success", message: "Foto de capa enviada com sucesso para o Cloudflare R2!" });
    } else {
      setFeedback({ type: "error", message: res.message || "Erro no upload da imagem." });
    }
  };

  // Upload handler for Logo
  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingLogo(true);
    setFeedback(null);

    const folder = `events/${formData.slug || "new"}/logos`;
    const res = await uploadMediaApi(file, folder);

    setUploadingLogo(false);
    if (res.success && res.data) {
      setFormData((prev) => ({ ...prev, heroLogoImage: res.data!.url }));
      setFeedback({ type: "success", message: "Logo enviada com sucesso para o Cloudflare R2!" });
    } else {
      setFeedback({ type: "error", message: res.message || "Erro no upload do logo." });
    }
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.slug || !formData.location) {
      setFeedback({ type: "error", message: "Preencha os campos obrigatórios (Título, Slug e Local)." });
      setActiveTab("general");
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    const payload: any = {
      id: formData.slug,
      slug: formData.slug,
      title: formData.title,
      subtitle: formData.subtitle || undefined,
      eventFormat: formData.eventFormat,
      status: formData.status,
      language: formData.language,
      year: Number(formData.year),
      location: formData.location,
      venue: formData.venue || undefined,
      dateText: formData.dateText || "A Confirmar",
      fullDateText: formData.fullDateText || "Data a Confirmar",
      targetDate: formData.targetDate,
      country: formData.country,
      flag: formData.flag,
      registrationLink: formData.registrationLink || "#",
      hero: {
        backgroundImage: formData.heroBackgroundImage,
        logoImage: formData.heroLogoImage,
      },
    };

    if (formData.infoTitle || formData.infoDescription) {
      payload.info = {
        title: formData.infoTitle,
        subtitle: formData.infoSubtitle,
        description: formData.infoDescription,
      };
    }

    if (formData.scoringTitle || formData.scoringDescription) {
      payload.scoring = {
        title: formData.scoringTitle,
        description: formData.scoringDescription,
      };
    }

    if (formData.liveResultsUrl || formData.raceGuideLink || formData.startListApiUrl) {
      payload.athleteArea = {
        liveResultsUrl: formData.liveResultsUrl,
        raceGuideLink: formData.raceGuideLink,
        startListApiUrl: formData.startListApiUrl,
        mediaPictureUrl: formData.mediaPictureUrl,
        videoBriefingUrl: formData.videoBriefingUrl,
      };
    }

    const result = await createEventApi(payload);
    setSubmitting(false);

    if (result.success) {
      setFeedback({ type: "success", message: "Evento criado com sucesso no PostgreSQL!" });
      setTimeout(() => {
        router.push("/admin/events");
      }, 1500);
    } else {
      setFeedback({ type: "error", message: result.message || "Erro ao salvar evento." });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/events"
          className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Lista de Eventos</span>
        </Link>
      </div>

      <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold text-white">Cadastrar Novo Evento</h1>
          <p className="text-xs text-gray-400 mt-1">
            Preencha os dados do evento e envie as mídias. As imagens serão otimizadas e salvas diretamente no Cloudflare R2.
          </p>
        </div>

        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`m-6 p-4 rounded-xl flex items-center space-x-3 text-sm ${
              feedback.type === "success"
                ? "bg-emerald-950/40 border border-emerald-500/40 text-emerald-300"
                : "bg-red-950/40 border border-red-500/40 text-red-300"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#171717] px-6">
          <button
            type="button"
            onClick={() => setActiveTab("general")}
            className={`flex items-center space-x-2 py-3.5 px-4 text-xs font-semibold border-b-2 transition ${
              activeTab === "general"
                ? "border-[#df1f26] text-white"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <Calendar className="w-4 h-4 text-[#df1f26]" />
            <span>1. Informações Gerais</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("media")}
            className={`flex items-center space-x-2 py-3.5 px-4 text-xs font-semibold border-b-2 transition ${
              activeTab === "media"
                ? "border-[#df1f26] text-white"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <ImageIcon className="w-4 h-4 text-[#df1f26]" />
            <span>2. Fotos e Mídias (R2)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("info")}
            className={`flex items-center space-x-2 py-3.5 px-4 text-xs font-semibold border-b-2 transition ${
              activeTab === "info"
                ? "border-[#df1f26] text-white"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <FileText className="w-4 h-4 text-[#df1f26]" />
            <span>3. Conteúdo & Pontuação</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("athlete")}
            className={`flex items-center space-x-2 py-3.5 px-4 text-xs font-semibold border-b-2 transition ${
              activeTab === "athlete"
                ? "border-[#df1f26] text-white"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <Trophy className="w-4 h-4 text-[#df1f26]" />
            <span>4. Área do Atleta</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* TAB 1: GENERAL */}
          {activeTab === "general" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Título do Evento * <span className="text-zinc-500">(Ex: Florianópolis)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Ex: Rio de Janeiro"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Slug (URL amigável) * <span className="text-zinc-500">(Ex: floripa-2027)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="rio-2027"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Formato do Evento
                  </label>
                  <select
                    value={formData.eventFormat}
                    onChange={(e) => setFormData({ ...formData, eventFormat: e.target.value as any })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  >
                    <option value="triton3">TRITON 3 (3 dias consecutivos)</option>
                    <option value="triton1">TRITON 1 (1 dia de prova)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Ano da Prova
                  </label>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Status do Evento
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  >
                    <option value="Confirmed">Confirmed (Confirmado)</option>
                    <option value="Planned">Planned (Planejado / Em Breve)</option>
                    <option value="Completed">Completed (Realizado)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Localização * <span className="text-zinc-500">(Ex: Portobello, RJ)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Portobello, Mangaratiba"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Arena / Venue <span className="text-zinc-500">(Ex: Portobello Resort & Safari)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    placeholder="Portobello Resort"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Texto Curto da Data <span className="text-zinc-500">(Ex: AGO 21 . 22 . 23)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.dateText}
                    onChange={(e) => setFormData({ ...formData, dateText: e.target.value })}
                    placeholder="OUT 16 . 17 . 18"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Texto Completo da Data <span className="text-zinc-500">(Ex: 21, 22 e 23 de Agosto)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullDateText}
                    onChange={(e) => setFormData({ ...formData, fullDateText: e.target.value })}
                    placeholder="16, 17 e 18 de Outubro, 2027"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Data Alvo (Target Date p/ Countdown)
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.targetDate.slice(0, 16)}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value + ":00" })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">País</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Bandeira (Emoji)</label>
                  <input
                    type="text"
                    value={formData.flag}
                    onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Link de Inscrição</label>
                  <input
                    type="url"
                    value={formData.registrationLink}
                    onChange={(e) => setFormData({ ...formData, registrationLink: e.target.value })}
                    placeholder="https://ticketsports.com.br/..."
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MEDIA (R2 UPLOADER) */}
          {activeTab === "media" && (
            <div className="space-y-6">
              {/* Hero Background */}
              <div className="p-5 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Imagem de Capa (Hero Background)</h3>
                    <p className="text-xs text-gray-400">
                      Foto panorâmica da arena ou modalidade que ocupa o topo da página do evento.
                    </p>
                  </div>
                  {uploadingHero && (
                    <span className="flex items-center space-x-1.5 text-xs text-[#df1f26]">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Otimizando e enviando ao R2...</span>
                    </span>
                  )}
                </div>

                {formData.heroBackgroundImage && (
                  <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={formData.heroBackgroundImage}
                      alt="Hero Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[11px] text-zinc-300 font-mono">
                      {formData.heroBackgroundImage}
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <label className="cursor-pointer inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-4 py-2 rounded-xl text-xs font-medium transition">
                    <Upload className="w-4 h-4 text-[#df1f26]" />
                    <span>{formData.heroBackgroundImage ? "Alterar Foto" : "Selecionar Foto de Capa"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleHeroUpload}
                      className="hidden"
                    />
                  </label>

                  <input
                    type="text"
                    value={formData.heroBackgroundImage}
                    onChange={(e) => setFormData({ ...formData, heroBackgroundImage: e.target.value })}
                    placeholder="Ou cole a URL da imagem diretamente..."
                    className="flex-1 bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              {/* Logo Image */}
              <div className="p-5 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Logo do Evento</h3>
                    <p className="text-xs text-gray-400">
                      Logo em formato PNG transparente ou SVG da etapa (ex: logo branco).
                    </p>
                  </div>
                  {uploadingLogo && (
                    <span className="flex items-center space-x-1.5 text-xs text-[#df1f26]">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Enviando logo ao R2...</span>
                    </span>
                  )}
                </div>

                {formData.heroLogoImage && (
                  <div className="p-4 bg-zinc-950/80 rounded-xl border border-white/10 inline-block">
                    <img
                      src={formData.heroLogoImage}
                      alt="Logo Preview"
                      className="h-14 object-contain"
                    />
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <label className="cursor-pointer inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-4 py-2 rounded-xl text-xs font-medium transition">
                    <Upload className="w-4 h-4 text-[#df1f26]" />
                    <span>{formData.heroLogoImage ? "Alterar Logo" : "Selecionar Logo"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>

                  <input
                    type="text"
                    value={formData.heroLogoImage}
                    onChange={(e) => setFormData({ ...formData, heroLogoImage: e.target.value })}
                    placeholder="Ou cole a URL do logo..."
                    className="flex-1 bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONTENT & SCORING */}
          {activeTab === "info" && (
            <div className="space-y-4">
              <div className="p-4 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-sm font-semibold text-white">Seção Institucional / Sobre a Etapa</h3>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Título</label>
                  <input
                    type="text"
                    value={formData.infoTitle}
                    onChange={(e) => setFormData({ ...formData, infoTitle: e.target.value })}
                    placeholder="Ex: Um formato inovador"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Subtítulo</label>
                  <input
                    type="text"
                    value={formData.infoSubtitle}
                    onChange={(e) => setFormData({ ...formData, infoSubtitle: e.target.value })}
                    placeholder="Ex: Permita-se viver esse desafio"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Descrição</label>
                  <textarea
                    rows={4}
                    value={formData.infoDescription}
                    onChange={(e) => setFormData({ ...formData, infoDescription: e.target.value })}
                    placeholder="Descreva a prova e o diferencial da etapa..."
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              <div className="p-4 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-sm font-semibold text-white">Seção de Pontuação & Ranking</h3>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Título da Pontuação</label>
                  <input
                    type="text"
                    value={formData.scoringTitle}
                    onChange={(e) => setFormData({ ...formData, scoringTitle: e.target.value })}
                    placeholder="Ex: Um sistema de pontuação inovador"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Descrição da Pontuação</label>
                  <textarea
                    rows={3}
                    value={formData.scoringDescription}
                    onChange={(e) => setFormData({ ...formData, scoringDescription: e.target.value })}
                    placeholder="Explique as regras de pontuação da etapa..."
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ATHLETE AREA */}
          {activeTab === "athlete" && (
            <div className="space-y-4">
              <p className="text-xs text-gray-400">
                Links dinâmicos exibidos na Área do Atleta (resultados ao vivo, start list, guia da prova em PDF e fotos).
              </p>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Resultados Ao Vivo (URL)</label>
                <input
                  type="url"
                  value={formData.liveResultsUrl}
                  onChange={(e) => setFormData({ ...formData, liveResultsUrl: e.target.value })}
                  placeholder="https://resultscui.active.com/..."
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Start List API (URL RaceResult)</label>
                <input
                  type="url"
                  value={formData.startListApiUrl}
                  onChange={(e) => setFormData({ ...formData, startListApiUrl: e.target.value })}
                  placeholder="https://api.raceresult.com/..."
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Guia do Atleta / Race Guide (PDF)</label>
                <input
                  type="text"
                  value={formData.raceGuideLink}
                  onChange={(e) => setFormData({ ...formData, raceGuideLink: e.target.value })}
                  placeholder="/docs/race-guide/... ou URL do PDF"
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Galeria de Fotos (Foco Radical / Fotop)</label>
                <input
                  type="url"
                  value={formData.mediaPictureUrl}
                  onChange={(e) => setFormData({ ...formData, mediaPictureUrl: e.target.value })}
                  placeholder="https://www.focoradical.com.br/..."
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Vídeo Briefing (YouTube)</label>
                <input
                  type="url"
                  value={formData.videoBriefingUrl}
                  onChange={(e) => setFormData({ ...formData, videoBriefingUrl: e.target.value })}
                  placeholder="https://youtu.be/..."
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/admin/events"
              className="text-xs text-gray-400 hover:text-white transition px-4 py-2"
            >
              Cancelar
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition flex items-center space-x-2 shadow-lg shadow-red-600/30 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Salvando no PostgreSQL...</span>
                </>
              ) : (
                <span>Salvar e Publicar Evento</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

