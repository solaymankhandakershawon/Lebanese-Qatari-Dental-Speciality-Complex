import {
  Star,
  Quote,
  CheckCircle,
  ExternalLink,
  Smile,
  Sparkles,
} from 'lucide-react';
import { CLINIC_INFO, PATIENT_TESTIMONIALS } from '../data/clinicData';

export default function PatientReviewsSection() {
  return (
    <section id="reviews" className="py-16 bg-sky-50/40 text-slate-900 border-b border-sky-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-sky-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3 shadow-xs">
              <Smile className="w-3.5 h-3.5 text-emerald-600" />
              Patient Satisfaction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Trusted by Thousands of Smiles in Doha
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed">
              Read authentic feedback from patients who entrusted their cosmetic and restorative dental treatments to our specialist team.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sky-200 shadow-md flex items-center gap-5">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-amber-500">4.8</div>
              <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="border-l border-sky-100 pl-4 space-y-1">
              <div className="text-xs font-bold text-slate-900">
                Google Maps Verified
              </div>
              <div className="text-[11px] text-slate-500">
                Based on 860+ patient reviews
              </div>
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline pt-0.5"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-emerald-300 shadow-xs hover:shadow-md flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">{item.date}</span>
                </div>

                <div className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200/80 mb-3">
                  {item.service}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-[11px] text-slate-400">{item.role}</div>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
