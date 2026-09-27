import {
  Compass,
  MapPin,
  ExternalLink,
  Heart,
  Navigation,
  Shield,
} from 'lucide-react';

interface FooterProps {
  onNavClick: (targetId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Gürsel Aksel Stadyumu
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              İzmir’s iconic sports and urban lifestyle center in Konak / Karabağlar. Home of Göztepe Spor Kulübü (Est. 1925), featuring the world-first elevated stadium pitch and panoramic Aegean rooftop walking track.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Mehmetçik Bulvarı No:6, 35290 Konak / İzmir, Türkiye</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('hero')}
                  className="hover:text-amber-400 transition"
                >
                  Venue Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('interactive-map')}
                  className="hover:text-amber-400 transition"
                >
                  Interactive Map Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('local-directory')}
                  className="hover:text-amber-400 transition"
                >
                  Local Business Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('stadium-specs')}
                  className="hover:text-amber-400 transition"
                >
                  Architectural Specifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('transit-guide')}
                  className="hover:text-amber-400 transition"
                >
                  Transit &amp; Parking Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('inquiry-form')}
                  className="hover:text-amber-400 transition"
                >
                  Inquiries &amp; Space Rental
                </button>
              </li>
            </ul>
          </div>

          {/* External & Maps Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Google Maps Location
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Official place listing on Google Maps for coordinates 38.39908° N, 27.08535° E.
            </p>
            <div>
              <a
                href="https://maps.app.goo.gl/oBLkExPaXfEUREjZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400 border border-stone-700 font-semibold transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://cloud.google.com/maps-platform/terms?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-stone-500 hover:text-stone-300 underline block"
              >
                Google Maps Platform Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Gürsel Aksel Stadyumu &amp; Yaşam Alanı Demo Portal. Built with Google Maps Platform.
          </div>
          <div className="flex items-center gap-1">
            <span>Honoring</span>
            <span className="text-amber-400 font-medium">Gürsel Aksel</span>
            <span>&amp;</span>
            <span className="text-red-400 font-medium">Göztepe SK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
