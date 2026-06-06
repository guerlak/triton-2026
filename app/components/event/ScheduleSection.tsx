"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, AlertCircle } from "lucide-react";
import Heading from "@/app/ui/Heading";
import { ScheduleDay, ScheduleEvent } from "@/eventdata";
interface ScheduleSectionProps {
  schedule: {
    title: string;
    subtitle: string;
    days: ScheduleDay[];
    importantNote: string;
  };
  language: "pt-BR" | "en";
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ schedule, language }) => {
  const [activeDay, setActiveDay] = useState<string>(
    schedule.days[0]?.id || "",
  );

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
          <Heading text1={language === "pt-BR" ? "programa" : "RACE SCHEDULE"} text2={language === "pt-BR" ? "FIQUE POR DENTRO DOS HORÁRIOS" : "Plan your weekend"} />
          <p className="text-gray-400 mx-auto text-lg">
            {language === "pt-BR" ? "Organize-se e não perca nenhum momento. Confira a programação completa do fim de semana de prova." : "Plan ahead and make the most of every moment. Explore the full schedule for an unforgettable TRITON race weekend."}
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl inline-flex border border-white/10 shadow-2xl relative overflow-hidden">
            {schedule.days.map((day) => (
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
                  <span className="text-[10px] opacity-60 font-bold">
                    {day.date}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Content */}
        <div>
          {schedule.days.map((day) =>
            activeDay === day.id ? (
              <motion.div
                key={day.id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-4xl mx-auto"
              >
                {/* <div className="mb-12 text-center md:text-left"></div> */}

                <motion.div
                  variants={itemVariants}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
                >
                  <div className="space-y-6">
                    {day.events.map((event, idx) => (
                      <div
                        key={`${day.id}-event-${idx}`}
                        className={`pb-6 ${idx !== day.events.length - 1 ? "border-b border-white/10" : ""}`}
                      >
                        {/* Time & Title Row */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3">
                            {!event.isCutoff && event.time && (
                              <div className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                                <Clock className="w-4 h-4 text-triton-red" />
                                <span>{event.time}</span>
                              </div>
                            )}
                          </div>
                          <h4 className="text-md md:text-md font-black uppercase tracking-wide text-white">
                            {event.title}
                          </h4>
                        </div>

                        {/* Description & Location */}
                        <div className="space-y-2">
                          {event.description && (
                            <p className="text-gray-400 text-sm">
                              {event.description}
                            </p>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Cutoff Details */}
                        {event.isCutoff && event.details && (
                          <div className="mt-4 grid grid-cols-3 gap-3">
                            {event.details.map((detail, dIdx) => (
                              <div
                                key={dIdx}
                                className="text-center p-3 rounded-lg bg-black/30"
                              >
                                <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">
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
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ) : null,
          )}
        </div>

        {/* Bottom Note */}
        <div className="mt-5 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-linear-to-r from-triton-dark to-triton-gray border border-white/5 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-triton-red/10 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6 text-triton-red" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed italic text-center md:text-left">
            {language === "pt-BR" ? (
              "Todos os horários estão sujeitos a alteração sem aviso prévio devido a circunstâncias imprevistas. Os horários e a ordem de largada também poderão ser ajustados. Recomendamos acompanhar a programação regularmente para se manter atualizado sobre possíveis mudanças de última hora."
            ) : (
              "All times are subject to change without notice due to unforeseen circumstances. Start times and order may also be adjusted. We recommend following the schedule regularly to stay updated on any last-minute changes."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
