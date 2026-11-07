import Hero from '../components/home/Hero'
import PharmacySection from '../components/home/PharmacySection'
import DoctorsSection from '../components/home/DoctorsSection'
import ScheduleSection from '../components/home/ScheduleSection'
import ServicesSection from '../components/home/ServicesSection'
import ContactSection from '../components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PharmacySection />
      <DoctorsSection />
      <ScheduleSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
