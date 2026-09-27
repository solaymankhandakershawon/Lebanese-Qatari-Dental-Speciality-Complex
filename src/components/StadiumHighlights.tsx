import {
  VENUE_SPECS,
} from '../data/stadiumData';
import {
  Building2,
  Trophy,
  Footprints,
  Sparkles,
  Shield,
  Layers,
  CheckCircle,
} from 'lucide-react';

export default function StadiumHighlights() {
  const architecturalFeatures = [
    {
      title: 'Elevated Pitch (+6.70m)',
      description: 'Unlike conventional stadiums enclosed by perimeter walls, Gürsel Aksel Stadium raises the playing field nearly 7 meters above street grade. This unlocks continuous street-level public circulation, allowing commercial avenues, cafes, and healthcare clinics to thrive seamlessly underneath.',
      icon: Layers,
    },
    {
      title: '650m Rooftop Sky Walk',
      description: 'A global architectural first: a 650-meter rubberized continuous rooftop walking and jogging loop atop the grandstand canopy. Visitors enjoy panoramic 360-degree vistas overlooking the Aegean Sea, Konak coastline, and İzmir mountains.',
      icon: Footprints,
    },
    {
      title: 'Acoustic Wall of Sound',
      description: 'Specially engineered steep grandstand angles and resonant steel roof baffles concentrate supporter cheering, creating one of the most electric, intimidating matchday atmospheres in European football for Göztepe SK.',
      icon: Sparkles,
    },
    {
      title: 'Honoring "Koca Kaptan" Gürsel Aksel',
      description: 'Named in memory of Gürsel Aksel (1937–1978), the iconic Göztepe captain who spent 17 seasons leading the club through 394 matches, Turkish Cups, and European Cup Winners’ Cup semifinals.',
      icon: Trophy,
    },
  ];

  return (
    <section id="stadium-specs" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Architectural Wonder &amp; Club Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            More Than Just a Stadium
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            Designed by DB Architects (Bünyamin Derman), Gürsel Aksel Stadium is a living civic center engineered to serve İzmir 365 days a year with integrated urban culture.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {architecturalFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/50 transition relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Specs Table / Cards */}
        <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            Official Venue Key Specifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VENUE_SPECS.map((spec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-900/70 border border-stone-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-stone-400 font-medium">{spec.title}</div>
                  <div className="text-xl font-black text-amber-400 mt-1">
                    {spec.value}
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 mt-2 border-t border-stone-800/80 pt-2 leading-relaxed">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
