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
    <div id="hero" className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background ambient medical glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clinic Introduction & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                MOPH Licensed Speciality Dental Complex
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Madinat Khalifa South, Doha
              </span>
            </div>

            {/* Bilingual Headings */}
            <div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-arabic mb-1" dir="rtl">
                {CLINIC_INFO.arabicName}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                Lebanese Qatari <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Dental Speciality Complex
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Doha’s trusted destination for precision cosmetic smile makeovers, dental implants, laser treatments, and pain-free family dentistry. Bringing Lebanese aesthetic mastery and world-class dental technology to Qatar.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition shadow-lg shadow-emerald-500/20 group"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={`https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex,%20I%20would%20like%20to%20book%20an%20appointment`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+974)</span>
              </a>

              <button
                onClick={onExploreMap}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>View on Map</span>
              </button>
            </div>

            {/* Verified Google Maps Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.8 / 5.0 Rating</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">860+ Verified Patient Reviews on Google Maps</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Ahmad Bin Hanbal St / Al Jazeera Al Arabia St, Fereej Bin Omran, Doha
                </div>
              </div>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 whitespace-nowrap text-xs bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Clinic Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Lebanese Qatari Dental Speciality Complex Interior"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Floating Quality Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hollywood Smile Specialists
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/90 text-slate-200 border border-slate-700 backdrop-blur-sm">
                  Doha, Qatar
                </span>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white text-sm">
                    {CLINIC_INFO.name}
                  </div>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    ★ 4.8
                  </span>
                </div>
                <p className="text-slate-300 line-clamp-2 leading-relaxed text-[11px]">
                  Equipped with 3D intraoral optical scanners, Zoom 2 laser whitening systems, microscopic endodontics, and zero-pain ultrasonic surgery.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Direct Insurance Accepted</span>
                  <span>Free Valet / Parking</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    +974 4466 6028
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Key Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {CLINIC_KEY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition"
            >
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
