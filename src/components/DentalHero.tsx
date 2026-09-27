import {
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Clock,
  Award,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_KEY_STATS } from '../data/clinicData';

interface DentalHeroProps {
  onBookAppointment: () => void;
  onExploreMap: () => void;
  onViewServices: () => void;
}

export default function DentalHero({
  onBookAppointment,
  onExploreMap,
  onViewServices,
}: DentalHeroProps) {
  return (
    <div id="hero" className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-emerald-50/30 text-slate-900 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-sky-100">
      {/* Decorative ambient gradient blooms */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                MOPH Licensed Speciality Dental Complex
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                Madinat Khalifa South, Doha
              </span>
            </div>

            {/* Bilingual Headings */}
            <div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-700 font-arabic mb-1" dir="rtl">
                {CLINIC_INFO.arabicName}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Lebanese Qatari <br />
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-600 bg-clip-text text-transparent">
                  Dental Speciality Complex
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Doha’s premier destination for precision cosmetic smile makeovers, Swiss dental implants, laser whitening, and pain-free family dentistry. Experience Lebanese aesthetic mastery combined with state-of-the-art dental technology in Qatar.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-lg shadow-emerald-600/25 group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-sky-500 hover:bg-sky-600 text-white transition shadow-md shadow-sky-500/20"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp (+974)</span>
              </a>

              <button
                onClick={onExploreMap}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-sky-50 text-slate-800 border border-sky-200 transition shadow-xs"
              >
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>View on Map</span>
              </button>
            </div>

            {/* Verified Google Maps Bar */}
            <div className="p-4 rounded-2xl bg-white border border-sky-100 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.8 / 5.0 Rating</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">860+ Verified Patient Reviews on Google Maps</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  Ahmad Bin Hanbal St / Al Jazeera Al Arabia St, Fereej Bin Omran, Doha
                </div>
              </div>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 whitespace-nowrap text-xs bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden border border-sky-200 shadow-2xl bg-white group">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Lebanese Qatari Dental Speciality Complex Interior"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

              {/* Badges on image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hollywood Smile Specialists
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-sky-800 border border-sky-200 backdrop-blur-sm shadow-xs">
                  Doha, Qatar
                </span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-100 text-xs shadow-lg">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-bold text-slate-900 text-sm">
                    {CLINIC_INFO.name}
                  </div>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    ★ 4.8
                  </span>
                </div>
                <p className="text-slate-600 line-clamp-2 leading-relaxed text-[11px]">
                  Equipped with 3D intraoral optical scanners, Zoom 2 laser whitening systems, microscopic endodontics, and zero-pain ultrasonic surgery.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-sky-700">Direct Insurance Accepted</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    +974 4466 6028
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row in White, Sky Blue & Green */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {CLINIC_KEY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition"
            >
              <div className="text-2xl sm:text-3xl font-black text-sky-600">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
