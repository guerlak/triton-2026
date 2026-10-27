"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import tritonLogo from "@/public/images/triton-ws-logo-01.png";

export interface CustomNavItem {
  name: string;
  href: string;
  external?: boolean;
  active?: boolean;
}

export interface CustomNavbarProps {
  /**
   * Navegação principal (links)
   */
  links?: CustomNavItem[];
  /**
   * Botões de ação no canto direito (ex: Buy Now, Terms & Conditions)
   */
  actions?: React.ReactNode;
  /**
   * Badge ou texto secundário ao lado do logo (ex: "TRITON PASS")
   */
  badge?: string;
  /**
   * Texto de lema ou status (ex: "BE EAGER. BE BRAVE. BE STRONG.")
   */
  tagline?: string;
  /**
   * Destino do clique no logo (padrão: "/")
   */
  logoHref?: string;
  /**
   * Estilo visual da barra
   */
  variant?: "blur" | "solid" | "transparent";
  /**
   * Classes extras para o container
   */
  className?: string;
}

export default function CustomNavbar({
  links = [],
  actions,
  badge,
  tagline,
  logoHref = "/",
  variant = "blur",
  className = "",
}: CustomNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBgClass = () => {
    if (variant === "solid") return "bg-neutral-950 border-white/10";
    if (variant === "transparent" && !isScrolled && !isOpen)
      return "bg-transparent border-transparent";
    return isScrolled || isOpen
      ? "bg-black/95 backdrop-blur-md border-white/10 py-3"
      : "bg-black/70 backdrop-blur-sm border-white/5 py-4";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${getBgClass()} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Lado Esquerdo: Logo + Badge opcional */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href={logoHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 active:scale-95 transition-transform"
            >
              <Image
                src={tritonLogo}
                alt="TRITON World Series"
                width={120}
                height={48}
                priority
                className="w-auto h-9 sm:h-11 object-contain"
              />
            </Link>

            {badge && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-triton-red/20 text-triton-red border border-triton-red/30">
                {badge}
              </span>
            )}
          </div>

          {/* Centro: Links de Navegação (Desktop) */}
          {links.length > 0 && (
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {links.map((item) => {
                const isExternal = item.external || item.href.startsWith("http");
                if (isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-black uppercase tracking-[0.15em] px-3.5 py-2 rounded-lg transition-all ${
                        item.active
                          ? "text-triton-red bg-triton-red/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xs font-black uppercase tracking-[0.15em] px-3.5 py-2 rounded-lg transition-all ${
                      item.active
                        ? "text-triton-red bg-triton-red/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Lado Direito: Tagline + Ações (Botões) + Toggle Mobile */}
          <div className="flex items-center gap-3 shrink-0">
            {tagline && (
              <span className="text-gray-500 font-mono text-[11px] font-bold uppercase tracking-widest hidden xl:inline">
                {tagline}
              </span>
            )}

            {/* Ações customizadas passadas via props */}
            {actions && (
              <div className="flex items-center gap-2 sm:gap-3">
                {actions}
              </div>
            )}

            {/* Botão Hamburger (Mobile) se houver links */}
            {links.length > 0 && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {links.length > 0 && (
        <div
          className={`lg:hidden fixed inset-0 top-[65px] bg-black/98 backdrop-blur-2xl transition-all duration-300 overflow-y-auto ${
            isOpen ? "opacity-100 pointer-events-auto h-screen" : "opacity-0 pointer-events-none h-0"
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-5 items-center text-center">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-black uppercase tracking-wider py-2 transition-colors ${
                  item.active ? "text-triton-red" : "text-white hover:text-triton-red"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {actions && (
              <div className="pt-6 border-t border-white/10 flex flex-col gap-3 w-full max-w-xs items-center">
                {actions}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
