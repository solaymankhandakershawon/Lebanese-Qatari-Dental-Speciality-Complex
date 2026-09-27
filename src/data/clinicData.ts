export interface DentalService {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'cosmetic' | 'orthodontics' | 'implants' | 'general' | 'pediatric' | 'surgery';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  duration: string;
  technology: string;
  image: string;
}

export interface ClinicDoctor {
  id: string;
  name: string;
  title: string;
  credentials: string;
  specialty: string;
  languages: string[];
  experience: string;
  image: string;
}

export interface NearbyPoint {
  id: string;
  name: string;
  category: 'clinic' | 'hospital' | 'pharmacy' | 'transit' | 'parking';
  categoryLabel: string;
  lat: number;
  lng: number;
  address: string;
  distance: string;
  hours: string;
  phone?: string;
  description: string;
  rating?: number;
  reviews?: number;
}

export const CLINIC_COORDINATES = {
  lat: 25.3071577,
  lng: 51.4872888,
};

export const CLINIC_INFO = {
  name: 'Lebanese Qatari Dental Speciality Complex',
  arabicName: 'المجمع القطري اللبناني لطب الأسنان',
  tagline: 'Leading Dental Excellence & Hollywood Smile Design in Doha, Qatar',
  address: 'Al Jazeera Al Arabia St / Ahmad Bin Hanbal St, Madinat Khalifa South / Fereej Bin Omran, Doha, Qatar',
  phone: '+974 4466 6028',
  mobileWhatsapp: '+974 6681 0011',
  email: 'info@lebaneseqataridental.com',
  rating: 4.8,
  totalReviews: 860,
  workingHours: [
    { days: 'Saturday – Thursday', hours: '09:00 AM – 09:30 PM' },
    { days: 'Friday', hours: '02:00 PM – 09:00 PM (Emergency & By Appointment)' }
  ],
  mapsUrl: 'https://maps.app.goo.gl/SKjDTEnq7h2Hw7wZ6',
};

