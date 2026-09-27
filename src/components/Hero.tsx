import {
  MapPin,
  ExternalLink,
  Navigation,
  Compass,
  Trophy,
  Users,
  Building,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onExploreMap: () => void;
  onOpenDirectory: () => void;
  onOpenInquiry: () => void;
}

export default function Hero({
  onExploreMap,
  onOpenDirectory,
  onOpenInquiry,
}: HeroProps) {
  return (
    <div id="hero" className="relative overflow-hidden bg-stone-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-800">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-900 border border-stone-800 text-stone-300">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-amber-400 font-bold">Göztepe SK Arena</span>
              <span className="text-stone-500">•</span>
              <span>İzmir / Konak, Türkiye</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Gürsel Aksel <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-red-400 bg-clip-text text-transparent">
                Stadyumu &amp; Yaşam Merkezi
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              İzmir’s world-class UEFA Category 4 sports and urban architecture landmark.
              Featuring an elevated pitch (+6.70m), a 650-meter public rooftop walking loop with Aegean Gulf panoramas, and a vibrant 24/7 concourse of local businesses, dining, and cultural attractions.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreMap}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-500 text-stone-950 hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 group"
              >
                <Compass className="w-4 h-4 text-stone-950 group-hover:rotate-45 transition-transform" />
                <span>Explore Interactive Map</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDirectory}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700/80 transition"
              >
                <Building className="w-4 h-4 text-amber-400" />
                <span>Local Businesses</span>
              </button>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 transition"
              >
                <span>Venue Inquiries</span>
              </button>
            </div>

            {/* Verified Location Bar */}
            <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  Mehmetçik Bulvarı No:6, 35290 Konak / İzmir, Türkiye
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/oBLkExPaXfEUREjZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 whitespace-nowrap"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900 group">
              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80"
                alt="Gürsel Aksel Stadyumu Arena"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow-md">
                  UEFA Category 4
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/90 text-stone-200 border border-stone-700 backdrop-blur-sm">
                  Active 24/7 Mixed-Use
                </span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-800 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white text-sm">
                    Gürsel Aksel Stadyumu
                  </div>
                  <span className="text-amber-400 font-semibold flex items-center gap-1">
                    ★ 4.8 (3,400+ reviews)
                  </span>
                </div>
                <p className="text-stone-300 line-clamp-2 leading-relaxed">
                  Named in tribute to legendary captain Gürsel Aksel. Integrated with DB Architects’ world-first rooftop loop, health institute, fan megastore, and transit connections.
                </p>
                <div className="mt-3 pt-2.5 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Capacity: 23,376</span>
                  <span>Fahrettin Altay Metro: 350m</span>
                  <span>Sea Pier: 10 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: <Users className="w-5 h-5 text-amber-400" />,
              value: '23,376',
              label: 'Seated Capacity',
              sub: 'Acoustic roof & UEFA Cat 4',
            },
            {
              icon: <Compass className="w-5 h-5 text-red-400" />,
              value: '650 m',
              label: 'Sky Walk Track',
              sub: 'Public rooftop panorama',
            },
            {
              icon: <Building className="w-5 h-5 text-amber-400" />,
              value: '+6.70 m',
              label: 'Elevated Pitch',
              sub: 'Ground floor retail & clinics',
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
              value: '500+ Cars',
              label: 'Underground Garage',
              sub: 'Equipped with EV chargers',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 transition"
            >
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <span className="text-xl sm:text-2xl font-black text-white">
                  {item.value}
                </span>
              </div>
              <div className="text-xs font-bold text-stone-200">{item.label}</div>
              <div className="text-[11px] text-stone-400 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
