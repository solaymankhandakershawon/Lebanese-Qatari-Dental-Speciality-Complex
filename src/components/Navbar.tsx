import { useState } from 'react';
import {
  Compass,
  MapPin,
  Building2,
  Mail,
  Menu,
  X,
  ExternalLink,
  Phone,
  Navigation,
} from 'lucide-react';

interface NavbarProps {
  onNavClick: (targetId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', target: 'hero' },
    { label: 'Interactive Map', target: 'interactive-map' },
    { label: 'Local Directory', target: 'local-directory' },
    { label: 'Stadium Highlights', target: 'stadium-specs' },
    { label: 'Getting Here', target: 'transit-guide' },
    { label: 'Inquiries', target: 'inquiry-form' },
  ];

  const handleLinkClick = (target: string) => {
    onNavClick(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <div
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-red-600 to-amber-600 p-0.5 shadow-md shadow-red-950/40 group-hover:scale-105 transition">
              <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-amber-400 transition">
                  Gürsel Aksel Stadyumu
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 uppercase tracking-wider bg-red-600/30 text-red-400 border border-red-500/30 rounded">
                  İzmir
                </span>
              </div>
              <p className="text-[11px] text-stone-400 hidden sm:block">
                Göztepe SK Arena &amp; 24/7 Mixed-Use Hub
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800/80 rounded-lg transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/oBLkExPaXfEUREjZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-stone-300 hover:text-amber-400 hover:bg-stone-900 border border-stone-800 transition"
              title="Official Google Maps Location"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={() => handleLinkClick('inquiry-form')}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 hover:brightness-110 transition shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Venue</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('inquiry-form')}
              className="sm:hidden text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950"
            >
              Inquiries
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-950/95 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="w-full text-left px-3 py-2 text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800/80 rounded-lg transition"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-2">
            <a
              href="https://maps.app.goo.gl/oBLkExPaXfEUREjZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-stone-800 text-stone-200 border border-stone-700"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              Open in Google Maps
            </a>
            <button
              onClick={() => handleLinkClick('inquiry-form')}
              className="w-full text-center py-2.5 rounded-lg text-xs font-bold bg-amber-500 text-stone-950"
            >
              Send Venue Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
