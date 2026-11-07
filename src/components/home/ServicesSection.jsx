import { Activity, Baby, FlaskConical, HeartPulse, Pill, Stethoscope, Syringe, Truck } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { SERVICES } from '../../data/clinic'
import { UI } from '../../i18n/ui'
import SectionHeading from '../SectionHeading'

const ICONS = { Activity, Baby, FlaskConical, HeartPulse, Pill, Stethoscope, Syringe, Truck }

export default function ServicesSection() {
  const { tx } = useLanguage()

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="services"
          title={tx(UI.sections.services)}
          subtitle={tx(UI.sections.servicesSub)}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <div
                key={service.id}
                className="group rounded-2xl border border-slate-200 p-6 transition-all hover:border-teal-300 hover:bg-teal-50/50 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700 transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{tx(service.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(service.description)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
