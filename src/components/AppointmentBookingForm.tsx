import { useState, FormEvent, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CLINIC_INFO,
  CLINIC_SERVICES,
  INSURANCE_PARTNERS,
} from '../data/clinicData';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Shield,
  MessageSquare,
  CheckCircle,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  MessageCircle,
  MapPin,
  AlertCircle,
} from 'lucide-react';

interface AppointmentBookingProps {
  initialServiceId?: string | null;
}

export default function AppointmentBookingForm({
  initialServiceId,
}: AppointmentBookingProps) {
  const [formData, setFormData] = useState({
    serviceId: 'hollywood-smile',
    preferredDate: '',
    timeSlot: 'evening',
    fullName: '',
    phone: '',
    email: '',
    qidOrPassport: '',
    insuranceProvider: 'None / Self-Pay',
    notes: '',
    whatsappReminders: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    referenceId: string;
    submittedAt: string;
    details: typeof formData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter patient full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a contact phone number (e.g. +974).';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please provide a valid 8-digit Qatar mobile number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address for confirmation.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `LQDC-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;

      setConfirmedBooking({
        referenceId: refId,
        submittedAt: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        details: { ...formData },
      });
      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#10b981', '#14b8a6', '#f59e0b', '#38bdf8'],
        });
      } catch (err) {
        // ignore
      }
    }, 850);
  };

  const handleCopyRef = () => {
    if (confirmedBooking) {
      navigator.clipboard.writeText(confirmedBooking.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      serviceId: 'hollywood-smile',
      preferredDate: '',
      timeSlot: 'evening',
      fullName: '',
      phone: '',
      email: '',
      qidOrPassport: '',
      insuranceProvider: 'None / Self-Pay',
      notes: '',
      whatsappReminders: true,
    });
    setErrors({});
  };

  // Min date for appointment is today
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-16 bg-slate-900 text-slate-100 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Fast Online Scheduling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Book Your Dental Consultation
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Schedule an appointment with our specialist dental doctors in Doha. We confirm bookings promptly via SMS and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            {confirmedBooking ? (
              /* Success Confirmation Card */
              <div className="py-6 text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Consultation Request Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{confirmedBooking.details.fullName}</strong>. Your dental appointment request has been recorded. Our reception coordinator will verify the schedule and send you an SMS/WhatsApp confirmation.
                  </p>
                </div>

                {/* Reference Box */}
                <div className="bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-800 max-w-md mx-auto text-left">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Booking Reference</span>
                    <span>{confirmedBooking.submittedAt}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-emerald-400">
                      {confirmedBooking.referenceId}
                    </span>
                    <button
                      onClick={handleCopyRef}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-1.5">
                    <div>
                      <span className="text-slate-500">Selected Treatment:</span>{' '}
                      <span className="font-semibold text-white">
                        {CLINIC_SERVICES.find(
                          (s) => s.id === confirmedBooking.details.serviceId
                        )?.title || confirmedBooking.details.serviceId}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Date &amp; Slot:</span>{' '}
                      <span className="text-white font-medium">
                        {confirmedBooking.details.preferredDate} (
                        {confirmedBooking.details.timeSlot.toUpperCase()})
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Contact Mobile:</span>{' '}
                      <span className="text-white">{confirmedBooking.details.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Insurance Network:</span>{' '}
                      <span className="text-emerald-400">
                        {confirmedBooking.details.insuranceProvider}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Confirmation Button */}
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/97466810011?text=Hello%20Lebanese%20Qatari%20Dental%20Complex,%20I%20have%20submitted%20appointment%20request%20${confirmedBooking.referenceId}%20for%20${encodeURIComponent(
                      confirmedBooking.details.fullName
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Verification</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Book Another Appointment</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-800 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    Patient Appointment Form
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Please provide your contact information and clinical preferences.
                  </p>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Select Dental Treatment or Specialty <span className="text-emerald-400">*</span>
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceId: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
                  >
                    {CLINIC_SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.id}>
                        {svc.title} — {svc.arabicTitle}
                      </option>
                    ))}
                    <option value="general-consult">
                      General Oral Checkup &amp; Consultation — فحص واستشارة عامة
                    </option>
                    <option value="emergency-toothache">
                      Emergency Toothache &amp; Trauma — طوارئ ألم الأسنان
                    </option>
                  </select>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Date <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="date"
                      min={todayString}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none transition ${
                        errors.preferredDate
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-slate-700 focus:border-emerald-400'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-[11px] text-red-400 mt-1">
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Time Slot <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) =>
                        setFormData({ ...formData, timeSlot: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
                    >
                      <option value="morning">Morning (09:00 AM – 12:30 PM)</option>
                      <option value="afternoon">Afternoon (12:30 PM – 05:00 PM)</option>
                      <option value="evening">Evening (05:00 PM – 09:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Name & Qatar Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Patient Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Abdullah Al-Thani"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition ${
                        errors.fullName
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-slate-700 focus:border-emerald-400'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mobile Number (WhatsApp) <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+974 55XX XXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-slate-700 focus:border-emerald-400'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email & Qatar ID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="patient@example.qa"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-slate-700 focus:border-emerald-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      QID / Passport Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="11-digit QID for medical records"
                      value={formData.qidOrPassport}
                      onChange={(e) =>
                        setFormData({ ...formData, qidOrPassport: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>
                </div>

                {/* Insurance Network Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Medical Insurance Coverage
                  </label>
                  <select
                    value={formData.insuranceProvider}
                    onChange={(e) =>
                      setFormData({ ...formData, insuranceProvider: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
                  >
                    <option value="None / Self-Pay">None / Self-Pay (Credit Card, Debit, Cash)</option>
                    {INSURANCE_PARTNERS.map((ins, i) => (
                      <option key={i} value={ins.name}>
                        {ins.name} ({ins.tag})
                      </option>
                    ))}
                    <option value="Other International Policy">Other International Insurance</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Specific Symptoms, Questions or Cosmetic Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you'd like to treat or improve (e.g. upper front gap, toothache on cold, wish to whiten teeth)..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition"
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="whatsappReminders"
                    checked={formData.whatsappReminders}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whatsappReminders: e.target.checked,
                      })
                    }
                    className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-400"
                  />
                  <label htmlFor="whatsappReminders" className="text-xs text-slate-400">
                    Send appointment reminder and clinic location pin to my WhatsApp number.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Appointment Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Sidebar: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-7 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Clinic Working Hours
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                {CLINIC_INFO.workingHours.map((wh, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center"
                  >
                    <span className="font-semibold text-white">{wh.days}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">{wh.hours}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Clinic Address</div>
                    <div className="text-slate-400 text-[11px]">
                      {CLINIC_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Telephone Reception</div>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-slate-300 hover:text-emerald-400 font-mono transition"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">WhatsApp Direct Chat</div>
                    <a
                      href="https://wa.me/97466810011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-emerald-400 font-mono transition"
                    >
                      {CLINIC_INFO.mobileWhatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency & Same-Day Note */}
            <div className="bg-emerald-950/30 rounded-3xl border border-emerald-500/30 p-5 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-300">
                <AlertCircle className="w-4 h-4 text-emerald-400" />
                <span>Urgent Dental Toothache or Emergency?</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Patients suffering from severe tooth pain, dental abscess, chipped front teeth, or broken restorations are prioritized with same-day emergency appointment slots.
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="font-bold text-emerald-400 hover:underline"
                >
                  Call +974 4466 6028 for Immediate Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
