"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
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
  Clock,
} from "lucide-react";
import {
  getEventBySlugFromApi,
  updateEventApi,
  uploadMediaApi,
} from "@/services/backendEventService";
import ScheduleEditor, { ScheduleFormState } from "../../_components/ScheduleEditor";

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const slug = String(params.slug);

  // Navigation tab
  const [activeTab, setActiveTab] = useState<"general" | "media" | "info" | "athlete" | "schedule">("general");

  // Loading states
  const [loading, setLoading] = useState(true);
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

  const [schedule, setSchedule] = useState<ScheduleFormState>({
    title: "",
    subtitle: "",
    importantNote: "",
    days: [],
  });

  // Load existing event data
  useEffect(() => {
    async function loadEvent() {
      setLoading(true);
      const data = await getEventBySlugFromApi(slug);

      if (!data) {
        setFeedback({ type: "error", message: `Event '${slug}' not found.` });
        setLoading(false);
        return;
      }

      setFormData({
        title: data.title || "",
        slug: data.slug || slug,
        subtitle: data.subtitle || "",
        eventFormat: data.eventFormat || "triton3",
        status: data.status || "Confirmed",
        language: data.language || "pt-BR",
        year: data.year || new Date().getFullYear(),
        location: data.location || "",
        venue: data.venue || "",
        dateText: data.dateText || "",
        fullDateText: data.fullDateText || "",
        targetDate: data.targetDate ? data.targetDate.slice(0, 19) : "",
        country: data.country || "Brazil",
        flag: data.flag || "🇧🇷",
        registrationLink: data.registrationLink || "",
        heroBackgroundImage:
          typeof data.hero?.backgroundImage === "string"
            ? data.hero.backgroundImage
            : "",
        heroLogoImage:
          typeof data.hero?.logoImage === "string" ? data.hero.logoImage : "",
        infoTitle: data.info?.title || "",
        infoSubtitle: data.info?.subtitle || "",
        infoDescription: data.info?.description || "",
        scoringTitle: data.scoring?.title || "",
        scoringDescription: data.scoring?.description || "",
        liveResultsUrl: data.athleteArea?.liveResultsUrl || "",
        raceGuideLink: data.athleteArea?.raceGuideLink || "",
        startListApiUrl: data.athleteArea?.startListApiUrl || "",
        mediaPictureUrl: data.athleteArea?.mediaPictureUrl || "",
        videoBriefingUrl: data.athleteArea?.videoBriefingUrl || "",
      });

      setSchedule({
        title: data.schedule?.title || "",
        subtitle: data.schedule?.subtitle || "",
        importantNote: data.schedule?.importantNote || "",
        days: data.schedule?.days || [],
      });

      setLoading(false);
    }

    if (slug) {
      loadEvent();
    }
  }, [slug]);

  // Upload handler for Hero Background
  const handleHeroUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingHero(true);
    setFeedback(null);

    const folder = `events/${formData.slug || slug}/hero`;
    const res = await uploadMediaApi(file, folder);

    setUploadingHero(false);
    if (res.success && res.data) {
      setFormData((prev) => ({ ...prev, heroBackgroundImage: res.data!.url }));
      setFeedback({ type: "success", message: "New cover photo uploaded to Cloudflare R2!" });
    } else {
      setFeedback({ type: "error", message: res.message || "Error uploading image." });
    }
  };

  // Upload handler for Logo
  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingLogo(true);
    setFeedback(null);

    const folder = `events/${formData.slug || slug}/logos`;
    const res = await uploadMediaApi(file, folder);

    setUploadingLogo(false);
    if (res.success && res.data) {
      setFormData((prev) => ({ ...prev, heroLogoImage: res.data!.url }));
      setFeedback({ type: "success", message: "New logo uploaded to Cloudflare R2!" });
    } else {
      setFeedback({ type: "error", message: res.message || "Error uploading logo." });
    }
  };

  // Submit Handler (Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.location) {
      setFeedback({ type: "error", message: "Please fill in the required fields (Title and Location)." });
      setActiveTab("general");
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    const payload: any = {
      title: formData.title,
      subtitle: formData.subtitle || undefined,
      eventFormat: formData.eventFormat,
      status: formData.status,
      language: formData.language,
      year: Number(formData.year),
      location: formData.location,
      venue: formData.venue || undefined,
      dateText: formData.dateText,
      fullDateText: formData.fullDateText,
      targetDate: formData.targetDate,
      country: formData.country,
      flag: formData.flag,
      registrationLink: formData.registrationLink,
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

    payload.schedule = schedule;

    const result = await updateEventApi(slug, payload);
    setSubmitting(false);

    if (result.success) {
      setFeedback({ type: "success", message: "Event updated successfully in PostgreSQL!" });
      setTimeout(() => {
        router.push("/admin/events");
      }, 1200);
    } else {
      setFeedback({ type: "error", message: result.message || "Error updating event." });
    }
  };

  if (loading) {
    return (
      <div className="py-24 text-center">
        <Loader2 className="w-8 h-8 text-[#df1f26] animate-spin mx-auto mb-3" />
        <p className="text-sm text-gray-400">Loading event data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/events"
          className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events List</span>
        </Link>
      </div>

      <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>Edit Event:</span>
              <span className="text-[#df1f26]">{formData.title}</span>
            </h1>
            <p className="text-xs text-gray-400 mt-1 font-mono">slug: {slug}</p>
          </div>

          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded shadow ${
              formData.status === "Confirmed"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : formData.status === "Completed"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
            }`}
          >
            {formData.status}
          </span>
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
            <span>1. General Info</span>
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
            <span>2. Photos & Media (R2)</span>
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
            <span>3. Content & Scoring</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("schedule")}
            className={`flex items-center space-x-2 py-3.5 px-4 text-xs font-semibold border-b-2 transition ${
              activeTab === "schedule"
                ? "border-[#df1f26] text-white"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <Clock className="w-4 h-4 text-[#df1f26]" />
            <span>4. Schedule</span>
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
            <span>5. Athlete Area</span>
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
                    Event Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="TRITON 3"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Event Format
                  </label>
                  <select
                    value={formData.eventFormat}
                    onChange={(e) => setFormData({ ...formData, eventFormat: e.target.value as any })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  >
                    <option value="triton3">TRITON 3 (3 consecutive days)</option>
                    <option value="triton1">TRITON 1 (1-day race)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Race Year
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
                    Event Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Planned">Planned (Coming Soon)</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Arena / Venue
                  </label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Date Text
                  </label>
                  <input
                    type="text"
                    value={formData.fullDateText}
                    onChange={(e) => setFormData({ ...formData, fullDateText: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Target Date
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
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Flag (Emoji)</label>
                  <input
                    type="text"
                    value={formData.flag}
                    onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Registration Link</label>
                  <input
                    type="url"
                    value={formData.registrationLink}
                    onChange={(e) => setFormData({ ...formData, registrationLink: e.target.value })}
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
                    <h3 className="text-sm font-semibold text-white">Cover Image (Hero Background)</h3>
                    <p className="text-xs text-gray-400">
                      Panoramic photo displayed at the top of the page.
                    </p>
                  </div>
                  {uploadingHero && (
                    <span className="flex items-center space-x-1.5 text-xs text-[#df1f26]">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Uploading new photo to R2...</span>
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
                    <span>Replace Photo</span>
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
                    className="flex-1 bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              {/* Logo Image */}
              <div className="p-5 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Event Logo</h3>
                    <p className="text-xs text-gray-400">
                      Transparent logo for this event.
                    </p>
                  </div>
                  {uploadingLogo && (
                    <span className="flex items-center space-x-1.5 text-xs text-[#df1f26]">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Uploading new logo to R2...</span>
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
                    <span>Replace Logo</span>
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
                <h3 className="text-sm font-semibold text-white">About / Institutional Section</h3>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Title</label>
                  <input
                    type="text"
                    value={formData.infoTitle}
                    onChange={(e) => setFormData({ ...formData, infoTitle: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={formData.infoSubtitle}
                    onChange={(e) => setFormData({ ...formData, infoSubtitle: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Description</label>
                  <textarea
                    rows={4}
                    value={formData.infoDescription}
                    onChange={(e) => setFormData({ ...formData, infoDescription: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              <div className="p-4 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-sm font-semibold text-white">Scoring & Ranking Section</h3>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Scoring Title</label>
                  <input
                    type="text"
                    value={formData.scoringTitle}
                    onChange={(e) => setFormData({ ...formData, scoringTitle: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Scoring Description</label>
                  <textarea
                    rows={3}
                    value={formData.scoringDescription}
                    onChange={(e) => setFormData({ ...formData, scoringDescription: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ATHLETE AREA */}
          {activeTab === "athlete" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Live Results (URL)</label>
                <input
                  type="url"
                  value={formData.liveResultsUrl}
                  onChange={(e) => setFormData({ ...formData, liveResultsUrl: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Start List API (RaceResult URL)</label>
                <input
                  type="url"
                  value={formData.startListApiUrl}
                  onChange={(e) => setFormData({ ...formData, startListApiUrl: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Athlete / Race Guide (PDF)</label>
                <input
                  type="text"
                  value={formData.raceGuideLink}
                  onChange={(e) => setFormData({ ...formData, raceGuideLink: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Photo Gallery (URL)</label>
                <input
                  type="url"
                  value={formData.mediaPictureUrl}
                  onChange={(e) => setFormData({ ...formData, mediaPictureUrl: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Video Briefing (YouTube)</label>
                <input
                  type="url"
                  value={formData.videoBriefingUrl}
                  onChange={(e) => setFormData({ ...formData, videoBriefingUrl: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                />
              </div>
            </div>
          )}

          {/* TAB 5: SCHEDULE */}
          {activeTab === "schedule" && (
            <ScheduleEditor schedule={schedule} onChange={setSchedule} />
          )}

          {/* Form Actions */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/admin/events"
              className="text-xs text-gray-400 hover:text-white transition px-4 py-2"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition flex items-center space-x-2 shadow-lg shadow-red-600/30 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Updating in PostgreSQL...</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
