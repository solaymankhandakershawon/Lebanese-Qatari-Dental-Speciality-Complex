import { useState } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  MessageCircle,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DentalNavbarProps {
  onNavClick: (targetId: string) => void;
}

export default function DentalNavbar({ onNavClick }: DentalNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', target: 'hero' },
    { label: 'Treatments & Services', target: 'services' },
    { label: 'Location & Map', target: 'clinic-map' },
    { label: 'Technology & Safety', target: 'technology' },
    { label: 'Patient Reviews', target: 'reviews' },
    { label: 'Book Appointment', target: 'appointment' },
  ];

  const handleLinkClick = (target: string) => {
    onNavClick(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-colors">
      {/* Top Quick Contact Bar */}
      <div className="bg-emerald-950/80 border-b border-emerald-900/40 text-[11px] text-emerald-200/90 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>Madinat Khalifa South / Bin Omran, Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>Sat – Thu: 09:00 AM – 09:30 PM | Fri: 02:00 PM – 09:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 font-semibold text-emerald-300 hover:text-white transition"
            >
              <Phone className="w-3 h-3" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-emerald-800">|</span>
            <a
              href={`https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex,%20I%20would%20like%20to%20inquire%20about%20an%20appointment`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white font-semibold transition"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: +974 6681 0011</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 p-0.5 shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                {/* Tooth / Dental Emblem */}
                <Sparkles className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition">
                  Lebanese Qatari Dental
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded">
                  Speciality Complex
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium font-arabic" dir="rtl">
                المجمع القطري اللبناني لطب الأسنان • الدوحة
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://maps.app.goo.gl/SKjDTEnq7h2Hw7wZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl text-slate-300 hover:text-emerald-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition"
              title="Open Location on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={() => handleLinkClick('appointment')}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 transition shadow-md shadow-emerald-500/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('appointment')}
              className="sm:hidden text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="https://maps.app.goo.gl/SKjDTEnq7h2Hw7wZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Open Clinic in Google Maps
            </a>
            <a
              href={`https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp: +974 6681 0011
            </a>
            <button
              onClick={() => handleLinkClick('appointment')}
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 shadow"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
