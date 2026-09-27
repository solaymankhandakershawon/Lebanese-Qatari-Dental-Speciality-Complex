import { useState } from 'react';
import {
  CLINIC_SERVICES,
  DentalService,
} from '../data/clinicData';
import {
  Sparkles,
  CheckCircle,
  Clock,
  Cpu,
  Calendar,
  Layers,
  ArrowRight,
  Smile,
  Shield,
} from 'lucide-react';

interface DentalServicesProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export default function DentalServicesSection({
  onSelectServiceForBooking,
}: DentalServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'cosmetic', label: 'Hollywood Smile & Cosmetic' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'orthodontics', label: 'Orthodontics & Aligners' },
    { id: 'general', label: 'Root Canal & General' },
    { id: 'pediatric', label: 'Pediatric Dentistry' },
    { id: 'surgery', label: 'Oral Surgery' },
  ];

  const filteredServices = CLINIC_SERVICES.filter((svc) => {
    if (activeCategory === 'all') return true;
    return svc.category === activeCategory;
  });

  return (
    <section id="services" className="py-16 bg-slate-950 text-slate-100 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Specialized Dental Treatments
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering advanced dentistry using digital CAD/CAM technology, microscopic endodontics, pain-free lasers, and world-class dental materials.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-emerald-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 group"
            >
              <div>
                {/* Service Image with Badges */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-950/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-right">
                    <div className="text-xs font-bold text-emerald-300 font-arabic" dir="rtl">
                      {service.arabicTitle}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology & Duration Badges */}
                  <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                      <Cpu className="w-3 h-3 text-emerald-400" />
                      <span className="truncate max-w-[150px]">{service.technology}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 transition flex items-center justify-center gap-2 border border-slate-700 hover:border-emerald-400"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation for this Treatment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
