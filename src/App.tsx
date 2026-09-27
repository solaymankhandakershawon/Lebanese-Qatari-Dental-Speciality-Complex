/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import DentalNavbar from './components/DentalNavbar';
import DentalHero from './components/DentalHero';
import DentalServicesSection from './components/DentalServicesSection';
import DentalMapSection from './components/DentalMapSection';
import ClinicQualityTech from './components/ClinicQualityTech';
import PatientReviewsSection from './components/PatientReviewsSection';
import AppointmentBookingForm from './components/AppointmentBookingForm';
import DentalFooter from './components/DentalFooter';
import { ArrowUp, MessageCircle, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [selectedServiceIdForBooking, setSelectedServiceIdForBooking] =
    useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setSelectedServiceIdForBooking(serviceId);
    scrollToSection('appointment');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <DentalNavbar onNavClick={scrollToSection} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <DentalHero
          onBookAppointment={() => scrollToSection('appointment')}
          onExploreMap={() => scrollToSection('clinic-map')}
          onViewServices={() => scrollToSection('services')}
        />

        {/* Specialized Dental Services */}
        <DentalServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Interactive Google Map Section */}
        <DentalMapSection />

        {/* Clinical Technology & Sterilization Standards */}
        <ClinicQualityTech />

        {/* Patient Reviews & Verified Testimonials */}
        <PatientReviewsSection />

        {/* Online Appointment Booking & Inquiry Form */}
        <AppointmentBookingForm
          initialServiceId={selectedServiceIdForBooking}
        />
      </main>

      {/* Footer */}
      <DentalFooter onNavClick={scrollToSection} />

      {/* Floating Action Buttons for Qatar Patients */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Direct Float in Sky Blue */}
        <a
          href="https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex,%20I%20would%20like%20to%20inquire%20about%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl shadow-emerald-600/30 transition hover:scale-105 border border-emerald-400"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        {/* Direct Call Float in Sky Blue */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="p-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white border border-sky-400 shadow-xl shadow-sky-600/30 transition hover:scale-105"
          title="Call Clinic"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2.5 rounded-full bg-white hover:bg-sky-50 text-slate-600 hover:text-slate-900 border border-sky-200 shadow-md transition"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
