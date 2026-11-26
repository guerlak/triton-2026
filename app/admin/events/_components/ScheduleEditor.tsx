"use client";

import { Plus, Trash2, Clock } from "lucide-react";
import { ScheduleDay, ScheduleEvent } from "@/eventdata";

export interface ScheduleFormState {
  title: string;
  subtitle: string;
  importantNote: string;
  days: ScheduleDay[];
}

interface ScheduleEditorProps {
  schedule: ScheduleFormState;
  onChange: (next: ScheduleFormState) => void;
}

export default function ScheduleEditor({ schedule, onChange }: ScheduleEditorProps) {
  const addDay = () => {
    const nextIndex = schedule.days.length + 1;
    const newDay: ScheduleDay = {
      id: `day-${nextIndex}`,
      date: "",
      title: "",
      subtitle: "",
      events: [],
    };
    onChange({ ...schedule, days: [...schedule.days, newDay] });
  };

  const updateDay = (dayIdx: number, patch: Partial<ScheduleDay>) => {
    const days = schedule.days.map((d, i) => (i === dayIdx ? { ...d, ...patch } : d));
    onChange({ ...schedule, days });
  };

  const removeDay = (dayIdx: number) => {
    const days = schedule.days.filter((_, i) => i !== dayIdx);
    onChange({ ...schedule, days });
  };

  const addActivity = (dayIdx: number) => {
    const newEvent: ScheduleEvent = {
      time: "",
      title: "",
      description: "",
      location: "",
      isCutoff: false,
      details: [],
    };
    const days = schedule.days.map((d, i) =>
      i === dayIdx ? { ...d, events: [...d.events, newEvent] } : d
    );
    onChange({ ...schedule, days });
  };

  const updateActivity = (dayIdx: number, evIdx: number, patch: Partial<ScheduleEvent>) => {
    const days = schedule.days.map((d, i) => {
      if (i !== dayIdx) return d;
      return {
        ...d,
        events: d.events.map((ev, j) => (j === evIdx ? { ...ev, ...patch } : ev)),
      };
    });
    onChange({ ...schedule, days });
  };

  const removeActivity = (dayIdx: number, evIdx: number) => {
    const days = schedule.days.map((d, i) => {
      if (i !== dayIdx) return d;
      return { ...d, events: d.events.filter((_, j) => j !== evIdx) };
    });
    onChange({ ...schedule, days });
  };

  const addDetail = (dayIdx: number, evIdx: number) => {
    const ev = schedule.days[dayIdx]?.events[evIdx];
    const details = [...(ev?.details || []), { label: "", value: "" }];
    updateActivity(dayIdx, evIdx, { details });
  };

  const updateDetail = (
    dayIdx: number,
    evIdx: number,
    detIdx: number,
    patch: { label?: string; value?: string }
  ) => {
    const ev = schedule.days[dayIdx]?.events[evIdx];
    const details = (ev?.details || []).map((det, k) =>
      k === detIdx ? { ...det, ...patch } : det
    );
    updateActivity(dayIdx, evIdx, { details });
  };

  const removeDetail = (dayIdx: number, evIdx: number, detIdx: number) => {
    const ev = schedule.days[dayIdx]?.events[evIdx];
    const details = (ev?.details || []).filter((_, k) => k !== detIdx);
    updateActivity(dayIdx, evIdx, { details });
  };

  return (
    <div className="space-y-6">
      {/* Schedule Header */}
      <div className="p-4 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
        <h3 className="text-sm font-semibold text-white">Schedule Header</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Schedule Title
            </label>
            <input
              type="text"
              value={schedule.title}
              onChange={(e) => onChange({ ...schedule, title: e.target.value })}
              placeholder="e.g. Official Schedule"
              className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Schedule Subtitle
            </label>
            <input
              type="text"
              value={schedule.subtitle}
              onChange={(e) => onChange({ ...schedule, subtitle: e.target.value })}
              placeholder="e.g. Race Week Timeline"
              className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            Important Note
          </label>
          <textarea
            rows={2}
            value={schedule.importantNote}
            onChange={(e) => onChange({ ...schedule, importantNote: e.target.value })}
            placeholder="e.g. Schedule subject to change due to weather conditions."
            className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
          />
        </div>
      </div>

      {/* Days List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Schedule Days</h3>
            <p className="text-xs text-gray-400">
              Add each race or event day and its timed activities.
            </p>
          </div>
          <button
            type="button"
            onClick={addDay}
            className="inline-flex items-center space-x-1.5 bg-[#df1f26] hover:bg-red-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Day</span>
          </button>
        </div>

        {schedule.days.length === 0 ? (
          <div className="p-8 text-center border border-dashed border-white/10 rounded-2xl bg-[#171717]/50">
            <Clock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <p className="text-xs text-gray-400">
              No schedule days added yet. Click &quot;Add Day&quot; to start.
            </p>
          </div>
        ) : (
          schedule.days.map((day, dayIdx) => (
            <div
              key={dayIdx}
              className="p-4 bg-[#171717] border border-white/10 rounded-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#df1f26]">
                  Day {dayIdx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeDay(dayIdx)}
                  className="inline-flex items-center space-x-1 text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded hover:bg-red-500/10 transition"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Day</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Date <span className="text-zinc-500">(e.g. Aug 21)</span>
                  </label>
                  <input
                    type="text"
                    value={day.date}
                    onChange={(e) => updateDay(dayIdx, { date: e.target.value })}
                    placeholder="Aug 21"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Day Title <span className="text-zinc-500">(e.g. Friday)</span>
                  </label>
                  <input
                    type="text"
                    value={day.title}
                    onChange={(e) => updateDay(dayIdx, { title: e.target.value })}
                    placeholder="Friday"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Day Subtitle <span className="text-zinc-500">(e.g. RACE DAY 1 - THE SWIM)</span>
                  </label>
                  <input
                    type="text"
                    value={day.subtitle}
                    onChange={(e) => updateDay(dayIdx, { subtitle: e.target.value })}
                    placeholder="RACE DAY 1 - THE SWIM"
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
                  />
                </div>
              </div>

              {/* Activities inside this day */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300">
                    Activities ({day.events.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => addActivity(dayIdx)}
                    className="inline-flex items-center space-x-1 text-xs bg-white/5 hover:bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-lg transition"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#df1f26]" />
                    <span>Add Activity</span>
                  </button>
                </div>

                {day.events.map((ev, evIdx) => (
                  <div
                    key={evIdx}
                    className="p-3.5 bg-[#121212] border border-white/10 rounded-xl space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Activity #{evIdx + 1}
                      </span>
                      <div className="flex items-center space-x-3">
                        <label className="inline-flex items-center space-x-1.5 text-xs text-gray-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={Boolean(ev.isCutoff)}
                            onChange={(e) =>
                              updateActivity(dayIdx, evIdx, { isCutoff: e.target.checked })
                            }
                            className="accent-[#df1f26] rounded"
                          />
                          <span>Cutoff</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => removeActivity(dayIdx, evIdx)}
                          className="text-xs text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-500/10 transition"
                          title="Remove activity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] text-gray-400 mb-1">
                          Time <span className="text-zinc-500">(e.g. 15:30)</span>
                        </label>
                        <input
                          type="text"
                          value={ev.time || ""}
                          onChange={(e) =>
                            updateActivity(dayIdx, evIdx, { time: e.target.value })
                          }
                          placeholder="06:00 – 07:30"
                          className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#df1f26] transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-gray-400 mb-1">
                          Activity Title
                        </label>
                        <input
                          type="text"
                          value={ev.title}
                          onChange={(e) =>
                            updateActivity(dayIdx, evIdx, { title: e.target.value })
                          }
                          placeholder="Swim Start"
                          className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#df1f26] transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-gray-400 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          value={ev.location || ""}
                          onChange={(e) =>
                            updateActivity(dayIdx, evIdx, { location: e.target.value })
                          }
                          placeholder="Transition Zone"
                          className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#df1f26] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-gray-400 mb-1">
                        Description
                      </label>
                      <input
                        type="text"
                        value={ev.description || ""}
                        onChange={(e) =>
                          updateActivity(dayIdx, evIdx, { description: e.target.value })
                        }
                        placeholder="Optional details about this activity..."
                        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#df1f26] transition"
                      />
                    </div>

                    {/* Optional key-value details */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-gray-400">
                          Extra Details (label / value)
                        </span>
                        <button
                          type="button"
                          onClick={() => addDetail(dayIdx, evIdx)}
                          className="text-[11px] text-[#df1f26] hover:underline"
                        >
                          + Add Detail
                        </button>
                      </div>

                      {(ev.details || []).map((det, detIdx) => (
                        <div key={detIdx} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={det.label}
                            onChange={(e) =>
                              updateDetail(dayIdx, evIdx, detIdx, { label: e.target.value })
                            }
                            placeholder="Label (e.g. Sprint)"
                            className="flex-1 bg-[#1b1b1b] border border-white/10 rounded-lg px-2.5 py-1 text-white text-xs focus:outline-none focus:border-[#df1f26]"
                          />
                          <input
                            type="text"
                            value={det.value}
                            onChange={(e) =>
                              updateDetail(dayIdx, evIdx, detIdx, { value: e.target.value })
                            }
                            placeholder="Value (e.g. 07:00)"
                            className="flex-1 bg-[#1b1b1b] border border-white/10 rounded-lg px-2.5 py-1 text-white text-xs focus:outline-none focus:border-[#df1f26]"
                          />
                          <button
                            type="button"
                            onClick={() => removeDetail(dayIdx, evIdx, detIdx)}
                            className="text-red-400 hover:text-red-300 p-1"
                            title="Remove detail"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
