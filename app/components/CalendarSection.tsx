import React from 'react';
import { EVENTS } from '../../constants';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';

const CalendarSection: React.FC = () => {
    const events2026 = EVENTS.filter(e => e.year === 2026);
    const eventsFuture = EVENTS.filter(e => e.year > 2026 || e.status === 'Planned');

    return (
        <section id="calendar" className="py-24 bg-triton-gray relative">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">World Series</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white">Calendário</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-bold text-white">7 ETAPAS • 2 PAÍSES</p>
                        <p className="text-gray-400 text-sm">+30 Nacionalidades na disputa</p>
                    </div>
                </div>

                {/* 2026 Timeline */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-white mb-8 border-l-4 border-triton-red pl-4">TEMPORADA 2026 <span className="text-sm font-normal text-gray-500 ml-2">*Datas confirmadas</span></h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {events2026.map((event, idx) => (
                            <div key={idx} className="bg-neutral-900 p-6 rounded-xl border-t-4 border-triton-red hover:transform hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-3xl">{event.flag}</span>
                                    {event.location.includes('Final') && (
                                        <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase">Final Mundial</span>
                                    )}
                                </div>
                                <div className="mb-2">
                                    <span className="text-triton-red font-bold text-sm flex items-center gap-2">
                                        <CalendarIcon size={14} /> {event.date}
                                    </span>
                                </div>
                                <h5 className="text-xl font-black text-white uppercase mb-1">{event.location}</h5>
                                <p className="text-gray-500 text-sm">{event.country}</p>

                                <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="text-white text-xs font-bold uppercase hover:text-triton-red">Saiba mais &rarr;</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Locations */}
                <div>
                    <h4 className="text-xl font-bold text-gray-400 mb-8 pl-4">EM BREVE 2027</h4>
                    <div className="flex flex-wrap gap-4">
                        {eventsFuture.map((event, idx) => (
                            <div key={idx} className="flex items-center bg-white/5 px-6 py-3 rounded-full border border-white/5">
                                <span className="mr-3 text-2xl">{event.flag}</span>
                                <div>
                                    <p className="font-bold text-white uppercase text-sm">{event.location}</p>
                                    <p className="text-[10px] text-gray-400">{event.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CalendarSection;