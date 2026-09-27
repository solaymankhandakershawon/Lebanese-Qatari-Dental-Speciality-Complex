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
    { label: 'Dental Services', target: 'services' },
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs transition-colors">
      {/* Top Quick Contact Bar in Sky Blue */}
      <div className="bg-sky-600 text-white text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-sky-200" />
              <span>Madinat Khalifa South / Bin Omran, Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-sky-200" />
              <span>Sat – Thu: 09:00 AM – 09:30 PM | Fri: 02:00 PM – 09:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 font-semibold text-white hover:text-sky-100 transition"
            >
              <Phone className="w-3 h-3 text-sky-200" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-sky-400">|</span>
            <a
              href="https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex,%20I%20would%20like%20to%20inquire%20about%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-sky-100 font-semibold transition"
            >
              <MessageCircle className="w-3 h-3 text-emerald-300" />
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
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 via-sky-600 to-emerald-600 p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-600 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition">
                  Lebanese Qatari Dental
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                  Speciality Complex
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold font-arabic" dir="rtl">
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
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/SKjDTEnq7h2Hw7wZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl text-slate-700 hover:text-sky-600 bg-sky-50 hover:bg-sky-100/70 border border-sky-200 transition"
              title="Open Location on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={() => handleLinkClick('appointment')}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-md shadow-emerald-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('appointment')}
              className="sm:hidden text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-sky-50 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-sky-100 flex flex-col gap-2">
            <a
              href="https://maps.app.goo.gl/SKjDTEnq7h2Hw7wZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-sky-50 text-slate-800 border border-sky-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Open Clinic in Google Maps
            </a>
            <a
              href="https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp: +974 6681 0011
            </a>
            <button
              onClick={() => handleLinkClick('appointment')}
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-sm"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
