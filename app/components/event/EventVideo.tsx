"use client";

import * as motion from "framer-motion/client";
import { Play, Youtube } from "lucide-react";

interface EventVideoProps {
  videoBriefingUrl?: string;
  videoUrl?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

/**
 * Utility function to parse YouTube URLs into embeddable URLs.
 * Supports standard watch URLs, short URLs, embed URLs, and raw video IDs.
 */
function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;

  // Handles standard embed URL
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  // Regex pattern for extracting YouTube video ID
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  const videoId = match && match[2].length === 11 ? match[2] : url.length === 11 ? url : null;

  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;
}

export default function EventVideo({
  videoBriefingUrl,
  videoUrl,
  title = "Technical Briefing",
  subtitle = "Official Video Briefing",
  description = "Watch the official race briefing and technical guidelines for the event.",
}: EventVideoProps) {
  const urlToUse = videoBriefingUrl || videoUrl;
  const embedUrl = getYouTubeEmbedUrl(urlToUse);

  if (!embedUrl) {
    return null;
  }

  return (
    <section id="technical-briefing" className="relative py-8 sm:py-12 md:py-20 bg-black overflow-hidden border-t border-b border-white/10 scroll-mt-20">
      <div id="event-video" className="sr-only" />
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-triton-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2 mb-6 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 text-triton-red">
            <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
            <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-triton-red" />
            <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-base md:text-lg text-gray-400 max-w-xl italic"
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative group rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl"
        >
          {/* Subtle Outer Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-triton-red/30 via-red-600/40 to-triton-red/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-700 pointer-events-none" />

          {/* Player Wrapper */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-950 border border-white/10 shadow-inner">
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
