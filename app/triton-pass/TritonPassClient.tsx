"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Rocket,
  Gift,
  ArrowRight,
  CheckCircle2,
  X,
  Smartphone,
  ChevronRight,
  Sparkles,
  Info,
  Clock,
  Award,
  Layers,
  Share2,
  Lock,
  Flame,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import atletaMobile from "@/public/images/atleta-mobile.png";
import atletaShop from "@/public/images/atleta-shop.png";
import diegoAvatar from "@/public/images/atletas/diego-fonseca.jpeg";
import tritonLogo from "@/public/images/triton-ws-branco.png";
import Navbar from "../components/Navbar";
import CustomNavbar from "../components/CustomNavbar";

export default function TritonPassClient() {
  const [activeCard, setActiveCard] = useState<"club" | "standard">("club");
  const [athleteName, setAthleteName] = useState("James Doe");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setSubmitted(true);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "TRITON Club Pass",
        text: "Race with freedom. 100% registration protection & athlete VIP benefits.",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const benefits = [
    {
      icon: ShieldCheck,
      title: "100% REGISTRATION PROTECTION",
      desc: "Cancel one eligible race per membership year within the applicable deadline and receive 100% of your eligible registration fee back.",
    },
    {
      icon: Calendar,
      title: "FREE DEFERRAL",
      desc: "Plans changed closer to race day? Defer an eligible registration under the applicable event conditions.",
    },
    {
      icon: Rocket,
      title: "PRIORITY REGISTRATION",
      desc: "Get privileged access to selected TRITON registrations and opening prices.",
    },
    {
      icon: Gift,
      title: "MEMBER BENEFITS",
      desc: "Access selected TRITON Store advantages, race-to-race promotions and exclusive offers.",
    },
  ];

  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-triton-red selection:text-white">
      {/* Top Banner / Motto */}

      <CustomNavbar


        actions={
          <>
            {/* Botão Terms & Conditions */}
            <Link
              href="/triton-pass/terms-condition"
              className="px-3 sm:px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5"
            >
              <FileText className="w-3 h-3 text-gray-400" />
              <span>Terms &amp; Conditions</span>
            </Link>
            {/* Botão CTA Buy Now */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3.5 sm:px-4 py-1.5 rounded-full bg-triton-red hover:bg-red-700 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md shadow-red-950/60 transition-all duration-200 flex items-center gap-1.5 active:scale-95 group"
            >

              <span>Buy Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </>
        }
      />


      {/* Hero Section matching reference image */}
      <section className="relative overflow-hidden py-8 pt-15 sm:pt-30 sm:py-12 md:py-20 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading, Benefits & Red Pricing Strip */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">

              {/* Badge & Trident */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-triton-red/20 border border-triton-red/40 flex items-center justify-center text-triton-red shrink-0 shadow-lg shadow-red-950/40">
                  <Flame className="w-5 h-5 fill-triton-red text-triton-red" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block">
                    Athlete Credential &amp; VIP Club
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-gray-400">
                    Official TRITON World Series Digital Pass
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-1 sm:space-y-2">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                  WANT MORE?
                </h2>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight break-words text-triton-red italic">
                  JOIN TRITON CLUB.
                </h1>
                <p className="text-xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-wide">
                  RACE WITH FREEDOM.
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-base md:text-lg text-gray-300 font-medium leading-relaxed max-w-xl">
                Upgrade to the <strong className="text-white">TRITON Club Pass</strong> for{" "}
                <span className="text-triton-red font-mono font-bold text-lg sm:text-xl">€39/year</span> and unlock
                additional athlete benefits:
              </p>

              {/* 4 Core Benefits with circular red outlined icons */}
              <div className="space-y-4 sm:space-y-5 pt-2">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-triton-red/30 transition-all duration-300"
                    >
                      {/* Circular Red Glowing Icon matching reference */}
                      <div className="relative shrink-0 w-13 h-13 sm:w-15 sm:h-15 rounded-full p-[2px] bg-gradient-to-b from-red-500 via-triton-red to-red-950 shadow-lg shadow-red-600/30 group-hover:scale-105 transition-all">
                        <div className="w-full h-full rounded-full border-2 border-neutral-950 bg-neutral-950/90 flex items-center justify-center p-2.5">
                          <Icon className="w-6 h-6 text-triton-red stroke-[2.2]" />
                        </div>
                        <span className="absolute -inset-1 rounded-full border border-red-500/20 pointer-events-none" />
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-black uppercase tracking-wide text-white group-hover:text-red-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Red Bottom Price & CTA Strip matching image exactly */}
              <div className="mt-4 sm:mt-6 bg-gradient-to-r from-[#df1f26] via-[#e52830] to-[#b3141b] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl shadow-red-950/70 border border-red-400/30 flex flex-col sm:flex-row items-center justify-between gap-5 text-white">
                <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                  {/* Price */}
                  <div className="shrink-0 flex items-baseline gap-1 sm:block">
                    <div className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
                      €39
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase opacity-90 mt-1">
                      / YEAR
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-12 w-px bg-white/30 hidden sm:block" />

                  {/* Mantras */}
                  <div className="text-left font-black uppercase text-[11px] sm:text-xs tracking-wider leading-snug">
                    <div className="text-white drop-shadow-sm">REGISTER EARLIER.</div>
                    <div className="text-white drop-shadow-sm">RACE WITH CONFIDENCE.</div>
                    <div className="text-white/95 drop-shadow-sm">RACE WITH FREEDOM.</div>
                  </div>
                </div>

                {/* White CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto shrink-0 bg-white hover:bg-gray-100 text-triton-red font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
                >
                  <span>COMING IN NOVEMBER</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Right Column: Interactive Phone & Digital Wallet Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">

              {/* Triathlete atmospheric finisher background image */}
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] flex items-center justify-center">

                {/* Finisher Glow & Background Silhouette */}
                <div className="absolute -inset-6 sm:-inset-10 rounded-[54px] bg-gradient-to-b from-triton-red/30 via-red-900/15 to-transparent blur-3xl -z-10" />

                {/* Background Athlete image behind the phone */}
                <div className="absolute -top-10 -right-6 w-64 h-80 sm:w-80 sm:h-96 opacity-35 mix-blend-screen pointer-events-none -z-10 overflow-hidden">
                  <Image
                    src={atletaShop}
                    alt="Finisher TRITON Athlete"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80" />
                </div>

                {/* Peeking Black Pass in background */}
                <div
                  onClick={() => setActiveCard("standard")}
                  className={`cursor-pointer absolute top-2 right-[-10px] sm:right-[-20px] w-[280px] sm:w-[320px] h-[480px] sm:h-[520px] rounded-[44px] bg-neutral-900 border border-white/10 p-5 flex flex-col justify-between shadow-2xl transition-all duration-500 transform rotate-6 hover:rotate-8 opacity-75 hover:opacity-90 scale-95 ${activeCard === "standard" ? "z-20 scale-100 opacity-100 !rotate-0 !translate-x-0" : "z-0"
                    }`}
                >
                  {/* Mock Pass Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center text-[10px] font-black text-white">
                        LOGO
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-white">
                        TRITON WORLD SERIES
                      </span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                      CLUB PASS
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-gray-500">ATHLETE</span>
                    <div className="text-base font-bold text-white">{athleteName} ss</div>
                  </div>

                  {/* QR Preview */}
                  <div className="bg-white p-3 rounded-2xl self-center shadow-inner">
                    <div className="w-28 h-28 bg-neutral-950 rounded flex items-center justify-center p-1">
                      <div className="w-full h-full border-2 border-dashed border-white/40 flex items-center justify-center text-[11px] font-mono text-white/70">
                        QR PASS
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-[9px] uppercase tracking-wider text-gray-500">
                    Standard Free Credential
                  </div>
                </div>

                {/* Main Foreground iPhone 16 Pro Mockup */}
                <div
                  className={`relative z-10 w-[310px] sm:w-[340px] rounded-[52px] bg-black p-3.5 shadow-2xl border-4 border-neutral-800 ring-1 ring-white/10 transition-all duration-500 ${activeCard === "club" ? "scale-100 rotate-0" : "scale-95 opacity-80 -rotate-3"
                    }`}
                >
                  {/* iPhone Bezel Elements */}
                  {/* Dynamic Island */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5 border border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                    <div className="w-2 h-2 rounded-full bg-blue-950/80" />
                  </div>

                  {/* Screen Outer */}
                  <div className="relative rounded-[40px] overflow-hidden bg-neutral-950 border border-white/10 flex flex-col">

                    {/* Status Bar */}
                    <div className="h-10 px-6 pt-3 flex items-center justify-between text-[11px] font-medium text-white/90 z-20">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span>5G</span>
                        <div className="w-4 h-2.5 rounded-sm border border-white/80 p-0.5 flex items-center">
                          <div className="w-2 h-1.5 bg-white rounded-xs" />
                        </div>
                      </div>
                    </div>

                    {/* Apple Wallet Navigation */}
                    <div className="px-4 py-2 flex items-center justify-between border-b border-white/10 text-xs">
                      <button
                        onClick={() => setActiveCard(activeCard === "club" ? "standard" : "club")}
                        className="text-blue-400 font-semibold text-xs hover:underline flex items-center gap-0.5"
                      >
                        Done
                      </button>
                      <div className="flex items-center gap-3 text-white/70">
                        <button
                          onClick={handleShare}
                          title="Share"
                          className="hover:text-white transition-colors"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center text-[10px]">
                          •••
                        </div>
                      </div>
                    </div>

                    {/* Wallet Card Body */}
                    <div
                      className={`p-4 sm:p-5 flex flex-col justify-between min-h-[460px] sm:min-h-[490px] transition-colors duration-500 relative overflow-hidden ${activeCard === "club"
                        ? "bg-gradient-to-b from-[#e52830] via-[#df1f26] to-[#991016] text-white"
                        : "bg-gradient-to-b from-neutral-800 via-neutral-900 to-black text-white"
                        }`}
                    >
                      {/* Decorative watermark trident in background */}
                      <div className="absolute -right-8 -top-8 w-44 h-44 opacity-15 pointer-events-none">
                        <div className="w-full h-full border-[12px] border-white rounded-full" />
                      </div>

                      {/* Card Header */}
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-white flex items-center justify-center shadow-md">
                            <span className="text-triton-red font-black text-xs">LOGO</span>
                          </div>
                          <div>
                            <span className="text-[11px] font-black uppercase tracking-wider block leading-none">
                              TRITON
                            </span>
                            <span className="text-[8px] font-bold tracking-[0.2em] text-white/80 uppercase">
                              WORLD SERIES
                            </span>
                          </div>
                        </div>

                        <span
                          className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${activeCard === "club"
                            ? "bg-black/25 border-white/30 text-white"
                            : "bg-triton-red/30 border-triton-red text-white"
                            }`}
                        >
                          {activeCard === "club" ? "CLUB PASS" : "ATHLETE PASS"}
                        </span>
                      </div>

                      {/* Athlete Info & Photo */}
                      <div className="flex items-center justify-between my-3 relative z-10">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-white/70 block">
                            ATHLETE
                          </span>
                          <h4 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white drop-shadow-sm">
                            {athleteName}
                          </h4>
                          <span className="text-[9px] font-mono text-white/80 tracking-wider">
                            ID: #TR-2026-VIP
                          </span>
                        </div>

                        {/* Athlete Avatar */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-white/50 shadow-lg relative shrink-0">
                          <Image
                            src={diegoAvatar}
                            alt="Athlete Finisher"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Metadata Row: Member Since & Status */}
                      <div className="grid grid-cols-2 gap-3 py-2 border-t border-b border-white/20 relative z-10 text-left">
                        <div>
                          <span className="text-[8px] font-bold uppercase tracking-widest text-white/70 block">
                            MEMBER SINCE
                          </span>
                          <span className="text-xs font-mono font-bold text-white">
                            Jan 2026
                          </span>
                        </div>
                        <div>
                          <span className="text-[8px] font-bold uppercase tracking-widest text-white/70 block">
                            MEMBERSHIP
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-mono font-bold text-white uppercase">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* QR Code Section */}
                      <div className="flex flex-col items-center justify-center my-3 relative z-10">
                        <div className="bg-white p-3 rounded-2xl shadow-xl flex flex-col items-center">
                          {/* SVG QR Code Simulation with Triton Trident Centerpiece */}
                          <div className="relative w-32 h-32 sm:w-36 sm:h-36 bg-white flex items-center justify-center">
                            {/* SVG Pattern */}
                            <svg
                              viewBox="0 0 100 100"
                              className="w-full h-full fill-neutral-950"
                            >
                              {/* Corner Squares */}
                              <rect x="5" y="5" width="22" height="22" rx="3" />
                              <rect x="9" y="9" width="14" height="14" fill="white" />
                              <rect x="12" y="12" width="8" height="8" />

                              <rect x="73" y="5" width="22" height="22" rx="3" />
                              <rect x="77" y="9" width="14" height="14" fill="white" />
                              <rect x="80" y="12" width="8" height="8" />

                              <rect x="5" y="73" width="22" height="22" rx="3" />
                              <rect x="9" y="77" width="14" height="14" fill="white" />
                              <rect x="12" y="80" width="8" height="8" />

                              {/* Matrix Data dots */}
                              <rect x="32" y="8" width="5" height="5" />
                              <rect x="42" y="8" width="5" height="5" />
                              <rect x="52" y="8" width="5" height="5" />
                              <rect x="62" y="8" width="5" height="5" />
                              <rect x="32" y="18" width="5" height="5" />
                              <rect x="47" y="18" width="5" height="5" />
                              <rect x="62" y="18" width="5" height="5" />

                              <rect x="8" y="32" width="5" height="5" />
                              <rect x="18" y="32" width="5" height="5" />
                              <rect x="8" y="42" width="5" height="5" />
                              <rect x="18" y="52" width="5" height="5" />

                              <rect x="32" y="32" width="6" height="6" />
                              <rect x="62" y="32" width="6" height="6" />
                              <rect x="42" y="42" width="16" height="16" fill="white" />

                              <rect x="75" y="32" width="5" height="5" />
                              <rect x="85" y="42" width="5" height="5" />
                              <rect x="75" y="52" width="5" height="5" />
                              <rect x="85" y="62" width="5" height="5" />

                              <rect x="32" y="65" width="5" height="5" />
                              <rect x="45" y="65" width="5" height="5" />
                              <rect x="58" y="65" width="5" height="5" />
                              <rect x="32" y="75" width="5" height="5" />
                              <rect x="45" y="85" width="5" height="5" />
                              <rect x="58" y="85" width="5" height="5" />
                            </svg>

                            {/* Center Trident Badge */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-7 h-7 rounded-lg bg-triton-red text-white flex items-center justify-center font-black text-xs shadow-md">
                                logo
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Terms link at bottom of card, exactly as in image */}
                        <Link
                          href="/triton-pass/terms-condition"
                          className="mt-3 text-[10px] text-white/80 hover:text-white underline underline-offset-2 transition-colors font-sans tracking-wide"
                        >
                          terms &amp; conditions
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Pass Switcher Tabs */}
              <div className="mt-6 flex items-center gap-2 bg-neutral-900 border border-white/10 p-1.5 rounded-full shadow-lg">
                <button
                  onClick={() => setActiveCard("club")}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${activeCard === "club"
                    ? "bg-triton-red text-white shadow-md shadow-red-950/60"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>TRITON Club Pass (€39)</span>
                </button>
                <button
                  onClick={() => setActiveCard("standard")}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${activeCard === "standard"
                    ? "bg-white text-black shadow-md"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Standard Pass (Free)</span>
                </button>
              </div>

              {/* Digital Wallet Badges */}
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300">
                  <span className="text-white font-bold"></span> Apple Wallet
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300">
                  <span className="text-emerald-400 font-bold">G</span> Google Wallet
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* How it Works / 3 Easy Steps */}
      <section className="py-8 sm:py-12 md:py-20 border-b border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left md:text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block mb-2">
              Simple. Instant. 100% Digital.
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight text-white">
              HOW TRITON PASS WORKS
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-400 mt-3">
              Carry your athlete identity in your pocket. No plastic cards, no paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-triton-red/40 transition-all duration-300">
              <div className="text-5xl sm:text-6xl font-black text-white/10 mb-4 group-hover:text-triton-red/20 transition-colors">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-2">
                Join or Register
              </h3>
              <p className="text-xs sm:text-base text-gray-400 leading-relaxed">
                Register for any TRITON event to receive your free TRITON Pass, or upgrade to the TRITON Club Pass for €39/year to unlock 100% registration protection.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-triton-red/40 transition-all duration-300">
              <div className="text-5xl sm:text-6xl font-black text-white/10 mb-4 group-hover:text-triton-red/20 transition-colors">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-2">
                1-Tap to Wallet
              </h3>
              <p className="text-xs sm:text-base text-gray-400 leading-relaxed">
                Add your pass directly to Apple Wallet or Google Wallet. Receive instant race updates, course changes, and priority notifications right on your lock screen.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-triton-red/40 transition-all duration-300">
              <div className="text-5xl sm:text-6xl font-black text-white/10 mb-4 group-hover:text-triton-red/20 transition-colors">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-2">
                Race with Freedom
              </h3>
              <p className="text-xs sm:text-base text-gray-400 leading-relaxed">
                Scan your QR code at athlete check-in for express kit pick-up. Cancel up to 7 days before race day for 100% refund, or defer up to 48 hours with zero hassle.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Comparison Matrix: Free TRITON Pass vs TRITON Club Pass */}
      <section className="py-8 sm:py-12 md:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left md:text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block mb-2">
              Membership Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight text-white">
              CHOOSE YOUR TIER
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-400 mt-3">
              Every athlete gets a free digital pass. Upgrading to Club Pass gives you the ultimate security and freedom.
            </p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/60">
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-black uppercase tracking-wider text-gray-400">
                    Feature &amp; Benefit
                  </th>
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-center whitespace-nowrap">
                    <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      TRITON Pass
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase mt-0.5">
                      Free Standard
                    </div>
                  </th>
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-center bg-triton-red/15 border-l border-r border-triton-red/30 whitespace-nowrap">
                    <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-white flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-triton-red" />
                      TRITON Club Pass
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-bold text-triton-red uppercase mt-0.5">
                      €39 / year
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">

                <tr>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-white">
                    Digital Athlete Credential (Apple &amp; Google Wallet)
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 mx-auto" />
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center bg-triton-red/10 border-l border-r border-triton-red/20 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 mx-auto text-triton-red" />
                  </td>
                </tr>

                <tr>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-white">
                    Permanent TRITON Athlete ID &amp; Profile
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 mx-auto" />
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center bg-triton-red/10 border-l border-r border-triton-red/20 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 mx-auto text-triton-red" />
                  </td>
                </tr>

                <tr>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-white">
                    Direct Race Operational Alerts &amp; Updates
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 mx-auto" />
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center bg-triton-red/10 border-l border-r border-triton-red/20 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 mx-auto text-triton-red" />
                  </td>
                </tr>

                {/* Exclusive Club Benefits */}
                <tr className="bg-triton-red/5">
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-triton-red shrink-0" />
                      <span>100% Registration Protection (1 eligible race/year)</span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">
                      Cancel up to 7 days before race. No medical certificate or justification required.
                    </p>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center text-gray-600">
                    —
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center bg-triton-red/15 border-l border-r border-triton-red/30 text-white font-mono font-bold">
                    100% Refund
                  </td>
                </tr>

                <tr className="bg-triton-red/5">
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-white">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-triton-red shrink-0" />
                      <span>Free Deferral (Up to 48 hours before start)</span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">
                      Missed the cancellation window? Defer your entry to the next edition without fee.
                    </p>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center text-gray-600">
                    —
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center bg-triton-red/15 border-l border-r border-triton-red/30 text-white font-mono font-bold">
                    Free
                  </td>
                </tr>

                <tr className="bg-triton-red/5">
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-white">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-triton-red shrink-0" />
                      <span>Priority Registration &amp; Opening Prices</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center text-gray-600">
                    —
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center bg-triton-red/15 border-l border-r border-triton-red/30 text-emerald-400 font-bold">
                    Included
                  </td>
                </tr>

                <tr className="bg-triton-red/5">
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-white">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-triton-red shrink-0" />
                      <span>TRITON Official Store Discounts &amp; Partner Perks</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center text-gray-600">
                    —
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center bg-triton-red/15 border-l border-r border-triton-red/30 text-emerald-400 font-bold">
                    Included
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Quick Notice under table */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-500 gap-2">
            <span>* Registration Protection and Deferral are subject to official conditions.</span>
            <Link
              href="/triton-pass/terms-condition"
              className="text-triton-red hover:underline font-bold flex items-center gap-1"
            >
              Read complete Terms &amp; Conditions <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Guarantee & Freedom Section */}
      <section className="py-8 sm:py-12 md:py-20 border-b border-white/5 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-triton-red/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red">
                  Zero Questions Asked Guarantee
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight text-white">
                  WHY RACE WITH FREEDOM?
                </h2>
                <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans">
                  Injuries, work trips, family plans—life happens. We believe no athlete should lose their hard-earned money when life gets in the way of race day.
                </p>
                <div className="pt-2 space-y-3 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-triton-red shrink-0" />
                    <span>Cancel up to <strong>7 calendar days</strong> before race start for 100% money back.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-triton-red shrink-0" />
                    <span>Free deferral up to <strong>48 hours</strong> before race start.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-triton-red shrink-0" />
                    <span>No medical doctor certificate or personal justification requested.</span>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-triton-red/20 border border-triton-red/50 flex items-center justify-center text-triton-red">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                  TRITON CLUB PASS 2026
                </h3>
                <div className="text-3xl sm:text-4xl font-mono font-black text-triton-red">
                  €39 <span className="text-xs uppercase text-gray-400 font-sans tracking-widest">/ YEAR</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Launches November 2026. Be the first to secure your membership with inaugural member benefits.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-triton-red hover:bg-red-700 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-red-950/50 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span>JOIN WAITLIST — GET NOTIFIED</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="py-8 sm:py-12 md:py-20 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left md:text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block mb-2">
              Questions &amp; Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight text-white">
              FREQUENTLY ASKED
            </h2>
          </div>

          <div className="space-y-4">

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-sm sm:text-base font-black uppercase text-white">
                How does 100% Registration Protection work?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                As an active TRITON Club member, you can cancel one eligible race registration per annual membership period and receive 100% of your registration fee back. Simply send an email to triton@tritonworldseries.com at least 7 days before the race.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-sm sm:text-base font-black uppercase text-white">
                What if I need to cancel less than 7 days before the race?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                If the 7-day cancellation window has passed, you can still request a Free Deferral up to 48 hours prior to race start. Your entry will be transferred to the next edition of the event without any deferral fee.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-sm sm:text-base font-black uppercase text-white">
                How is the pass delivered to my phone?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                Once activated, you will receive an instant link via email and on your athlete profile. With a single tap, the pass is added to your native Apple Wallet (iOS) or Google Wallet (Android). No separate app download is needed.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-sm sm:text-base font-black uppercase text-white">
                Can I transfer my TRITON Club Pass to a friend?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                No. The TRITON Pass and TRITON Club Pass are strictly personal and non-transferable, tied directly to your TRITON Athlete ID and name.
              </p>
            </div>

          </div>

          {/* Complete Legal Documentation CTA */}
          <div className="mt-8 sm:mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <p className="text-xs sm:text-sm text-gray-400 mb-3">
              Need comprehensive details on policy coverage, refund procedures, and LRH relations?
            </p>
            <Link
              href="/triton-pass/terms-condition"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all"
            >
              <span>View Full Terms &amp; Conditions (25 Articles)</span>
              <ChevronRight className="w-4 h-4 text-triton-red" />
            </Link>
          </div>

        </div>
      </section>

      {/* Early Access / Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-neutral-900 border border-white/15 p-6 sm:p-8 shadow-2xl text-white">

            <button
              onClick={() => {
                setIsModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-triton-red/20 border border-triton-red/40 flex items-center justify-center text-triton-red mb-2">
                  <Sparkles className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-triton-red">
                    Early Access • November 2026
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    JOIN TRITON CLUB WAITLIST
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Be the first in line when TRITON Club Pass launches for €39/year. Get exclusive inaugural access and benefits.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                      Athlete Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. James Doe"
                      value={athleteName}
                      onChange={(e) => setAthleteName(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-triton-red font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="athlete@example.com"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-triton-red font-sans"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-triton-red hover:bg-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-red-950/60 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>NOTIFY ME AT LAUNCH</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-gray-500 text-center font-mono pt-1">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white">
                  YOU&apos;RE ON THE LIST!
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Thank you, <strong>{athleteName || "Athlete"}</strong>. We&apos;ve reserved your priority spot for TRITON Club Pass launch in November. Check your inbox soon!
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="w-full bg-white text-black font-black text-xs uppercase tracking-wider py-3 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  DONE
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Share notification toast */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-triton-red text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-triton-red" />
          <span>Link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
