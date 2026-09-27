import { useState, useRef, useEffect } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useMap,
} from '@vis.gl/react-google-maps';
import {
  BusinessPlace,
  LOCAL_BUSINESSES,
  STADIUM_COORDINATES,
} from '../data/stadiumData';
import {
  MapPin,
  Navigation,
  Compass,
  Store,
  Utensils,
  Car,
  Layers,
  Search,
  ExternalLink,
  Phone,
  Clock,
  Star,
  Maximize2,
  Minimize2,
} from 'lucide-react';

interface InteractiveMapProps {
  selectedPlaceId?: string | null;
  onSelectPlace?: (place: BusinessPlace | null) => void;
}

// Controller component to smoothly pan/zoom map when selected place changes
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

export default function InteractiveMapSection({
  selectedPlaceId,
  onSelectPlace,
}: InteractiveMapProps) {
  const apiKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
    'AIzaSyADKZX80KPe_RW2NlSstOyeZqROvcfLUgw';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMarkerPlace, setActiveMarkerPlace] = useState<BusinessPlace | null>(
    null
  );
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'hybrid'>('roadmap');

  // Sync external selection
  useEffect(() => {
    if (selectedPlaceId) {
      const found = LOCAL_BUSINESSES.find((p) => p.id === selectedPlaceId);
      if (found) {
        setActiveMarkerPlace(found);
      }
    }
  }, [selectedPlaceId]);

  const filteredPlaces = LOCAL_BUSINESSES.filter((place) => {
    const matchesCategory =
      activeCategory === 'all' || place.category === activeCategory;
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlaceClick = (place: BusinessPlace) => {
    setActiveMarkerPlace(place);
    if (onSelectPlace) {
      onSelectPlace(place);
    }
  };

  const resetToStadium = () => {
    const stadium = LOCAL_BUSINESSES.find((p) => p.id === 'gursel-aksel-stadium') || null;
    setActiveMarkerPlace(stadium);
    if (onSelectPlace && stadium) {
      onSelectPlace(stadium);
    }
  };

  const getCategoryIcon = (category: BusinessPlace['category']) => {
    switch (category) {
      case 'stadium':
        return <Compass className="w-3.5 h-3.5" />;
      case 'dining':
        return <Utensils className="w-3.5 h-3.5" />;
      case 'shopping':
        return <Store className="w-3.5 h-3.5" />;
      case 'transit':
        return <Car className="w-3.5 h-3.5" />;
      case 'leisure':
        return <Layers className="w-3.5 h-3.5" />;
      default:
        return <MapPin className="w-3.5 h-3.5" />;
    }
  };

  const getMarkerColor = (place: BusinessPlace) => {
    if (place.id === 'gursel-aksel-stadium') return 'bg-amber-500 text-stone-900 border-amber-300 ring-4 ring-amber-400/40';
    if (place.category === 'stadium') return 'bg-red-600 text-white border-red-300';
    if (place.category === 'dining') return 'bg-orange-500 text-white border-orange-200';
    if (place.category === 'shopping') return 'bg-amber-600 text-white border-amber-200';
    if (place.category === 'transit') return 'bg-blue-600 text-white border-blue-200';
    return 'bg-emerald-600 text-white border-emerald-200';
  };

  return (
    <section id="interactive-map" className="py-16 bg-stone-900 text-stone-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-stone-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              Dynamic Venue & Surroundings Map
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Gürsel Aksel Stadyumu & Local Hub
            </h2>
            <p className="mt-2 text-stone-400 max-w-2xl text-sm sm:text-base">
              Explore stadium entry points, rooftop walk, fan shop, local dining, transit lines, and surrounding Aegean businesses with interactive markers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetToStadium}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg border border-stone-700 transition"
              title="Center Map on Stadium"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              Center Stadium
            </button>
            <a
              href="https://maps.app.goo.gl/oBLkExPaXfEUREjZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg transition shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-6 bg-stone-800/80 p-3 rounded-xl border border-stone-700/60 backdrop-blur-sm">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
            {[
              { id: 'all', label: 'All Places' },
              { id: 'stadium', label: 'Stadium & Features' },
              { id: 'dining', label: 'Cafes & Dining' },
              { id: 'shopping', label: 'Retail & Megastore' },
              { id: 'transit', label: 'Metro & Parking' },
              { id: 'leisure', label: 'Promenade & Health' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'bg-stone-700/60 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar & Map Mode toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shops, transit, food..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-900 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="inline-flex rounded-lg border border-stone-700 bg-stone-900 p-0.5 text-xs">
              <button
                onClick={() => setMapType('roadmap')}
                className={`px-2.5 py-1 rounded text-xs transition ${
                  mapType === 'roadmap'
                    ? 'bg-stone-700 text-white font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Map
              </button>
              <button
                onClick={() => setMapType('satellite')}
                className={`px-2.5 py-1 rounded text-xs transition ${
                  mapType === 'satellite'
                    ? 'bg-stone-700 text-white font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Satellite
              </button>
            </div>
          </div>
        </div>

        {/* Map & Places Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Places List Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col max-h-[640px] bg-stone-800/60 rounded-2xl border border-stone-800 overflow-hidden shadow-xl">
            <div className="p-4 border-b border-stone-800 bg-stone-800/90 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Directory Points
                </span>
                <h3 className="text-sm font-bold text-white">
                  {filteredPlaces.length} Locations Found
                </h3>
              </div>
              <span className="text-[11px] text-stone-400 bg-stone-700/50 px-2 py-0.5 rounded">
                Click to Focus
              </span>
            </div>

            <div className="overflow-y-auto divide-y divide-stone-800/60 p-2 space-y-1">
              {filteredPlaces.length === 0 ? (
                <div className="p-8 text-center text-stone-400 text-xs">
                  No places found matching your filter. Try clearing your search.
                </div>
              ) : (
                filteredPlaces.map((place) => {
                  const isSelected = activeMarkerPlace?.id === place.id;
                  return (
                    <div
                      key={place.id}
                      onClick={() => handlePlaceClick(place)}
                      className={`p-3 rounded-xl cursor-pointer transition text-left flex gap-3 items-start ${
                        isSelected
                          ? 'bg-amber-500/15 border border-amber-500/40 text-white'
                          : 'hover:bg-stone-700/40 border border-transparent text-stone-300'
                      }`}
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-stone-700"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-stone-700 text-stone-300">
                            {getCategoryIcon(place.category)}
                            {place.categoryLabel}
                          </span>
                          {place.badge && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              {place.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-white truncate">
                          {place.name}
                        </h4>
                        <p className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">
                          {place.tagline}
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-[10px] text-stone-400">
                          <span className="flex items-center gap-0.5 text-amber-400 font-semibold">
                            <Star className="w-3 h-3 fill-amber-400" />
                            {place.rating} ({place.reviewCount})
                          </span>
                          <span className="truncate">{place.address.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Interactive Map View */}
          <div
            className={`lg:col-span-8 order-1 lg:order-2 rounded-2xl overflow-hidden border border-stone-700 shadow-2xl relative transition-all ${
              isMapExpanded ? 'fixed inset-4 z-50 lg:col-span-12' : 'h-[500px] lg:h-[640px]'
            }`}
          >
            {/* Top Overlay Controls */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <div className="bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700/80 text-[11px] text-stone-200 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Gürsel Aksel Stadyumu, İzmir</span>
              </div>
            </div>

            <button
              onClick={() => setIsMapExpanded(!isMapExpanded)}
              className="absolute top-3 right-3 z-10 p-2 bg-stone-900/90 hover:bg-stone-800 text-stone-200 rounded-lg border border-stone-700/80 shadow-lg transition"
              title={isMapExpanded ? 'Exit Fullscreen' : 'Expand Map'}
            >
              {isMapExpanded ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            {/* Google Map */}
            <APIProvider apiKey={apiKey} libraries={['marker']}>
              <Map
                mapId="DEMO_MAP_ID"
                defaultCenter={STADIUM_COORDINATES}
                defaultZoom={15}
                mapTypeId={mapType}
                gestureHandling="greedy"
                disableDefaultUI={false}
                className="w-full h-full"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              >
                {/* Smooth Camera Controller when a place is selected */}
                <MapCameraController
                  targetCoords={
                    activeMarkerPlace
                      ? { lat: activeMarkerPlace.lat, lng: activeMarkerPlace.lng }
                      : STADIUM_COORDINATES
                  }
                  zoomLevel={activeMarkerPlace ? 16 : 15}
                />

                {/* Render Advanced Markers */}
                {filteredPlaces.map((place) => {
                  const isSelected = activeMarkerPlace?.id === place.id;
                  return (
                    <AdvancedMarker
                      key={place.id}
                      position={{ lat: place.lat, lng: place.lng }}
                      title={place.name}
                      onClick={() => handlePlaceClick(place)}
                      zIndex={isSelected ? 99 : place.category === 'stadium' ? 50 : 10}
                    >
                      <div
                        className={`group relative flex items-center justify-center p-1.5 rounded-full shadow-lg border-2 transition-transform duration-200 cursor-pointer ${getMarkerColor(
                          place
                        )} ${
                          isSelected
                            ? 'scale-125 ring-4 ring-amber-400/60'
                            : 'hover:scale-110'
                        }`}
                      >
                        {getCategoryIcon(place.category)}
                        <span className="sr-only">{place.name}</span>

                        {/* Tooltip on Hover */}
                        <div className="absolute bottom-full mb-1.5 hidden group-hover:block whitespace-nowrap bg-stone-900 text-white text-[11px] font-semibold px-2 py-1 rounded shadow-md border border-stone-700 pointer-events-none">
                          {place.name}
                        </div>
                      </div>
                    </AdvancedMarker>
                  );
                })}

                {/* InfoWindow for Selected Place */}
                {activeMarkerPlace && (
                  <InfoWindow
                    position={{
                      lat: activeMarkerPlace.lat,
                      lng: activeMarkerPlace.lng,
                    }}
                    onCloseClick={() => setActiveMarkerPlace(null)}
                    pixelOffset={[0, -28]}
                    headerContent={
                      <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        {activeMarkerPlace.name}
                      </div>
                    }
                  >
                    <div className="text-stone-800 max-w-xs text-xs p-1">
                      <img
                        src={activeMarkerPlace.image}
                        alt={activeMarkerPlace.name}
                        className="w-full h-28 object-cover rounded-md mb-2"
                      />
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px]">
                          {activeMarkerPlace.categoryLabel}
                        </span>
                        <span className="flex items-center gap-1 font-bold text-stone-700 text-[11px]">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          {activeMarkerPlace.rating} ({activeMarkerPlace.reviewCount})
                        </span>
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed mb-2">
                        {activeMarkerPlace.description}
                      </p>
                      <div className="space-y-1 text-[10px] text-stone-500 border-t pt-1.5 border-stone-200">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-stone-400 flex-shrink-0" />
                          <span className="truncate">{activeMarkerPlace.address}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-stone-400 flex-shrink-0" />
                          <span>{activeMarkerPlace.hours}</span>
                        </div>
                        {activeMarkerPlace.phone && (
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-stone-400 flex-shrink-0" />
                            <a
                              href={`tel:${activeMarkerPlace.phone}`}
                              className="text-amber-700 hover:underline"
                            >
                              {activeMarkerPlace.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 flex gap-2">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${activeMarkerPlace.lat},${activeMarkerPlace.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1.5 px-2 bg-stone-900 hover:bg-stone-800 text-white rounded text-[11px] font-semibold transition"
                        >
                          Get Directions
                        </a>
                        <a
                          href="https://maps.app.goo.gl/oBLkExPaXfEUREjZ8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded border border-stone-300 transition"
                          title="Open Venue Google Maps Card"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>
        </div>

        {/* Notice compliant with Google Maps guidelines */}
        <div className="mt-4 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-stone-800/80 pt-3">
          <p>
            Map data &amp; imagery powered by Google Maps Platform. Location:{' '}
            <span className="text-stone-300 font-mono">
              38.39908° N, 27.08535° E (Mehmetçik Blv. No:6, Konak/İzmir)
            </span>
          </p>
          <a
            href="https://cloud.google.com/maps-platform/terms?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-amber-400 underline transition"
          >
            Google Maps Platform Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
}
