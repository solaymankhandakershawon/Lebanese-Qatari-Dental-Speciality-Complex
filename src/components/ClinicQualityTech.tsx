import {
  ShieldCheck,
  Cpu,
  Sparkles,
  Award,
  Zap,
  CheckCircle2,
  FileText,
  CreditCard,
} from 'lucide-react';
import { INSURANCE_PARTNERS } from '../data/clinicData';

export default function ClinicQualityTech() {
  const techPillars = [
    {
      title: 'Class-B Hospital Autoclave Sterilization',
      desc: 'Our dedicated central sterilization suite uses medical vacuum autoclaves with chemical and biological indicators on every cycle, complying strictly with Qatar Ministry of Public Health (MOPH) protocols.',
      icon: ShieldCheck,
      badge: '100% Infection Control',
    },
    {
      title: '3D Intraoral Optical Scanning (No Trays)',
      desc: 'Say goodbye to uncomfortable, messy alginate impression trays. Our high-precision digital scanners capture thousands of 3D color frames per second for ultra-accurate crowns, veneers, and aligners.',
      icon: Cpu,
      badge: 'Zero Gagging / Instant 3D',
    },
    {
      title: 'Low-Dose 3D CBCT Diagnostic X-Ray',
      desc: 'Ultra-low radiation volumetric cone-beam tomography provides 3D cross-sectional views of jawbones, nerve canals, and sinus cavities for flawless computer-guided implant placement.',
      icon: Zap,
      badge: 'High-Precision 3D Imaging',
    },
    {
      title: 'Minimally Invasive Dental Laser Systems',
      desc: 'Diode and soft-tissue lasers enable scalpel-free cosmetic gum contouring, rapid aphthous ulcer relief, and accelerated teeth whitening with virtually zero bleeding or post-op discomfort.',
      icon: Sparkles,
      badge: 'Painless Gentle Care',
    },
  ];

  return (
    <section id="technology" className="py-16 bg-slate-900 text-slate-100 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            Clinical Standards &amp; Safety
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Cutting-Edge Dental Technology
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            We invest in certified Swiss and German clinical systems to ensure your dental treatments are accurate, pain-free, and long-lasting.
          </p>
        </div>

        {/* 4 Tech Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {techPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-emerald-400 border border-slate-800">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Insurance Coverage & Billing Support */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <CreditCard className="w-4 h-4" />
                Insurance &amp; Financial Coverage
              </div>
              <h3 className="text-xl font-bold text-white">
                Direct Billing with Leading Qatar Insurance Networks
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Our dedicated insurance desk assists with instant online pre-approvals, direct claim submissions, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INSURANCE_PARTNERS.map((ins, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center hover:border-slate-700 transition"
              >
                <div className="text-xs font-bold text-slate-200">{ins.name}</div>
                <div className="text-[10px] text-emerald-400 font-medium mt-1">
                  {ins.tag}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Also accepting Qatar Debit (NAPS), Visa, MasterCard, and Flexible Installment Plans.</span>
            <span className="text-emerald-400 font-semibold">Special discounts for corporate accounts &amp; families</span>
          </div>
        </div>
      </div>
    </section>
  );
}
