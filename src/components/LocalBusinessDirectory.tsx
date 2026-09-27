import { useState } from 'react';
import {
  BusinessPlace,
  LOCAL_BUSINESSES,
} from '../data/stadiumData';
import {
  MapPin,
  Star,
  Clock,
  Phone,
  Compass,
  Store,
  Utensils,
  Car,
  Layers,
  Search,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react';

interface LocalBusinessDirectoryProps {
  onLocateOnMap: (placeId: string) => void;
}

export default function LocalBusinessDirectory({
  onLocateOnMap,
}: LocalBusinessDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'reviews'>('rating');

  const categories = [
    { id: 'all', label: 'All Businesses & Spots', icon: Layers },
    { id: 'stadium', label: 'Stadium & Arena', icon: Compass },
    { id: 'dining', label: 'Dining & Cafes', icon: Utensils },
    { id: 'shopping', label: 'Retail & Stores', icon: Store },
    { id: 'transit', label: 'Transit & Parking', icon: Car },
    { id: 'leisure', label: 'Health & Waterfront', icon: Layers },
  ];

  const filteredPlaces = LOCAL_BUSINESSES.filter((place) => {
    const matchesCat =
      selectedCategory === 'all' || place.category === selectedCategory;
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
    return a.name.localeCompare(b.name);
  });

  return (
    <section id="local-directory" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-600/10 text-red-400 border border-red-500/20 mb-3">
            <Store className="w-3.5 h-3.5" />
            Neighborhood &amp; Concourse Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Local Businesses &amp; Venues
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            Discover official fan shops, roof cafes, Aegean seafood taverns, shopping centers, and transit stations located inside and immediately around Gürsel Aksel Stadyumu.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 sm:p-5 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, food, service..."
                className="w-full pl-10 pr-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Sort selection */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end text-xs text-stone-300">
              <Filter className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-stone-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-950 border border-stone-700 text-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto mt-4 pt-3 border-t border-stone-800 scrollbar-thin">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                      : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-stone-900/60 rounded-2xl border border-stone-800/80 hover:border-stone-700 overflow-hidden flex flex-col transition group hover:shadow-xl hover:shadow-black/40"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-stone-800">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-stone-950/80 text-stone-200 border border-stone-700/80 backdrop-blur-sm">
                    {place.categoryLabel}
                  </span>
                  {place.badge && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500 text-stone-950 shadow">
                      {place.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 font-bold text-amber-400 bg-stone-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {place.rating} ({place.reviewCount})
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition">
                    {place.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                    {place.tagline}
                  </p>
                  <p className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                    {place.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {place.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practical Details */}
                <div className="space-y-1.5 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                    <span className="truncate">{place.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                    <span>{place.hours}</span>
                  </div>
                  {place.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                      <a
                        href={`tel:${place.phone}`}
                        className="text-stone-300 hover:text-amber-400 transition"
                      >
                        {place.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onLocateOnMap(place.id)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 transition flex items-center justify-center gap-1.5"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Locate on Map</span>
                  </button>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition flex items-center justify-center gap-1"
                    title="Get directions in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
