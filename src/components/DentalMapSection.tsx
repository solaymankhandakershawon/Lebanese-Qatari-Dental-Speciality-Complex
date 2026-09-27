import { useState, useEffect } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useMap,
} from '@vis.gl/react-google-maps';
import {
  CLINIC_COORDINATES,
  CLINIC_INFO,
  NEARBY_POINTS,
  NearbyPoint,
} from '../data/clinicData';
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  Star,
  ExternalLink,
  MessageCircle,
  Building,
  Car,
  Train,
  Pill,
  Maximize2,
  Minimize2,
  Compass,
} from 'lucide-react';

interface DentalMapSectionProps {
  selectedPointId?: string | null;
  onSelectPoint?: (point: NearbyPoint | null) => void;
}

function MapCameraController({
  targetCoords,
  zoomLevel,
}: {
  targetCoords: { lat: number; lng: number } | null;
  zoomLevel?: number;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map || !targetCoords) return;
    map.panTo(targetCoords);
    if (zoomLevel) {
      map.setZoom(zoomLevel);
    }
  }, [map, targetCoords, zoomLevel]);

  return null;
}

export default function DentalMapSection({
  selectedPointId,
  onSelectPoint,
}: DentalMapSectionProps) {
  const apiKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
    'AIzaSyADKZX80KPe_RW2NlSstOyeZqROvcfLUgw';

  const [activePoint, setActivePoint] = useState<NearbyPoint | null>(
    NEARBY_POINTS[0]
  );
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  useEffect(() => {
    if (selectedPointId) {
      const found = NEARBY_POINTS.find((p) => p.id === selectedPointId);
      if (found) {
        setActivePoint(found);
      }
    }
  }, [selectedPointId]);

  const filteredPoints = NEARBY_POINTS.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  const handlePointClick = (point: NearbyPoint) => {
    setActivePoint(point);
    if (onSelectPoint) {
      onSelectPoint(point);
    }
  };

  const resetToClinic = () => {
    const clinic = NEARBY_POINTS[0];
    setActivePoint(clinic);
    if (onSelectPoint) {
      onSelectPoint(clinic);
    }
  };

  const getMarkerIcon = (category: NearbyPoint['category']) => {
    switch (category) {
      case 'clinic':
        return <Star className="w-4 h-4 fill-white text-white" />;
      case 'hospital':
        return <Building className="w-3.5 h-3.5" />;
      case 'pharmacy':
        return <Pill className="w-3.5 h-3.5" />;
      case 'transit':
        return <Train className="w-3.5 h-3.5" />;
      case 'parking':
        return <Car className="w-3.5 h-3.5" />;
      default:
        return <MapPin className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="clinic-map" className="py-16 bg-sky-50/50 text-slate-900 scroll-mt-20 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-sky-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-emerald-700 border border-emerald-200 mb-3 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              Interactive Location &amp; Directions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Clinic Location in Doha, Qatar
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
              Conveniently located at Madinat Khalifa South / Fereej Bin Omran, with dedicated patient parking and close proximity to Hamad Medical City and Doha Metro.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetToClinic}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white hover:bg-sky-50 text-slate-800 rounded-xl border border-sky-200 shadow-xs transition"
              title="Center Map on Lebanese Qatari Dental Complex"
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-600" />
              Focus Clinic
            </button>
            <a
              href={CLINIC_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition shadow-md shadow-emerald-600/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Filter chips bar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center mb-6 bg-white p-3 rounded-2xl border border-sky-200/80 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
            {[
              { id: 'all', label: 'All Landmarks' },
              { id: 'clinic', label: 'Dental Complex' },
              { id: 'pharmacy', label: 'Pharmacies' },
              { id: 'hospital', label: 'Hospitals' },
              { id: 'transit', label: 'Metro & Transit' },
              { id: 'parking', label: 'Patient Parking' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  filterCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-sky-50 text-slate-700 hover:bg-sky-100 hover:text-slate-900 border border-sky-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="inline-flex rounded-xl border border-sky-200 bg-sky-50 p-1 text-xs self-end sm:self-auto">
            <button
              onClick={() => setMapType('roadmap')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                mapType === 'roadmap'
                  ? 'bg-white text-sky-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setMapType('satellite')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                mapType === 'satellite'
                  ? 'bg-white text-sky-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Satellite
            </button>
          </div>
        </div>

        {/* Map & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Landmark List Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col max-h-[600px] bg-white rounded-2xl border border-sky-200 overflow-hidden shadow-lg">
            <div className="p-4 border-b border-sky-100 bg-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                  Location Directory
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  Madinat Khalifa South / Bin Omran
                </h3>
              </div>
              <span className="text-[10px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                Click to focus
              </span>
            </div>

            <div className="overflow-y-auto divide-y divide-sky-100 p-2 space-y-1">
              {filteredPoints.map((point) => {
                const isSelected = activePoint?.id === point.id;
                const isClinic = point.id === 'lqdc-main';

                return (
                  <div
                    key={point.id}
                    onClick={() => handlePointClick(point)}
                    className={`p-3.5 rounded-xl cursor-pointer transition text-left ${
                      isSelected
                        ? 'bg-sky-50 border border-sky-300 text-slate-900'
                        : 'hover:bg-slate-50 border border-transparent text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${
                        isClinic ? 'text-emerald-700' : 'text-sky-700'
                      }`}>
                        {getMarkerIcon(point.category)}
                        {point.categoryLabel}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono bg-white px-1.5 py-0.5 rounded border border-sky-200">
                        {point.distance}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {point.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {point.description}
                    </p>

                    <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-600" />
                        {point.hours}
                      </span>
                      {point.rating && (
                        <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {point.rating}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Footer inside Sidebar */}
            <div className="p-3 bg-sky-50 border-t border-sky-200 flex items-center justify-between text-xs">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-emerald-700 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>+974 4466 6028</span>
              </a>
              <a
                href="https://wa.me/97466810011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-900 transition"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map View */}
          <div
            className={`lg:col-span-8 order-1 lg:order-2 rounded-2xl overflow-hidden border border-sky-200 shadow-xl relative transition-all ${
              isMapExpanded ? 'fixed inset-4 z-50 lg:col-span-12' : 'h-[500px] lg:h-[600px]'
            }`}
          >
            {/* Top Floating Clinic Identifier */}
            <div className="absolute top-3 left-3 z-10">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-200 text-xs text-slate-800 flex items-center gap-2 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-emerald-700">المجمع القطري اللبناني لطب الأسنان</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 text-[11px]">Doha, Qatar</span>
              </div>
            </div>

            {/* Fullscreen Toggle Button */}
            <button
              onClick={() => setIsMapExpanded(!isMapExpanded)}
              className="absolute top-3 right-3 z-10 p-2 bg-white/95 hover:bg-sky-50 text-slate-700 rounded-xl border border-sky-200 shadow-md transition"
              title={isMapExpanded ? 'Exit Fullscreen' : 'Expand Map'}
            >
              {isMapExpanded ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            {/* Google Maps Component */}
            <APIProvider apiKey={apiKey} libraries={['marker']}>
              <Map
                mapId="DEMO_MAP_ID"
                defaultCenter={CLINIC_COORDINATES}
                defaultZoom={15}
                mapTypeId={mapType}
                gestureHandling="greedy"
                disableDefaultUI={false}
                className="w-full h-full"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              >
                <MapCameraController
                  targetCoords={
                    activePoint
                      ? { lat: activePoint.lat, lng: activePoint.lng }
                      : CLINIC_COORDINATES
                  }
                  zoomLevel={activePoint ? 16 : 15}
                />

                {/* Advanced Markers: Emerald Green for Main Clinic, Sky Blue for other landmarks */}
                {filteredPoints.map((point) => {
                  const isClinic = point.id === 'lqdc-main';
                  const isSelected = activePoint?.id === point.id;

                  return (
                    <AdvancedMarker
                      key={point.id}
                      position={{ lat: point.lat, lng: point.lng }}
                      title={point.name}
                      onClick={() => handlePointClick(point)}
                      zIndex={isClinic ? 100 : isSelected ? 80 : 20}
                    >
                      <div
                        className={`group relative flex items-center justify-center p-2 rounded-2xl shadow-xl border-2 transition-all cursor-pointer ${
                          isClinic
                            ? 'bg-emerald-600 text-white border-white ring-4 ring-emerald-400/50 scale-110'
                            : isSelected
                            ? 'bg-sky-500 text-white border-white ring-4 ring-sky-400/50 scale-110'
                            : 'bg-white text-sky-700 border-sky-300 hover:scale-105'
                        }`}
                      >
                        {getMarkerIcon(point.category)}

                        <div className="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg border border-slate-700 pointer-events-none">
                          {point.name}
                        </div>
                      </div>
                    </AdvancedMarker>
                  );
                })}

                {/* InfoWindow for active selection */}
                {activePoint && (
                  <InfoWindow
                    position={{ lat: activePoint.lat, lng: activePoint.lng }}
                    onCloseClick={() => setActivePoint(null)}
                    pixelOffset={[0, -32]}
                    headerContent={
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        {activePoint.name}
                      </div>
                    }
                  >
                    <div className="text-slate-800 max-w-xs text-xs p-1">
                      {activePoint.id === 'lqdc-main' && (
                        <div className="text-emerald-700 font-bold font-arabic mb-1 text-[11px]" dir="rtl">
                          المجمع القطري اللبناني لطب الأسنان
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded text-[10px]">
                          {activePoint.categoryLabel}
                        </span>
                        {activePoint.rating && (
                          <span className="flex items-center gap-1 font-bold text-amber-600 text-[11px]">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                            {activePoint.rating} ({activePoint.reviews} reviews)
                          </span>
                        )}
                      </div>

                      <p className="text-slate-600 text-[11px] leading-relaxed mb-2.5">
                        {activePoint.description}
                      </p>

                      <div className="space-y-1 text-[10px] text-slate-600 border-t pt-2 border-slate-200">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{activePoint.address}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-sky-600 flex-shrink-0" />
                          <span>{activePoint.hours}</span>
                        </div>
                        {activePoint.phone && (
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-sky-600 flex-shrink-0" />
                            <a
                              href={`tel:${activePoint.phone}`}
                              className="text-sky-700 font-bold hover:underline"
                            >
                              {activePoint.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 flex gap-2">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${activePoint.lat},${activePoint.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold transition shadow-xs"
                        >
                          Get Directions
                        </a>
                        {activePoint.id === 'lqdc-main' && (
                          <a
                            href="https://wa.me/97466810011"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-lg border border-sky-300 transition"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        )}
                        <a
                          href={CLINIC_INFO.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-300 transition"
                          title="Open in Google Maps"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>
        </div>

        {/* Google Maps Compliance Notice */}
        <div className="mt-4 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-sky-200 pt-3">
          <p>
            Map data &amp; satellite tiles powered by Google Maps Platform. Location:{' '}
            <span className="text-slate-800 font-mono">
              25.30716° N, 51.48729° E (Fereej Bin Omran / Madinat Khalifa South, Doha)
            </span>
          </p>
          <a
            href="https://cloud.google.com/maps-platform/terms?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-emerald-700 underline transition"
          >
            Google Maps Platform Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
}
