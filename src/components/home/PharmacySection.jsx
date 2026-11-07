import { BadgeCheck, Clock, MapPin, Phone, UserRound } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { CLINIC } from '../../data/clinic'
import { UI } from '../../i18n/ui'
import SectionHeading from '../SectionHeading'

const DETAILS = [
  { icon: Clock, label: UI.pharmacy.hours, value: CLINIC.hours },
  { icon: MapPin, label: UI.pharmacy.address, value: CLINIC.address },
  { icon: Phone, label: UI.pharmacy.phone, value: { en: CLINIC.phone, bn: CLINIC.phone } },
  { icon: UserRound, label: UI.pharmacy.owner, value: CLINIC.owner },
]

const FEATURES = [UI.pharmacy.prescription, UI.pharmacy.homeDelivery]

export default function PharmacySection() {
  const { tx } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        id="pharmacy"
        title={tx(UI.sections.pharmacy)}
        subtitle={tx(UI.sections.pharmacySub)}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="overflow-hidden rounded-2xl shadow-sm lg:col-span-2">
          <img
            src="https://images.pexels.com/photos/8657368/pexels-photo-8657368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt={tx(CLINIC.name)}
            className="h-full min-h-64 w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-3 md:p-8">
          <h3 className="text-xl font-semibold text-slate-900">{tx(CLINIC.name)}</h3>
          <dl className="grid gap-5 sm:grid-cols-2">
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <div key={label.en} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon size={18} />
                </span>
                <div>
                  <dt className="text-sm font-medium text-slate-500">{tx(label)}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-slate-900">{tx(value)}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-5">
            {FEATURES.map((feature) => (
              <span
                key={feature.en}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
              >
                <BadgeCheck size={16} />
                {tx(feature)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