export const CLINIC_SERVICES: DentalService[] = [
  {
    id: 'hollywood-smile',
    title: 'Hollywood Smile & Porcelain Veneers',
    arabicTitle: 'ابتسامة هوليوود وقشور البورسلين',
    category: 'cosmetic',
    shortDesc: 'Ultra-thin E-max ceramic veneers and custom 3D Digital Smile Design for a natural radiant glow.',
    fullDesc: 'Custom-crafted ceramic laminates, lumineers, and minimally invasive E-max veneers designed to correct discoloration, gaps, chipped teeth, and smile asymmetry.',
    features: ['3D Digital Smile Simulation', 'Zero or Minimal Tooth Reduction', 'Stain-Resistant E-max Porcelain', 'Customized Natural Tooth Shading'],
    duration: '2 - 3 Visits',
    technology: '3D CAD/CAM Intraoral Scanning',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dental-implants',
    title: 'Titanium & Ceramic Dental Implants',
    arabicTitle: 'زراعة الأسنان الفورية والتقليدية',
    category: 'implants',
    shortDesc: 'Permanent lifelong tooth replacement with computer-guided surgical precision and bone grafting.',
    fullDesc: 'Replace single or multiple missing teeth with Swiss and German medical-grade titanium implants, including immediate loading (teeth in a day) and 3D CBCT guided surgery.',
    features: ['High-Success Swiss Implant Systems', 'Computer-Guided Flapless Surgery', 'Sinus Lift & Bone Augmentation', 'Natural Zirconia Aesthetic Crowns'],
    duration: '1 - 3 Months',
    technology: '3D CBCT Diagnostic Navigation',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'orthodontics-aligners',
    title: 'Orthodontics & Clear Aligners',
    arabicTitle: 'تقويم الأسنان والتقويم الشفاف',
    category: 'orthodontics',
    shortDesc: 'Discreet invisible aligners and Damon ceramic braces for both teens and adult patients.',
    fullDesc: 'Comprehensive orthodontic evaluation using AI-driven 3D cephalometric analysis. Choose between invisible removable aligners or advanced low-friction ceramic brackets.',
    features: ['Virtually Invisible Clear Aligners', 'Customized Aligners Simulation', 'Damon Self-Ligating Ceramic Braces', 'Correction of Severe Crowding & Bites'],
    duration: '6 - 18 Months',
    technology: 'Digital Ortho Simulation',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'laser-teeth-whitening',
    title: 'Laser Teeth Whitening (Zoom 2)',
    arabicTitle: 'تبييض الأسنان بالليزر وزووم',
    category: 'cosmetic',
    shortDesc: 'Clinically proven up to 8 shades whiter in just 45 minutes with low-sensitivity laser treatment.',
    fullDesc: 'Advanced Philips Zoom 2 Power Bleaching and diode laser activation safely breaks down deep enamel stains caused by coffee, tea, and aging without harming your enamel.',
    features: ['Up to 8 Shades Brighter in 1 Hour', 'Anti-Sensitivity Desensitizing Gel', 'Enamel-Safe Formulation', 'Take-Home Maintenance Kit Included'],
    duration: '45 - 60 Minutes',
    technology: 'Philips Zoom 2 & Diode Dental Laser',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'root-canal-therapy',
    title: 'Microscopic Root Canal Treatment',
    arabicTitle: 'علاج جذور وأعصاب الأسنان بالمجهر',
    category: 'general',
    shortDesc: 'Painless single-visit endodontics preserving your natural tooth using dental operating microscope.',
    fullDesc: 'Advanced rotary endodontic instrumentation and 3D warm vertical obturation eliminate dental infection and relieve severe toothache quickly and comfortably.',
    features: ['High-Power Dental Operating Microscope', 'Single-Visit Rapid Completion', 'Gentle Anesthesia Protocol', 'Crown Placement for Lasting Strength'],
    duration: '45 - 75 Minutes',
    technology: 'Rotary Apex Locators & 3D Optics',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dental Care & Prevention',
    arabicTitle: 'طب أسنان الأطفال والوقاية',
    category: 'pediatric',
    shortDesc: 'Friendly, anxiety-free pediatric dental care, fissure sealants, fluoride and gentle care.',
    fullDesc: 'Specially trained pediatric dentists create a fun, stress-free environment for kids with preventive fluoride varnishes, space maintainers, and gentle restorations.',
    features: ['Child-Friendly Treatment Rooms', 'Protective Pit & Fissure Sealants', 'Fluoride Remineralization Therapy', 'Habit Breaking & Growth Monitoring'],
    duration: '30 - 45 Minutes',
    technology: 'Needle-Free Surface Numbing',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'oral-surgery-wisdom',
    title: 'Oral Surgery & Wisdom Teeth Removal',
    arabicTitle: 'جراحة الفم وقلع ضرس العقل',
    category: 'surgery',
    shortDesc: 'Minimally invasive surgical removal of impacted wisdom teeth with rapid recovery protocols.',
    fullDesc: 'Expert oral surgeons handle complex impactions, surgical extractions, cyst enucleation, and pre-prosthetic surgery with modern piezoelectric ultrasonic instruments.',
    features: ['Piezoelectric Ultrasonic Bone Cutting', 'Rapid Healing & Minimal Swelling', 'Local Sedation & Comfort Management', 'Post-Op Follow-up Care Protocol'],
    duration: '30 - 60 Minutes',
    technology: 'Piezo Ultrasonic Surgery Unit',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'periodontal-gum-care',
    title: 'Periodontics & Laser Gum Contouring',
    arabicTitle: 'علاج وتجميل اللثة بالليزر',
    category: 'cosmetic',
    shortDesc: 'Treatment of bleeding gums, deep ultrasonic scaling, and aesthetic gummy smile correction.',
    fullDesc: 'Restore healthy pink gums, treat periodontitis, and eliminate "gummy smile" with precision soft-tissue lasers without scalpel cuts or bleeding.',
    features: ['Laser Gummy Smile Recontouring', 'Ultrasonic Deep Tartar Scaling', 'Treatment of Gum Recessions', 'Fresh Breath Periodontal Program'],
    duration: '40 - 60 Minutes',
    technology: 'Soft-Tissue Biolase Laser',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  }
];

