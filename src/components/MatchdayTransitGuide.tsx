import {
  Train,
  Car,
  Ship,
  Bus,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MapPin,
  Clock,
} from 'lucide-react';

export default function MatchdayTransitGuide() {
  const transitOptions = [
    {
      title: 'İzmir Metro (Line M1)',
      subtitle: 'Fahrettin Altay Terminal (350m walk)',
      desc: 'Take the M1 line directly from Konak, Çankaya, Basmane, or Bornova/Evka-3 to the southwestern terminus at Fahrettin Altay. From the exit, it is a pleasant 4-minute walk along Mehmetçik Boulevard.',
      icon: Train,
      tag: 'Recommended Transit',
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      title: 'Konak Tramway (Line T2)',
      subtitle: 'Fahrettin Altay Tram Stop (400m walk)',
      desc: 'The scenic coastal tram connects Alsancak, Pasaport, Konak Pier, and Göztepe along the bay shoreline. Alight at Fahrettin Altay stop for direct access to the stadium.',
      icon: Bus,
      tag: 'Scenic Coastal Route',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    },
    {
      title: 'İzmir Bay Ferry (İZDENİZ)',
      subtitle: 'Üçkuyular Ferry Pier (1.1 km walk or 5 min bus)',
      desc: 'Passenger and car ferries connect Bostanlı and Karşıyaka to Üçkuyular. Cross the Gulf with a view of İzmir before heading to the match or dinner.',
      icon: Ship,
      tag: 'Bay Crossing',
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    },
    {
      title: 'Car & Underground Parking',
      subtitle: '500+ Space Garage under the stadium',
      desc: 'Vehicle access is via Mehmetçik Boulevard. The garage provides automated license plate entry, disabled parking bays, and 8 high-speed EV chargers. Matchdays fill early.',
      icon: Car,
      tag: 'EV Fast Charging',
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
  ];

  return (
    <section id="transit-guide" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Train className="w-3.5 h-3.5" />
            Visitor &amp; Matchday Logistics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Getting to Gürsel Aksel Stadyumu
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated at the junction of Konak and Karabağlar with direct connections to İzmir Metro, coastal tramways, and Gulf ferries.
          </p>
        </div>

        {/* Transit Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {transitOptions.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <div
                key={idx}
                className="bg-stone-900/60 rounded-2xl border border-stone-800 p-5 flex flex-col justify-between hover:border-stone-700 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${opt.color}`}
                    >
                      {opt.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{opt.title}</h3>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">
                    {opt.subtitle}
                  </div>
                  <p className="text-xs text-stone-400 mt-2.5 leading-relaxed">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Frequency: 4-8 mins</span>
                  <a
                    href="https://maps.app.goo.gl/oBLkExPaXfEUREjZ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Route Map <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Matchday & Visitor Guidelines Banner */}
        <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Passolig &amp; Entry</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                For Süper Lig matchday entrance, all fans require a valid Passolig card with assigned seating. Stadium turnstiles open 2 hours before kickoff.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Non-Matchday Visits</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                The GözGöz Fan Store, Göztepe Museum, concourse cafes, and rooftop sky walk are open to the general public throughout the week without match tickets.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Universal Accessibility</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Barrier-free elevators connect the street level directly to wheelchair accessible viewing platforms, VIP hospitality suites, and the rooftop walkway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
