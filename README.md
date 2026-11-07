
# 🏥 LifeLine Medical

A modern, responsive healthcare and pharmacy website designed for **LifeLine Medical**, owned by Suroj, located in Chanchal, Malda, West Bengal.

The platform helps customers explore medicines, view doctor profiles and visiting schedules, and request doctor appointments through WhatsApp.

## 🌐 Project Overview

LifeLine Medical provides a digital presence for a local pharmacy and healthcare service, making it easier for customers to access pharmacy information and doctor consultation schedules.

## ✨ Features

### 1. Homepage
- Modern and responsive healthcare UI.
- Pharmacy information and services.
- Contact details and store location.
- Doctor visiting schedule highlights.

### 2. Doctor Information
- Doctor profiles and specializations.
- Visiting days and schedules.
- Doctor selection.
- Appointment booking interface.

### 3. Appointment Booking
- Select a doctor.
- Choose appointment date and time.
- WhatsApp appointment request integration.
- Simple and user-friendly booking experience.

### 4. Medicine Catalogue
- Medicine categories.
- Product cards with images and prices.
- Medicine search and filtering.
- Stock availability display.

### 5. Additional Features
- Bengali and English language support.
- English as the default language.
- Responsive mobile-first design.
- Reusable React components.
- Static JSON/mock data.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite.js | Build tool and development server |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling and responsive design |
| React Context API | Language management |
| Lucide React | Icons |
| LocalStorage | Language preference persistence |

## 📁 Project Structure

```text
lifeline-medical/
│
├── public/
│   ├── images/
│   └── assets/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── doctors/
│   │   ├── medicines/
│   │   
│   │
│   ├── context/
│   │   └── LanguageContext.jsx
│   │
│   ├── data/
│   │   ├── doctors.js
│   │   ├── medicines.js
│   │   └── strings.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Doctors.jsx
│   │   ├── Appointments.jsx
│   │   └── Medicines.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm or yarn
- Code editor (VS Code recommended)

### Installation

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd lifeline-medical
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open in your browser:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📍 Pharmacy Information

**LifeLine Medical**

**Owner:** Suroj

**Address:**  
Chanchal Rajib More, Ashapur Road, Opposite Swimming Pool, Hospital Road, Chanchal, Malda, West Bengal, India.

**Contact Numbers:**
- 9083827894
- 9332001440
- 7063832377
- 9344150334

## 🌍 Language Support

The website supports:

- English (Default)
- Bengali

Customers can switch between languages using the language toggle.

## 🎨 Design Guidelines

- Primary colours: Blue, Green and White.
- Clean healthcare-inspired interface.
- Mobile-first responsive layout.
- Accessible typography and navigation.
- Consistent reusable UI components.

## 📌 Development Scope

This project currently focuses on the first three development phases:

- **Phase 1:** Homepage, pharmacy details, doctors and visiting schedules.
- **Phase 2:** Appointment booking UI and WhatsApp integration.
- **Phase 3:** Medicine catalogue, search, categories and stock display.

**Project Type:** Frontend-only static website.

**Note:** This version uses static/mock data. No backend, database, authentication, online payment or admin dashboard is included.

## 📄 License

This project is developed for LifeLine Medical.

All rights reserved.
