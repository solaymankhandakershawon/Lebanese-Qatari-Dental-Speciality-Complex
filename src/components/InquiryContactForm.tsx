import { useState, FormEvent } from 'react';
import confetti from 'canvas-confetti';
import {
  INQUIRY_CATEGORIES,
} from '../data/stadiumData';
import {
  Mail,
  Send,
  CheckCircle,
  Clock,
  Phone,
  MapPin,
  Building,
  Calendar,
  Users,
  MessageSquare,
  HelpCircle,
  Copy,
  Check,
  RotateCcw,
} from 'lucide-react';

export default function InquiryContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'event_rental',
    preferredDate: '',
    groupSize: '1-10',
    message: '',
    newsletter: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<{
    referenceId: string;
    submittedAt: string;
    details: typeof formData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your inquiry.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please write at least 15 characters to explain your requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      const refId = `GA-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;

      setSubmittedInquiry({
        referenceId: refId,
        submittedAt: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        details: { ...formData },
      });
      setIsSubmitting(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#dc2626', '#ffffff', '#10b981'],
        });
      } catch (e) {
        // ignore
      }
    }, 800);
  };

  const handleCopyRef = () => {
    if (submittedInquiry) {
      navigator.clipboard.writeText(submittedInquiry.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      inquiryType: 'event_rental',
      preferredDate: '',
      groupSize: '1-10',
      message: '',
      newsletter: true,
    });
    setErrors({});
  };

  return (
    <section id="inquiry-form" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Venue Operations &amp; Bookings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Inquiries &amp; Facility Contact
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            Planning a corporate conference, private rooftop event, commercial space lease, guided group tour, or VIP hospitality package? Contact the venue management team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-8 shadow-xl">
            {submittedInquiry ? (
              /* Success State */
              <div className="py-6 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{submittedInquiry.details.name}</strong>. Our stadium operations coordinator will review your request and contact you within 24 business hours.
                  </p>
                </div>

                {/* Reference Box */}
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 max-w-md mx-auto text-left">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                    <span>Reference Tracking ID</span>
                    <span>{submittedInquiry.submittedAt}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-amber-400">
                      {submittedInquiry.referenceId}
                    </span>
                    <button
                      onClick={handleCopyRef}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition"
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

                  <div className="mt-4 pt-3 border-t border-stone-800 text-xs text-stone-400 space-y-1">
                    <div>
                      <span className="text-stone-500">Inquiry Type:</span>{' '}
                      <span className="text-stone-300 font-medium capitalize">
                        {INQUIRY_CATEGORIES.find(
                          (c) => c.id === submittedInquiry.details.inquiryType
                        )?.label || submittedInquiry.details.inquiryType}
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-500">Email:</span>{' '}
                      <span className="text-stone-300">{submittedInquiry.details.email}</span>
                    </div>
                    <div>
                      <span className="text-stone-500">Phone:</span>{' '}
                      <span className="text-stone-300">{submittedInquiry.details.phone}</span>
                    </div>
                    {submittedInquiry.details.preferredDate && (
                      <div>
                        <span className="text-stone-500">Preferred Date:</span>{' '}
                        <span className="text-stone-300">
                          {submittedInquiry.details.preferredDate}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-stone-800 pb-4 mb-4">
                  <h3 className="text-lg font-bold text-white">
                    Submit Venue Inquiry
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Fill in your details below and our operations office will get back to you promptly.
                  </p>
                </div>

                {/* Inquiry Category Select */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Nature of Inquiry <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) =>
                      setFormData({ ...formData, inquiryType: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                  >
                    {INQUIRY_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-stone-900 border rounded-xl text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none transition ${
                        errors.name
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-stone-700 focus:border-amber-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="ahmet@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-stone-900 border rounded-xl text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none transition ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-stone-700 focus:border-amber-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Organization Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+90 (5XX) XXX XX XX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-stone-900 border rounded-xl text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none transition ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-stone-700 focus:border-amber-400'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Company, Agency or School"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                {/* Preferred Date & Group Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Preferred Date (Target Window)
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Estimated Attendees / Scale
                    </label>
                    <select
                      value={formData.groupSize}
                      onChange={(e) =>
                        setFormData({ ...formData, groupSize: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                    >
                      <option value="1-5">1 - 5 Persons</option>
                      <option value="6-20">6 - 20 Persons</option>
                      <option value="21-50">21 - 50 Persons (Tour Group)</option>
                      <option value="51-200">51 - 200 Persons (Banquet / Hall)</option>
                      <option value="200+">200+ Persons (Large Scale)</option>
                    </select>
                  </div>
                </div>

                {/* Detailed Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Inquiry Details &amp; Specific Requirements <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your event schedule, commercial space needs, catering, audiovisual requests, or any special questions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 bg-stone-900 border rounded-xl text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none transition ${
                      errors.message
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-stone-700 focus:border-amber-400'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      setFormData({ ...formData, newsletter: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-stone-700 bg-stone-900 text-amber-500 focus:ring-amber-400"
                  />
                  <label htmlFor="newsletter" className="text-xs text-stone-400">
                    Receive announcements regarding upcoming stadium events, concerts, and rooftop sky walk schedules.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 transition shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Official Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card */}
            <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-400" />
                Venue Administration Offices
              </h3>

              <div className="space-y-3.5 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Stadium Address</div>
                    <div className="text-stone-400">
                      Gürsel Aksel Stadyumu, Mehmetçik Bulvarı No:6, 35290 Konak / İzmir, Türkiye
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Telephone Switchboard</div>
                    <a
                      href="tel:+902322501925"
                      className="text-stone-400 hover:text-amber-400 transition"
                    >
                      +90 (232) 250 1925
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Correspondence</div>
                    <a
                      href="mailto:iletisim@goztepe.org.tr"
                      className="text-stone-400 hover:text-amber-400 transition"
                    >
                      iletisim@goztepe.org.tr / info@gurselaksel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Office Working Hours</div>
                    <div className="text-stone-400">
                      Monday – Friday: 09:00 – 18:00 <br />
                      Matchdays: Special operations schedule
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry FAQs */}
            <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                Frequently Asked Inquiries
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                  <div className="font-semibold text-stone-200">
                    Can external parties book the 650m rooftop for private events?
                  </div>
                  <p className="text-stone-400 mt-1 leading-relaxed">
                    Yes! Sunset cocktails, product launches, and brand activations are hosted on the Sky Track deck subject to advance scheduling.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                  <div className="font-semibold text-stone-200">
                    Are commercial retail spaces available on the concourse?
                  </div>
                  <p className="text-stone-400 mt-1 leading-relaxed">
                    Selected ground floor boutique units and pop-up kiosks are leased for cafes, fan services, and sporting brands.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                  <div className="font-semibold text-stone-200">
                    How do school or tour groups book the Göztepe Museum?
                  </div>
                  <p className="text-stone-400 mt-1 leading-relaxed">
                    Select "Göztepe Museum & School Visits" above to schedule a guided docent tour with student group discounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