export const NEARBY_POINTS: NearbyPoint[] = [
  {
    id: 'lqdc-main',
    name: 'Lebanese Qatari Dental Speciality Complex (Main Clinic)',
    category: 'clinic',
    categoryLabel: 'Speciality Dental Complex',
    lat: 25.3071577,
    lng: 51.4872888,
    address: 'Al Jazeera Al Arabia St, Madinat Khalifa South, Doha',
    distance: 'Current Location',
    hours: '09:00 AM – 09:30 PM (Sat–Thu)',
    phone: '+974 4466 6028',
    description: 'Premier multi-specialty dental clinic in Doha with 8 modern dental operatories, 3D imaging lab, sterilization center, and VIP patient suites.',
    rating: 4.8,
    reviews: 860,
  },
  {
    id: 'hamad-hospital',
    name: 'Hamad Medical City & Women’s Wellness Center',
    category: 'hospital',
    categoryLabel: 'Government Hospital Complex',
    lat: 25.3005,
    lng: 51.4942,
    address: 'Al Rayyan Rd, Hamad Medical City, Doha',
    distance: '1.2 km (4 mins drive)',
    hours: '24/7 Emergency Care',
    description: 'Qatar’s principal tertiary medical healthcare complex and medical research hub.',
  },
  {
    id: 'al-meera-khalifa',
    name: 'Al Meera Madinat Khalifa Shopping Complex',
    category: 'parking',
    categoryLabel: 'Retail & Convenience Parking',
    lat: 25.3092,
    lng: 51.4845,
    address: 'Al Jazeera Al Arabia St, Doha',
    distance: '350m (4 mins walk)',
    hours: '07:00 AM – 11:30 PM Daily',
    description: 'Convenient shopping, pharmacy, banking ATMs, and ample customer parking.',
  },
  {
    id: 'al-omran-pharmacy',
    name: 'Bin Omran Speciality Pharmacy',
    category: 'pharmacy',
    categoryLabel: 'Pharmacy & Medical Supplies',
    lat: 25.3058,
    lng: 51.4905,
    address: 'Ahmad Bin Hanbal St, Fereej Bin Omran, Doha',
    distance: '280m (3 mins walk)',
    hours: 'Open 24 Hours',
    phone: '+974 4488 2211',
    description: 'Comprehensive 24/7 pharmacy stocking all dental antibiotics, analgesics, antiseptic mouthwashes, and oral hygiene supplies.',
  },
  {
    id: 'doha-metro-green',
    name: 'Al Messila Metro Station (Green Line)',
    category: 'transit',
    categoryLabel: 'Doha Metro Rail',
    lat: 25.2974,
    lng: 51.4822,
    address: 'Al Rayyan Road, Al Messila / Madinat Khalifa, Doha',
    distance: '1.4 km (Metro Feeder Bus M208/M209)',
    hours: '05:30 AM – 11:59 PM (Fri: 02:00 PM – 01:00 AM)',
    description: 'Convenient rapid transit connecting from Msheireb, Education City, and Al Mansoura with frequent Metrolink buses.',
  },
  {
    id: 'al-ahli-hospital',
    name: 'Al Ahli Hospital Qatar',
    category: 'hospital',
    categoryLabel: 'Private Hospital',
    lat: 25.3125,
    lng: 51.4920,
    address: 'Ahmed Bin Ali St, Wadi Al Sail, Doha',
    distance: '1.5 km (5 mins drive)',
    hours: '24/7 Inpatient & Outpatient',
    phone: '+974 4489 8888',
    description: 'Prominent private healthcare institution in central Doha.',
  }
];

export const INSURANCE_PARTNERS = [
  { name: 'QLM Life & Medical Insurance', tag: 'Direct Billing' },
  { name: 'Doha Insurance Group (DIG)', tag: 'Direct Billing' },
  { name: 'Alkoot Global Medical Care', tag: 'Instant Approvals' },
  { name: 'MetLife Gulf', tag: 'Direct Billing' },
  { name: 'MedNet Qatar', tag: 'Direct Billing' },
  { name: 'NextCare Health', tag: 'Fast Claiming' },
  { name: 'Allianz Care', tag: 'International' },
  { name: 'Bupa Global', tag: 'Worldwide Cover' },
];

export const PATIENT_TESTIMONIALS = [
  {
    name: 'Fatima Al-Kuwari',
    role: 'Doha Resident',
    service: 'Hollywood Smile & E-max Veneers',
    rating: 5,
    comment: 'The team at Lebanese Qatari Dental Complex transformed my smile completely! The 3D Digital Smile preview allowed me to see the final shape before we even started. The finish looks incredibly natural.',
    date: '2 weeks ago',
  },
  {
    name: 'Tariq Mansour',
    role: 'Engineer, West Bay',
    service: 'Dental Implant & Crown',
    rating: 5,
    comment: 'I was very anxious about getting a dental implant after losing a molar. The doctor made the surgical procedure completely painless, and the healing was faster than I expected. Excellent clinic!',
    date: '1 month ago',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Educator, Madinat Khalifa',
    service: 'Philips Zoom 2 Laser Whitening',
    rating: 5,
    comment: 'Booked an appointment through WhatsApp and got seen right on time. My teeth became 7 shades whiter in under an hour without any lingering sensitivity. Highly recommended!',
    date: '3 weeks ago',
  },
  {
    name: 'Dr. Salem Al-Marri',
    role: 'Business Consultant',
    service: 'Invisalign Clear Aligners',
    rating: 5,
    comment: 'Very professional doctors and exceptionally clean sterilization rooms. They accepted my insurance directly and the follow-up care has been world-class.',
    date: '2 months ago',
  }
];

export const CLINIC_KEY_STATS = [
  { value: '18+', label: 'Years in Doha', sub: 'Trusted dental provider in Qatar' },
  { value: '25,000+', label: 'Happy Patients', sub: 'Smiles designed & restored' },
  { value: '100%', label: 'MOPH Compliant', sub: 'Hospital-grade autoclaves & safety' },
  { value: '8', label: 'Dental Operatories', sub: 'Equipped with 3D imaging & lasers' },
];
