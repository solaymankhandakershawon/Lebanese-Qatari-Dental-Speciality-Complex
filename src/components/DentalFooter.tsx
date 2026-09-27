import {
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Mail,
  Clock,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DentalFooterProps {
  onNavClick: (targetId: string) => void;
}

export default function DentalFooter({ onNavClick }: DentalFooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Clinic Brand Col */}
          <div className="space-y-3.5 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-xs text-emerald-400 font-arabic" dir="rtl">
                  {CLINIC_INFO.arabicName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Premier multi-specialty dental clinic in Doha, Qatar. Dedicated to clinical excellence in cosmetic Hollywood Smile design, dental implants, Invisalign orthodontics, and gentle pediatric dental care.
            </p>

            <div className="flex items-start gap-2 text-[11px] text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.address}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('hero')}
                  className="hover:text-emerald-400 transition"
                >
                  Clinic Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-emerald-400 transition"
                >
                  Dental Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('clinic-map')}
                  className="hover:text-emerald-400 transition"
                >
                  Interactive Location Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('technology')}
                  className="hover:text-emerald-400 transition"
                >
                  Sterilization &amp; Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('reviews')}
                  className="hover:text-emerald-400 transition"
                >
                  Patient Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('appointment')}
                  className="hover:text-emerald-400 transition"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Google Maps Location & ToS */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Find Us on Google Maps
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Located on Ahmad Bin Hanbal St / Al Jazeera Al Arabia St, Doha (25.30716° N, 51.48729° E).
            </p>
            <div>
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold transition"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://cloud.google.com/maps-platform/terms?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-500 hover:text-slate-300 underline block"
              >
                Google Maps Platform Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Lebanese Qatari Dental Speciality Complex. All rights reserved. Doha, Qatar.
          </div>
          <div className="flex items-center gap-2">
            <span>Tel: +974 4466 6028</span>
            <span>•</span>
            <span>WhatsApp: +974 6681 0011</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
