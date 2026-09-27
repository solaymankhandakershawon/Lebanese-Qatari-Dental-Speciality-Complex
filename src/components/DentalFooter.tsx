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
    <footer className="bg-white text-slate-600 border-t border-sky-200 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Clinic Brand Col */}
          <div className="space-y-3.5 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base tracking-tight block">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-xs text-emerald-700 font-arabic font-semibold" dir="rtl">
                  {CLINIC_INFO.arabicName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 max-w-md leading-relaxed">
              Premier multi-specialty dental clinic in Doha, Qatar. Dedicated to clinical excellence in cosmetic Hollywood Smile design, dental implants, Invisalign orthodontics, and gentle pediatric dental care.
            </p>

            <div className="flex items-start gap-2 text-[11px] text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.address}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('hero')}
                  className="hover:text-sky-600 transition"
                >
                  Clinic Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-sky-600 transition"
                >
                  Dental Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('clinic-map')}
                  className="hover:text-sky-600 transition"
                >
                  Interactive Location Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('technology')}
                  className="hover:text-sky-600 transition"
                >
                  Sterilization &amp; Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('reviews')}
                  className="hover:text-sky-600 transition"
                >
                  Patient Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('appointment')}
                  className="hover:text-sky-600 transition"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Google Maps Location & ToS */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Find Us on Google Maps
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Located on Ahmad Bin Hanbal St / Al Jazeera Al Arabia St, Doha (25.30716° N, 51.48729° E).
            </p>
            <div>
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 font-semibold transition"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://cloud.google.com/maps-platform/terms?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-500 hover:text-sky-600 underline block"
              >
                Google Maps Platform Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-sky-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Lebanese Qatari Dental Speciality Complex. All rights reserved. Doha, Qatar.
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Tel: +974 4466 6028</span>
            <span>•</span>
            <span className="font-semibold text-sky-600">WhatsApp: +974 6681 0011</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
