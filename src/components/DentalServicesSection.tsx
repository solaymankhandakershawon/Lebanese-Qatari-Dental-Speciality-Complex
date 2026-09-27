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
    <section id="services" className="py-16 bg-white text-slate-900 border-b border-sky-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Comprehensive Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Specialized Dental Treatments
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Delivering advanced dentistry using digital CAD/CAM technology, microscopic endodontics, pain-free lasers, and world-class Swiss and German dental materials.
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
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-sky-50 text-slate-700 hover:bg-sky-100/70 border border-sky-200'
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
              className="bg-white rounded-3xl border border-sky-100 hover:border-emerald-300 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group"
            >
              <div>
                {/* Service Image with Badges */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/95 text-sky-700 border border-sky-200 shadow-xs backdrop-blur-md">
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-right">
                    <div className="text-xs font-bold text-white font-arabic drop-shadow" dir="rtl">
                      {service.arabicTitle}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology & Duration Badges */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200/60 text-sky-800 font-medium">
                      <Clock className="w-3 h-3 text-sky-600" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60 text-emerald-800 font-medium">
                      <Cpu className="w-3 h-3 text-emerald-600" />
                      <span className="truncate max-w-[150px]">{service.technology}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-sky-50 hover:bg-emerald-600 hover:text-white text-sky-800 transition flex items-center justify-center gap-2 border border-sky-200 hover:border-emerald-600 shadow-xs"
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
