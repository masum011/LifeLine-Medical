export const WHATSAPP_NUMBER = '919083827894';

export const CLINIC = {
  name: { en: 'LifeLine Medical', bn: 'লাইফলাইন মেডিকেল' },
  owner: { en: 'Owned by Suroj', bn: 'স্বত্বাধিকারী: সুরজ' },
 
address: {
  en: 'Chanchal Rajib More, Ashapur Road, Opposite Swimming Pool, Hospital Road, Chanchal, Malda, West Bengal.',
  bn: 'চাঁচল রাজীব মোড়, আশাপুর রোড, সুইমিং পুলের বিপরীতে, হাসপাতাল রোড, চাঁচল, মালদা, পশ্চিমবঙ্গ।',
},

  mapUrl: 'https://www.google.com/maps/search/?api=1&query=LifeLine+Medical+Dhaka',
  phone: '+91 9083827894',
  phoneHref: 'tel:+919083827894',
  email: 'hello@lifelinemedical.com',
  hours: { en: 'Open daily: 9:00 AM - 10:00 PM', bn: 'প্রতিদিন খোলা: সকাল ৯:০০ - রাত ১০:০০' },
};

export const DAYS = [
  { key: 'sat', jsIndex: 6, en: 'Saturday', bn: 'শনিবার' },
  { key: 'sun', jsIndex: 0, en: 'Sunday', bn: 'রবিবার' },
  { key: 'mon', jsIndex: 1, en: 'Monday', bn: 'সোমবার' },
  { key: 'tue', jsIndex: 2, en: 'Tuesday', bn: 'মঙ্গলবার' },
  { key: 'wed', jsIndex: 3, en: 'Wednesday', bn: 'বুধবার' },
  { key: 'thu', jsIndex: 4, en: 'Thursday', bn: 'বৃহস্পতিবার' },
  { key: 'fri', jsIndex: 5, en: 'Friday', bn: 'শুক্রবার' },
];

export const DOCTORS = [
  {
    id: 'rahim-uddin',
    name: { en: 'Dr. Rahim Uddin', bn: 'ডা. রহিম উদ্দিন' },
    specialty: { en: 'General Physician', bn: 'জেনারেল ফিজিশিয়ান' },
    qualifications: 'MBBS, BCS (Health)',
    experienceYears: 12,
    fee: 500,
    days: ['sat', 'sun', 'mon'],
    time: { en: '6:00 PM - 9:00 PM', bn: 'সন্ধ্যা ৬:০০ - রাত ৯:০০' },
    slots: ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'],
  },
  {
    id: 'nusrat-jahan',
    name: { en: 'Dr. Nusrat Jahan', bn: 'ডা. নুসরাত জাহান' },
    specialty: { en: 'Gynecologist & Obstetrician', bn: 'স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ' },
    qualifications: 'MBBS, FCPS (Obs & Gynae)',
    experienceYears: 15,
    fee: 800,
    days: ['sat', 'mon', 'wed'],
    time: { en: '10:00 AM - 1:00 PM', bn: 'সকাল ১০:০০ - দুপুর ১:০০' },
    slots: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],
  },
  {
    id: 'arif-hossain',
    name: { en: 'Dr. Arif Hossain', bn: 'ডা. আরিফ হোসেন' },
    specialty: { en: 'Cardiologist', bn: 'হৃদরোগ বিশেষজ্ঞ' },
    qualifications: 'MBBS, MD (Cardiology)',
    experienceYears: 18,
    fee: 1000,
    days: ['sun', 'tue', 'thu'],
    time: { en: '4:00 PM - 7:00 PM', bn: 'বিকাল ৪:০০ - সন্ধ্যা ৭:০০' },
    slots: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'],
  },
  {
    id: 'farzana-akter',
    name: { en: 'Dr. Farzana Akter', bn: 'ডা. ফারজানা আক্তার' },
    specialty: { en: 'Pediatrician', bn: 'শিশু বিশেষজ্ঞ' },
    qualifications: 'MBBS, DCH',
    experienceYears: 9,
    fee: 600,
    days: ['sat', 'tue', 'thu', 'fri'],
    time: { en: '9:00 AM - 12:00 PM', bn: 'সকাল ৯:০০ - দুপুর ১২:০০' },
    slots: ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  },
];

export const SERVICES = [
  { id: 'pharmacy', icon: 'Pill', title: { en: 'Pharmacy', bn: 'ফার্মেসি' }, description: { en: 'Prescription and everyday medicines, with genuine products and careful dispensing.', bn: 'প্রেসক্রিপশন ও প্রতিদিনের ওষুধ, খাঁটি পণ্য ও যত্নসহকারে সরবরাহ।' } },
  { id: 'consultation', icon: 'Stethoscope', title: { en: 'Doctor consultation', bn: 'ডাক্তার পরামর্শ' }, description: { en: 'General and specialist consultations by appointment or walk-in.', bn: 'অ্যাপয়েন্টমেন্ট বা সরাসরি উপস্থিত হয়ে জেনারেল ও বিশেষজ্ঞ পরামর্শ।' } },
  { id: 'cardiology', icon: 'HeartPulse', title: { en: 'Heart care', bn: 'হৃদরোগ সেবা' }, description: { en: 'Heart check-ups, ECG and blood pressure monitoring.', bn: 'হৃদরোগ পরীক্ষা, ইসিজি ও রক্তচাপ পর্যবেক্ষণ।' } },
  { id: 'injection', icon: 'Syringe', title: { en: 'Injection & dressing', bn: 'ইনজেকশন ও ড্রেসিং' }, description: { en: 'Safe injections, IV support and wound dressing by trained staff.', bn: 'প্রশিক্ষিত কর্মী দ্বারা নিরাপদ ইনজেকশন, স্যালাইন ও ক্ষত ড্রেসিং।' } },
  { id: 'child', icon: 'Baby', title: { en: 'Child health', bn: 'শিশু স্বাস্থ্য' }, description: { en: 'Pediatric visits, growth checks and vaccination guidance.', bn: 'শিশু চিকিৎসা, বৃদ্ধি পরীক্ষা ও টিকা বিষয়ক পরামর্শ।' } },
  { id: 'tests', icon: 'FlaskConical', title: { en: 'Basic tests', bn: 'প্রাথমিক পরীক্ষা' }, description: { en: 'Blood sugar, blood pressure and other quick health checks.', bn: 'রক্তে শর্করা, রক্তচাপ ও অন্যান্য দ্রুত স্বাস্থ্য পরীক্ষা।' } },
  { id: 'monitoring', icon: 'Activity', title: { en: 'Health monitoring', bn: 'স্বাস্থ্য পর্যবেক্ষণ' }, description: { en: 'Regular follow-ups to track your progress and adjust treatment.', bn: 'চিকিৎসার অগ্রগতি জানতে ও প্রয়োজনে পরিবর্তন করতে নিয়মিত ফলো-আপ।' } },
  { id: 'delivery', icon: 'Truck', title: { en: 'Home delivery', bn: 'বাসায় ডেলিভারি' }, description: { en: 'Medicines delivered to your door within the city.', bn: 'শহরের মধ্যে আপনার দরজায় ওষুধ পৌঁছে দেওয়া হয়।' } },
];
