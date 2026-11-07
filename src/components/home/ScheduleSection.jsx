import { useLanguage } from '../../context/LanguageContext'
import { DAYS, DOCTORS } from '../../data/clinic'
import { UI } from '../../i18n/ui'
import SectionHeading from '../SectionHeading'

export default function ScheduleSection() {
  const { tx } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        id="schedule"
        title={tx(UI.sections.schedule)}
        subtitle={tx(UI.sections.scheduleSub)}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DAYS.map((day) => {
          const visitingDoctors = DOCTORS.filter((doctor) => doctor.days.includes(day.key))
          return (
            <div key={day.key} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="border-b border-slate-200 pb-3 text-base font-semibold text-slate-900">
                {tx(day)}
              </h3>
              {visitingDoctors.length === 0 ? (
                <p className="mt-4 text-sm text-slate-500">{tx(UI.schedule.noVisits)}</p>
              ) : (
                <ul className="mt-4 flex flex-col gap-3">
                  {visitingDoctors.map((doctor) => (
                    <li key={doctor.id} className="rounded-lg bg-teal-50 px-3 py-2.5">
                      <p className="text-sm font-semibold text-teal-900">{tx(doctor.name)}</p>
                      <p className="text-xs text-teal-700">{tx(doctor.time)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
