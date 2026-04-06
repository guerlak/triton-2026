"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, AlertCircle, Calendar, ChevronRight } from "lucide-react";
import data from "../../../dictionaries/en.json";
import Heading from "@/app/ui/Heading";

interface EventDetail {
  label: string;
  value: string;
}

interface ScheduleEvent {
  time?: string;
  title: string;
  description?: string;
  location?: string;
  isCutoff?: boolean;
  details?: EventDetail[];
}

interface ScheduleDay {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  events: ScheduleEvent[];
}

const ScheduleSection: React.FC = () => {
  const scheduleData = data.schedule_section;
  const [activeDay, setActiveDay] = useState<string>(scheduleData.days[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="schedule" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <Heading text1={scheduleData.title} text2={scheduleData.subtitle} />
          <p className="text-gray-400 mx-auto text-lg">
            Stay organized and don&apos;t miss a beat. Here is the full schedule for the race weekend.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl inline-flex border border-white/10 shadow-2xl relative overflow-hidden">
            {scheduleData.days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`relative px-6 md:px-10 py-3 md:py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 z-10 ${activeDay === day.id ? "text-white" : "text-gray-500 hover:text-white"}`}
              >
                {activeDay === day.id && (
                  <motion.div
                    layoutId="activeTabSchedule"
                    className="absolute inset-0 bg-triton-red rounded-xl shadow-[0_0_30px_rgba(223,31,38,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-20 flex flex-col items-center">
                  <span className="text-xs md:text-sm">{day.title}</span>
                  <span className="text-[10px] opacity-60 font-bold">{day.date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Content */}
        <AnimatePresence mode="wait">
          {scheduleData.days.map((day) =>
            activeDay === day.id ? (
              <motion.div
                key={day.id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-4xl mx-auto"
              >
                <div className="mb-12 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-triton-red uppercase">
                    {day.subtitle}
                  </h3>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, idx) => (
                    <motion.div
                      key={`${day.id}-event-${idx}`}
                      variants={itemVariants}
                      className={`group relative grid grid-cols-1 md:grid-cols-[180px,1fr] gap-4 md:gap-8 p-6 rounded-2xl border transition-all duration-300 ${event.isCutoff
                        ? "bg-triton-red/5 border-triton-red/20"
                        : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                        }`}
                    >
                      {/* Time Column */}
                      <div className="flex flex-col justify-center">
                        {event.isCutoff ? (
                          <div className="flex items-center gap-2 text-triton-red font-black uppercase text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>Cut-off</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                            <Clock className="w-4 h-4 text-triton-red" />
                            <span>{event.time}</span>
                          </div>
                        )}
                      </div>

                      {/* Content Column */}
                      <div className="flex flex-col gap-2">
                        <h4 className={`text-xl font-black uppercase ${event.isCutoff ? "text-triton-red" : "text-white"
                          }`}>
                          {event.title}
                        </h4>

                        {event.description && (
                          <p className="text-gray-400 text-sm">{event.description}</p>
                        )}

                        {event.location && (
                          <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                        )}

                        {event.isCutoff && event.details && (
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            {event.details.map((detail, dIdx) => (
                              <div
                                key={dIdx}
                                className="bg-black/40 rounded-lg p-3 border border-triton-red/10"
                              >
                                <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">
                                  {detail.label}
                                </div>
                                <div className="text-sm font-black text-white">
                                  {detail.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-linear-to-r from-triton-dark to-triton-gray border border-white/5 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-triton-red/10 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6 text-triton-red" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed italic text-center md:text-left">
            {scheduleData.important_note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
