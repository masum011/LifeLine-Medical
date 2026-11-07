export const MEDICINE_CATEGORIES = [
  { id: 'pain', en: 'Pain & fever', bn: 'ব্যথা ও জ্বর' },
  { id: 'antibiotic', en: 'Antibiotics', bn: 'অ্যান্টিবায়োটিক' },
  { id: 'heart', en: 'Heart & blood pressure', bn: 'হৃদরোগ ও রক্তচাপ' },
  { id: 'diabetes', en: 'Diabetes care', bn: 'ডায়াবেটিস সেবা' },
  { id: 'digestive', en: 'Digestive', bn: 'পরিপাকতন্ত্র' },
  { id: 'vitamins', en: 'Vitamins & supplements', bn: 'ভিটামিন ও সাপ্লিমেন্ট' },
  { id: 'skin', en: 'Skin care', bn: 'ত্বকের যত্ন' },
  { id: 'first-aid', en: 'First aid', bn: 'প্রাথমিক চিকিৎসা' },
  { id: 'baby', en: 'Baby care', bn: 'শিশুর যত্ন' },
];

// stock: 'in' | 'low' | 'out'. Prices are in BDT.
export const MEDICINES = [
  { id: 'napa-extend', name: 'Napa Extend 665 mg', generic: 'Paracetamol 665 mg', category: 'pain', pack: { en: '10 tablets', bn: '১০টি ট্যাবলেট' }, price: 38, stock: 'in' },
  { id: 'ace-500', name: 'Ace 500 mg', generic: 'Paracetamol 500 mg', category: 'pain', pack: { en: '10 tablets', bn: '১০টি ট্যাবলেট' }, price: 22, stock: 'in' },
  { id: 'amoxil-500', name: 'Moxacil 500 mg', generic: 'Amoxicillin 500 mg', category: 'antibiotic', pack: { en: '10 capsules', bn: '১০টি ক্যাপসুল' }, price: 70, stock: 'in' },
  { id: 'azithrin-500', name: 'Azithrin 500 mg', generic: 'Azithromycin 500 mg', category: 'antibiotic', pack: { en: '3 tablets', bn: '৩টি ট্যাবলেট' }, price: 120, stock: 'out' },
  { id: 'cipro-500', name: 'Ciprocin 500 mg', generic: 'Ciprofloxacin 500 mg', category: 'antibiotic', pack: { en: '10 tablets', bn: '১০টি ট্যাবলেট' }, price: 55, stock: 'low' },
  { id: 'losacar-50', name: 'Losacar 50 mg', generic: 'Losartan 50 mg', category: 'heart', pack: { en: '14 tablets', bn: '১৪টি ট্যাবলেট' }, price: 95, stock: 'in' },
  { id: 'atorva-10', name: 'Atorva 10 mg', generic: 'Atorvastatin 10 mg', category: 'heart', pack: { en: '14 tablets', bn: '১৪টি ট্যাবলেট' }, price: 130, stock: 'in' },
  { id: 'glucomet-500', name: 'Glucomet 500 mg', generic: 'Metformin 500 mg', category: 'diabetes', pack: { en: '30 tablets', bn: '৩০টি ট্যাবলেট' }, price: 110, stock: 'in' },
  { id: 'glimer-2', name: 'Glimer 2 mg', generic: 'Glimepiride 2 mg', category: 'diabetes', pack: { en: '10 tablets', bn: '১০টি ট্যাবলেট' }, price: 45, stock: 'out' },
  { id: 'seclo-20', name: 'Seclo 20 mg', generic: 'Omeprazole 20 mg', category: 'digestive', pack: { en: '10 capsules', bn: '১০টি ক্যাপসুল' }, price: 60, stock: 'in' },
  { id: 'orsaline', name: 'Orsaline ORS', generic: 'Oral rehydration salts', category: 'digestive', pack: { en: '1 sachet', bn: '১টি স্যাশে' }, price: 10, stock: 'in' },
  { id: 'cevit-500', name: 'Cevit 500 mg', generic: 'Vitamin C 500 mg', category: 'vitamins', pack: { en: '10 tablets', bn: '১০টি ট্যাবলেট' }, price: 40, stock: 'in' },
  { id: 'd3-2000', name: 'Vitamin D3 2000 IU', generic: 'Cholecalciferol 2000 IU', category: 'vitamins', pack: { en: '30 capsules', bn: '৩০টি ক্যাপসুল' }, price: 350, stock: 'in' },
  { id: 'multi-zinc', name: 'Multivitamin with Zinc', generic: 'Multivitamin & zinc', category: 'vitamins', pack: { en: '30 tablets', bn: '৩০টি ট্যাবলেট' }, price: 180, stock: 'low' },
  { id: 'hc-cream', name: 'Hydrocortisone Cream 1%', generic: 'Hydrocortisone 1%', category: 'skin', pack: { en: '15 g tube', bn: '১৫ গ্রাম টিউব' }, price: 85, stock: 'in' },
  { id: 'chlorhex', name: 'Chlorhexidine Solution', generic: 'Chlorhexidine gluconate', category: 'first-aid', pack: { en: '100 ml bottle', bn: '১০০ মিলি বোতল' }, price: 120, stock: 'in' },
  { id: 'bandage-3', name: 'Crepe Bandage 3 inch', generic: 'Elastic crepe bandage', category: 'first-aid', pack: { en: '1 roll', bn: '১টি রোল' }, price: 25, stock: 'in' },
  { id: 'baby-para', name: 'Baby Paracetamol Syrup', generic: 'Paracetamol 120 mg / 5 ml', category: 'baby', pack: { en: '60 ml bottle', bn: '৬০ মিলি বোতল' }, price: 65, stock: 'in' },
  { id: 'baby-vit', name: 'Baby Multivitamin Drops', generic: 'Multivitamin drops', category: 'baby', pack: { en: '30 ml bottle', bn: '৩০ মিলি বোতল' }, price: 210, stock: 'low' },
];
